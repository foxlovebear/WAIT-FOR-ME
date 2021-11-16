import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import Me from '../img/Me.jpg';
import EmptyHead from '../img/EmptyHead.jpg';

function FMemberIcon(){
  return(
    <img src={localStorage.getItem('name') == null?EmptyHead:Me} alt="Me"className="rounded-circle w-50" />
  )
}

export default FMemberIcon;