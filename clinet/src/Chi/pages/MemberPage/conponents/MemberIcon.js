import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import female from '../img/female.png';
import male from '../img/male.png';
import EmptyHead from '../img/EmptyHead.jpg';

function FMemberIcon(){
  var showImg = () =>{
    if(localStorage.getItem('name') == null)
    {return(EmptyHead)}
    else{
      if(localStorage.getItem('name') == "admin"){
        return(male)
      }else{return(female)}
    };
  }
  return(
    <img src={showImg()} alt="頭貼"className="rounded-circle w-50" />
  )
}

export default FMemberIcon;