import React from "react";
import { useDispatch } from "react-redux";
import { filterCity } from "../../../redux/storesSlice";


import { Link } from "react-router-dom";

function Cbutton() {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to="/page2" onClick={() => dispatch(filterCity("臺中"))}>
        臺中
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("高雄"))}>
        高雄
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("臺北"))}>
        臺北
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("新北"))}>
        新北
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("基隆"))}>
        基隆
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("苗栗"))}>
        苗栗
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("新竹"))}>
        新竹
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("桃園"))}>
        桃園
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("連江"))}>
        連江
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("馬祖"))}>
        馬祖
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("彰化"))}>
        彰化
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("金門"))}>
        金門
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("綠島"))}>
        綠島
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("蘭嶼"))}>
        蘭嶼
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("澎湖"))}>
        澎湖
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("臺東"))}>
        臺東
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("花蓮"))}>
        花蓮
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("宜蘭"))}>
        宜蘭
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("屏東"))}>
        屏東
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("臺南"))}>
        臺南
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("嘉義"))}>
        嘉義
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("雲林"))}>
        雲林
      </Link>
      <Link to="/page2" onClick={() => dispatch(filterCity("南投"))}>
        南投
      </Link>
    </div>
  );
}
export default Cbutton;
