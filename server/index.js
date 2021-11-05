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

//沒有JSON.stringify
// [
//   {
//       "id": 3,
//       "name": "春宅 台中中華店",
//       "city": "台中市",
//       "category": "合菜",
//       "content": "因為喝太多次，最推薦茶凍跟芝士系列\r\n茶凍甜而不膩，口感滑順\r\n芝士濃醇香甜，茶韻回甘\r\n買太多次跟老闆聊起來\r\n發現老闆每一杯茶都很用心調整比例跟口味\r\n嚴選茶葉跟食材\r\n以至於每一種茶都很順口\r\n很用心做飲料的店家，每個品項都很有特色\r\n喝完就回不去了～\r\n每次公司訂大量都要前一天來預訂",
//       "img": "./images/春宅 台中中華店.jpeg",
//       "hashtag1": ""
//   }
// ]

//有JSON.stringify
// [{"id":3,"name":"春宅
// 台中中華店","city":"台中市","category":"合菜","content":"因為喝太多次，最推薦茶凍跟芝士系列\r\n茶凍甜而不膩，口感滑順\r\n芝士濃醇香甜，茶韻回甘\r\n買太多次跟老闆聊起來\r\n發現老闆每一杯茶都很用心調整比例跟口味\r\n嚴選茶葉跟食材\r\n以至於每一種茶都很順口\r\n很用心做飲料的店家，每個品項都很有特色\r\n喝完就回不去了～\r\n每次公司訂大量都要前一天來預訂","img":"./images/春宅
// 台中中華店.jpeg","hashtag1":""}]
