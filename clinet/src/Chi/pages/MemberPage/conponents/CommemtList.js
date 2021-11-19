import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';//處理POST
// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import FMemberIcon from './MemberIcon.js';
import CUsersStoreComment from './UsersStoreComment';
//
function FCommemtList(){

  return( 
            <CUsersStoreComment/>

  )
}

export default FCommemtList;