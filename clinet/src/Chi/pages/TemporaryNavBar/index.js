import React,{Component} from "react";
import {useState} from 'react';
import './index.css';
import { Navbar,
 Form,
 Button, } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios'; //處理POST
const TemporaryNavBar = () =>{
  // const [memberId,setMemberId]= useState('');

  const userAuthenticated=()=>{

    Axios.get('http://localhost:3001/authYN',{
       headers:{"x-access-token":localStorage.getItem("token"),
      },
      // memberId:memberId,
    }).then((response)=>{
      if(response.data.auth == false){
        document.location.href="/login";
      }
      console.log(response);
      console.log(response.data.message);
      console.log(response.data.auth);
    })
  }


 return (//BUTTONS

       <Form inline>
         <div className="tempNavForm">
         <Link to="/login">
         <Button variant="outline-success">登入</Button>
         </Link>
         <Link to="/registerpage">
         <Button variant="outline-success">註冊</Button>
         </Link>
         <Link to="/memberpage">
         <Button variant="outline-success" onClick={userAuthenticated}>會員頁</Button>
         </Link>
         {/* <Link to="/starpage">
         <Button variant="outline-success">star</Button>
         </Link> */}
         <Button onClick = {()=>{localStorage.clear();}}  variant="outline-success">登出</Button>
        </div>
       </Form>

 );
}
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


export default TemporaryNavBar;
