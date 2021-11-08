import React,{Component} from "react";
import { Navbar,
 Form,
 Button, } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const TemporaryNavBar = () =>{
 return (//BUTTONS

       <Form inline>
         <Link to="/">
             <Button variant="outline-success" >首頁</Button>
         </Link>
         <Link to="/login">
         <Button variant="outline-success">登入</Button>
         </Link>
         <Link to="/registerpage">
         <Button variant="outline-success">註冊</Button>
         </Link>
         <Link to="/memberpage">
         <Button variant="outline-success">會員頁</Button>
         </Link>
         <Link to="/bookingrecord">
         <Button variant="outline-success">我的訂單</Button>
         </Link>
         <Link to="/starpage">
         <Button variant="outline-success">star</Button>
         </Link>
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
