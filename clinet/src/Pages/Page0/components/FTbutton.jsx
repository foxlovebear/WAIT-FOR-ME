import React from "react";
import { useDispatch } from "react-redux";
import { filterType } from "../../../redux/storesSlice";

import { Link } from "react-router-dom";

function Cbutton() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/page2" onClick={() => dispatch(filterType("小吃"))}>
        小吃
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("燒烤"))}>
        燒烤
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("炸物"))}>
        炸物
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("飲料"))}>
        飲料
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("甜點"))}>
        甜點
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("麵包"))}>
        麵包
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("熱炒"))}>
        熱炒
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("禮盒"))}>
        禮盒
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("素食"))}>
        素食
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("壽司"))}>
        壽司
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("丼飯"))}>
        丼飯
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("吃到飽"))}>
        吃到飽
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("中式"))}>
        中式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("台式"))}>
        台式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("韓式"))}>
        韓式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("日式"))}>
        日式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("泰式"))}>
        泰式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("印尼"))}>
        印尼
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("美式"))}>
        美式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("法式"))}>
        法式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("義式"))}>
        義式
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("印度"))}>
        印度
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("墨西哥"))}>
        墨西哥
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterType("越南"))}>
        越南
      </Link>
    </div>
  );
}
export default Cbutton;
