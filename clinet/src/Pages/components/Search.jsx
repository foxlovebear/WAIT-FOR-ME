import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/storesSlice";
import { Link } from "react-router-dom";

// 本標籤管理
// 1.取得serach() from storeslice
// 2.input 按enter|OK 改變newData狀態
// 3.document系列要放在onclick.onkeydown，不然會沒有值造成無法做後續行為(猜測render順序問題)
// 4.看能不能換成.addlisten去執行enter行為

function Search() {
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type="text"
        id="search"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            document.getElementById("btn").click();
          }
        }}
        placeholder="Search All..."
      />
      <Link to="/page2">
        <button
          id="btn"
          onClick={() => {
            const keyword = document.getElementById("search").value; //要包在裏面，不然react很嚴格會報錯
            dispatch(search(keyword));
            document.getElementById("search").value = ""; //clean input
          }} //11/7改enter送出
        >
          OK
        </button>
      </Link>
    </div>
  );
}

export default Search;
