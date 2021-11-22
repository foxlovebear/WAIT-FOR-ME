import React, { useEffect } from "react";
import List from "./components/List";
import Tag from "./components/Tag";
import { useDispatch } from "react-redux";
import { load, now } from "../../redux/storesSlice";
import { Col, Row } from "react-bootstrap";
import "./Page2.css";

function Page2() {
  const dispatch = useDispatch();

  //頁面重整觸發該事件
  window.addEventListener("load", () => {
    dispatch(load());
  });
  // useEffect(() => {
  //   //1sec 跳一次修改now的時間
  //   setInterval(() => {
  //     dispatch(now());
  //   }, 1000);
  // }, []);
  return (
    <>
      <div className="page2div" style={{ display: "flex" }}>
        <div className="alltagdiv">
          <Tag />
        </div>
        <div className="alllistdiv">
          <List />
        </div>
      </div>
    </>
  );
}

export default Page2;
