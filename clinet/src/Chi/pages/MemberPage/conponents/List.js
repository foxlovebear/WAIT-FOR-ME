import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

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
    const id = localStorage.getItem("id");

    const userAuthenticated=()=>{  
        console.log(id);
        Axios.post('http://localhost:3001/authYN',{
          headers:{"x-access-token":localStorage.getItem("token"),},
          // memberId:memberId,
          id:id,
        }).then((response)=>{
          if(response.data.auth == false){
            document.location.href="/login";
          }
          console.log(response);
        })
    }
    // const getPasswordLength=()=>{
    //   localStorage.getItem('name')
    // }

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
                    <td className="userInfoContent">{localStorage.getItem('phone') == "null"?"尚無資料" :localStorage.getItem('phone')}
                    </td>
                </tr>
                <tr>
                   <Link to="/revisepage" >
                      <Button variant="" type=""className="w-100 buttonStyle">
                       修改會員資料
                      </Button>
                   </Link>
                </tr>
            </table>

  )
}
export default FList;
