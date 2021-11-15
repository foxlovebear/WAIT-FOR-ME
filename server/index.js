const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.static("public")); //設定存餐廳照片的目錄

const port = 3001;
app.listen(port, () => {
  console.log("running:" + port);
});

const mysql = require("mysql");
const conn = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "foodie",
});

// ----------------------------易軒-------------------------------

//對應到storeSlice取得上架中的資料
app.get("/", (req, rep) => {
  conn.query(
    "SELECT * FROM stores where status = 1",
    // "SELECT * FROM stores as s left JOIN comment as c ON s.id = c.sid group by s.id;",
    (err, result) => {
      err ? console.log(err) : rep.send(JSON.stringify(result));
    }
  );
});
//放進<StoreListFather>
app.get("/page3", function (req, rep) {
  id = req.query.id;
  conn.query(
    "select * from stores where id = ? ;",
    [id],
    function (err, result) {
      err ? console.log(err) : rep.send(JSON.stringify(result));
    }
  );
});
//取得資料，這邊會放進commentSlice狀態庫，讓comment id 大到小排列
app.get("/comment", (req, res) => {
  conn.query(
    // "select * from stores",
    "SELECT * FROM comment ORDER BY comment.cid DESC",
    (err, result) => {
      err ? console.log(err) : res.send(JSON.stringify(result));
    }
  );
});
//對應到dataSlice取得全部的資料(包含下架中)
app.get("/data", (req, res) => {
  // console.log(res);
  conn.query(
    "SELECT * FROM `stores` ORDER BY `stores`.`id` DESC",
    (err, result) => {
      err ? console.log(err) : res.send(JSON.stringify(result));
    }
  );
});
//目前page2的資料是從page1就存下來的
// app.get("/page2", (req, rep) => {
//   conn.query("select * from stores", (err, result) => {
//     err ? console.log(err) : rep.send(JSON.stringify(result));
//   });
// });

//專題歷史紀錄(本來page2,3，都是從StoreIndex取得狀態)(<StoreIndex>要拿全部，<Detail>只要id=?的資料，兩個get(url)無法並存)
// app.get("/page3", function (req, rep) {
//   id = req.query.id;
//   conn.query(
//     id ? "select * from stores where id = ? ;" : "select * from stores", //11/1優化成功
//     [id], //待優化
//     function (err, result) {
//       // if(err){console.log(err);}else{rep.send(result);console.log(req);}
//       err ? console.log(err) : rep.send(JSON.stringify(result));
//       // err?console.log(err):rep.send(result);
//     }
//   );
// });

// ----------------------------期翔Chi-------------------------------

const jwt = require("jsonwebtoken");
const session = require("express-session");

// 接註冊前端資料
app.post("/create", (req, res) => {
  const name = req.body.userNameReg;
  const email = req.body.userMailReg;
  const password = req.body.userPasswordReg;

  conn.query(
    "INSERT INTO users(name, email,password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("FOXValues Inserted");
      }
    }
  );
});

//驗證功能authentication
const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    res.send("Yo, we need a token, plz give it to FOX!");
  } else {
    jwt.verify(token, "jwtSecret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "U failed to authenticate" });
        //  return res.redirect('http://localhost:3000/login');   //ERR:ccess to XMLHttpRequest at 'http://localhost:3000/login' (redirected from 'http://localhost:7000/authYN') from origin 'http://localhost:3000' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource.
      } else {
        req.userId = decoded.id; //userId自行命名的參數
        next();
      }
    });
  }
};
app.get("/authYN", verifyJWT, (req, res) => {
  //verifyJWT:middleware 中介軟體
  // res.send("Yo, u r authenticated!!");
  // const memberId = req.body.memberId;
  conn.query(
    "SELECT * FROM users WHERE user_id=? ",
    [req.userId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// 接登入前端資料
app.post("/login", (req, res) => {
  const mailLog = req.body.mailLog;
  const passwordLog = req.body.passwordLog;

  conn.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [mailLog, passwordLog],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        // res.send(result);
        // res.send("登入成功");
        //遷移資料庫後可能要改id->user_id
        const id = result[0].id;
        const token = jwt.sign({ id }, "jwtSecret", {
          expiresIn: 300, //about 5mins.
        });
        // req.session.user = result;
        res.json({ auth: true, token: token, result: result });
      } else {
        // res.send({message:"Wrong username/password combination~~~"});
        // res.send(result);
        res.json({
          auth: false,
          message: "Wrong username/password combination~~~",
        });
      }
    }
  );
});

//======================後台ＣＲＵＤ==================
// 設定儲存庫;//研究如何存到db(X)
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
    //要存的資料夾
  },
  filename: (req, file, cb) => {
    // id = req.query.id(檔名前面加id)?
    cb(null, Date.now() + "-" + file.originalname);
    //把檔名加上時間做區分
  },
});

const upload = multer({ storage }).array("file"); //多檔
// const upload = multer({ storage }).single("file");

app.post("/sdata/picupdate", (req, res) => {
  //圖片上傳
  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.files);
  });
});

//read改為dataSlice做，這行不用了
// app.get("/sdata/read", (req, res) => {
//   conn.query("select * from stores where id = 1", (err, result) => {
//     err ? console.log(err) : res.send(JSON.stringify(result));
//   });
// });

app.post("/sdata/create", (req, res) => {
  const { name, status, address, phone, city, ft, tag1, tag2, tag3, img } =
    req.body;
  conn.query(
    "INSERT INTO `stores` (`name`,`status`, `address`, `phone`, `city`, `foodtype`, `tag1`, `tag2`, `tag3`, `img`) VALUES (?,?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [name, status, address, phone, city, ft, tag1, tag2, tag3, img],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("create success");
        console.log(name);
        res.send(JSON.stringify(result));
      }
    }
  );
});

app.put("/sdata/update", (req, res) => {
  const { status, name, address, phone, city, ft, tag1, tag2, tag3, img, id } =
    req.body;

  conn.query(
    "UPDATE `stores` SET `status` = ?,`name` = ?, `address` = ?, `phone` = ?, `city` = ?, `foodtype` = ?, `tag1` = ?, `tag2` = ?, `tag3` = ?, `img` = ? WHERE `stores`.`id` =?",
    [status, name, address, phone, city, ft, tag1, tag2, tag3, img, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("update success");
        console.log(name);
        console.log(id);
        res.send(JSON.stringify(result));
      }
      // err ? console.log(err) : res.send(JSON.stringify(result));
    }
  );
});

app.delete("/sdata/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  conn.query(
    "DELETE FROM `stores` WHERE `stores`.`id` = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("delete success");
        // console.log(id);
        res.send(JSON.stringify(result));
      }
      // err ? console.log(err) : res.send(JSON.stringify(result));
    }
  );
});
