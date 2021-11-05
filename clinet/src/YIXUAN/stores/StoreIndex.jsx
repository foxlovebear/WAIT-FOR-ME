import React, { useState, useEffect } from "react";
import List from "./List";
// import allData from "./Fakejson.json";
// import allData from "./MOCK_DATA.json";
import Search from "./Search";
import Catagory from "./Catagory";
import { Container } from "react-bootstrap";
import axios from "axios";

//本標籤管理(11/1先用假資料)
//1.Ｘ取得的json資料X(11/1 因為store的<Index>在rander時會遇到一開始無法取得資料去分配給category生成按鈕的情況)
//2.分配給子標籤
//3.掌管資料狀態

function Index() {
  const [data, setData] = useState([]); //可變的資料
  const [allData, setAllData] = useState([]); //不可變的整個資料庫的餐廳資料
  const [isError, setIsError] = useState(false); //錯誤時(預設ｆ)
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoding(true);

      try {
        //執行
        const rep = await axios.get("http://127.0.0.1:3001/page2");

        setAllData(rep.data);
        setData(rep.data);
      } catch (error) {
        //失敗時
        setIsError(true);
        console.log(error);
      }
      setIsLoding(false);
    };
    fetchData();
  }, []);

  if (isLoding) {
    return (
      <>
        <h1>LODING...</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h1>SERVER?</h1>
      </>
    );
  }
  return (
    <div>
      <Container>
        <Search allData={allData} setData={setData} />
        <Catagory allData={allData} setData={setData} />
      </Container>
      <List dataList={data}></List>
    </div>
  );
}

export default Index;
