import React,{useState} from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
 import Axios from 'axios'; //處理POST

//使用圖片

//
function FList(){
//   const [memberId,setMemberId]=useState('');
 const userAuthenticated=()=>{
    Axios.get('http://localhost:3001/authYN',{
       headers:{"x-access-token":localStorage.getItem("token"),},
    //    memberId:memberId,
    }).then((response)=>{
      console.log(response);
            //   alert("已驗證 請顯示");
      if(response.data.auth == true){
      localStorage.setItem("name",response.data[0].name);
      localStorage.setItem("email",response.data[0].email);
      localStorage.setItem("phone",response.data[0].phone);
      }

    })}
  return( 
  
            <table className="userInfoTable">
                {userAuthenticated()}
                <tr>
                    <td className="userInfoTitle">顯示名稱:</td>
                    <td className="userInfoContent"> {localStorage.getItem('name')}
                    </td>
                </tr>

                <tr>
                    <td className="userInfoTitle">帳號(電郵):</td>
                    <td className="userInfoContent">{localStorage.getItem('email')}
                    </td>
                </tr>
                <tr>
                    <td className="userInfoTitle">我的密碼:</td>
                    <td className="userInfoContent">*******</td>
                </tr>
                <tr>
                    <td className="userInfoTitle">行動電話:</td>
                    <td className="userInfoContent">{localStorage.getItem('phone') == null? localStorage.getItem('phone'):"尚無資料"}
                    </td>
                </tr>
            </table>

  )
}
export default FList;
