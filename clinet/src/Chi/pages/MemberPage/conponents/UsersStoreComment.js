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
//
function FUsersStoreComment(){
    const id = localStorage.getItem("id");
    const authShowComment=()=>{  
        console.log(id);
        Axios.post('http://localhost:3001/showUserComment',{
          headers:{"x-access-token":localStorage.getItem("token"),},
          id:id,
        }).then((response)=>{
          if(response.data.auth == false){
            document.location.href="/login";
          }
          console.log(response);
          // if(response.data.length>0){
          // localStorage.setItem("comment1",response.data[0].comment);
          // }
        })
    }
    let commentList=[];
    for (var n = 0; n<localStorage.getItem('commentMount') ; n++){
      commentList.push(localStorage.getItem('comment'+n));
    }
    console.log(commentList);
    let showCommentList = commentList.map(
      function(x){
        return(
          <Container fluid className="CommentLine ">
            <Row>
              <Col lg={4}></Col>
              <Col className="commentText">評論內容:{x}</Col>
            </Row>

            <Row>
              <Col lg={4}></Col>
              <Col lg={8} >圖片<img src="https://picsum.photos/id/102/250/150"/></Col>
            </Row>
           </Container >
        )
           
      }
    )
          return(
           <ul>
             {showCommentList}
           </ul>

          )

}

export default FUsersStoreComment;