import React from "react";

// 使用react-bootstrap 和CSS
import "../index.css";
//使用圖片

//
function FList() {
  return (
    <table className="userInfoTable">
      <tr>
        <td className="userInfoTitle">顯示名稱:</td>
        <td className="userInfoContent"> 目前無資料</td>
      </tr>

      <tr>
        <td className="userInfoTitle">帳號(電郵):</td>
        <td className="userInfoContent"></td>
      </tr>
      <tr>
        <td className="userInfoTitle">我的密碼:</td>
        <td className="userInfoContent">*******</td>
      </tr>
      <tr>
        <td className="userInfoTitle">行動電話:</td>
        <td className="userInfoContent"></td>
      </tr>
    </table>
  );
}

export default FList;
