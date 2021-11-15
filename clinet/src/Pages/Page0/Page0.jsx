import React from "react";
import App from "../../syuan/App";
import Search from "../components/Search";
import Cbutton from "./components/Cbutton";
import FTbutton from "./components/FTbutton";
import { useDispatch } from "react-redux";
import { load } from "../../redux/storesSlice";

function Page0() {
  const dispatch = useDispatch();

  //頁面重整觸發該事件
  window.addEventListener("load", () => {
    dispatch(load());
  });
  return (
    <div>
      {/* <p>調整版面</p>
      <p>調整版面</p> */}
      {/* <Search /> */}
      {/* <Cbutton /> */}
      {/* <FTbutton /> */}
      <App />
    </div>
  );
}

export default Page0;
