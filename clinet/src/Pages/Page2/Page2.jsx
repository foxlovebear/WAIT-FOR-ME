import React from "react";
import Search from "../components/Search";
import List from "./components/List";
import Tag from "./components/Tag";
import { useDispatch } from "react-redux";
import { load } from "../../redux/storesSlice";

function Page2() {
  const dispatch = useDispatch();

  //頁面重整觸發該事件
  window.addEventListener("load", () => {
    dispatch(load());
  });
  return (
    <div>
      {/* <p>調整版面</p>
      <p>調整版面</p> */}
      <Tag />
      {/* <Search /> */}
      <List />

    </div>
  );
}

export default Page2;
