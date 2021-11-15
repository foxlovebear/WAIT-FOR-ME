const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

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

//首頁取得資料，這邊會放進storesSlice狀態庫
app.get("/", (req, rep) => {
  conn.query(
    "SELECT * FROM stores as s left JOIN comment as c ON s.id = c.sid group by s.id;",
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
