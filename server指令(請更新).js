const express = require("express"); //要安裝
const app = express();

const cors = require("cors"); //要安裝
app.use(cors());

app.use(express.json());

const port = 3001;
app.listen(port, () => {
  console.log("running:" + port);
});

const mysql = require("mysql"); //要安裝
const conn = mysql.createConnection({
  user: "root",
  password: "root",
  port: "3306",
  host: "localhost",
  database: "foodie",
});

app.get("/page2", (req, rep) => {
  // console.log(rep);
  conn.query("select * from stores", (err, result) => {
    err ? console.log(err) : rep.send(JSON.stringify(result));
  });
});

app.get("/page3", function (req, rep) {
  id = req.query.id;
  conn.query(
    id ? "select * from stores where id = ? ;" : "select * from stores", //11/1優化成功
    [id], //待優化(<StoreIndex>要拿全部，<Detail>只要id=?的資料，兩個get(url)無法並存)
    function (err, result) {
      // if(err){console.log(err);}else{rep.send(result);console.log(req);}
      err ? console.log(err) : rep.send(JSON.stringify(result));
      // err?console.log(err):rep.send(result);
    }
  );
});
