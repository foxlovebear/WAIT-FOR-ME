import React from "react";
import { Container, FormControl, Button } from "react-bootstrap";

//本標籤管理
//1.{allData:從index拿到的“全部”json資料}{setData:改變input的data}
//2.狀態:無
//3.onClick時searchF取得input值,setData

function Search({ allData, setData }) {
  function searchF() {
    var keyWord = document.getElementById("keyWord").value;
    if (keyWord === "") return setData(allData);

    const newData = allData.filter(
      (v) =>
            v.name.toLowerCase().includes(keyWord.toLowerCase()) ||
        v.category.toLowerCase().includes(keyWord.toLowerCase()) ||
            v.city.toLowerCase().includes(keyWord.toLowerCase()) || 
        // v.hashtag1.toLowerCase().includes(keyWord.toLowerCase()) 
         v.content.toLowerCase().includes(keyWord.toLowerCase())
    );
    setData(newData);
    //  不長這樣不會過，浪費我1小時
    // const newData = allData.filter(
    //   (v) =>
    //     v.name.toLowerCase().includes(keyWord.toLowerCase()) ||
    //     v.category.toLowerCase().includes(keyWord.toLowerCase()) ||
    //     v.content.toLowerCase().includes(keyWord.toLowerCase())
    // );
    // setData(newData);
  }
  return (
    <Container className="d-flex">
      <FormControl type="text" id="keyWord" placeholder="Search All..." />
      <Button className="me-2" onClick={searchF}>
        OK
      </Button>
    </Container>
  );
}

export default Search;
