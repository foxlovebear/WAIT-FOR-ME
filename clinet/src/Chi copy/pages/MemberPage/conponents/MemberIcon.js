import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import Me from '../img/Me.jpg';

function FMemberIcon(){
  return(
    <img src={Me} alt="Me"className="rounded-circle w-50" />
  )
}

export default FMemberIcon;