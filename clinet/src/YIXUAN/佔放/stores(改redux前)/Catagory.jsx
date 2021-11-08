import { Button, Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";

//本標籤管理
//1.{allData:從index拿到的“全部”json資料}{setData:改變input的data}
//2.狀態[catagories]把標籤分類(不重複歸類)
//3.產生button
//4.點選button分類時，setData(隸屬於index的狀態)

function Catagory({ allData, setData }) {
  const allCategories = ["all", ...new Set(allData.map((v) => v.foodtype))];
  //把'all'放第一位，後面複製陣列
  // var b = new Set(a.map((v) => v.category));
  //new Set(v);(v是陣列，是獨立的，有相同值會被濾掉
  const [catagories, setCatagory] = useState(allCategories); //純粹就是給buttom值

  const filterItem = (bv) => {
    //(category)從category的button來的，是字串喔
    if (bv === "all") {
      setData(allData);
      return;
    }
    //category代表category標籤給的input
    const newDate = allData.filter((v) => v.foodtype === bv);
    //v.category(allData的一筆資料裏面的category屬性)等於category(我們給的參數)->會被濾“出來”
    setData(newDate); //把data透過setData改變了
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            {allCategories.map((v, i) => {
              return (
                <Button
                  variant="outline-success"
                  key={i}
                  onClick={() => filterItem(v)}
                >
                  {v}
                </Button>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Catagory;
