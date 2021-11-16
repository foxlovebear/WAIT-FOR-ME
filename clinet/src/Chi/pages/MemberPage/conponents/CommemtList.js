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
import FUsersStoreComment from './UsersStoreComment';
//
function FCommemtList(){
    // const id = localStorage.getItem("id");
    // const authShowComment=()=>{  
    //     console.log(id);
    //     Axios.post('http://localhost:3001/showUserComment',{
    //       headers:{"x-access-token":localStorage.getItem("token"),},
    //       id:id,
    //     }).then((response)=>{
    //       if(response.data.auth == false){
    //         document.location.href="/login";
    //       }
    //       console.log(response);
    //       if(response.data.length>0){
    //       localStorage.setItem("comment1",response.data[0].comment);
    //       }
    //     })
    // }


  return( 
            <Container className="userCommentContainer mb-5 ">
            {/* 個人資訊+店家 */}
            <Row id="commentUserInfo" >
              {/* 用戶小標+用戶名 */}
              <Col lg={4} > 
                <Col lg={5} className="userIcon w-100"><FMemberIcon/></Col>
                <Col className="commenterName"><h6>{localStorage.getItem('name')}</h6></Col>
              </Col>  

              <Col lg={8} className="CommentStoreInfo">
                  <Stack>
                    <Col><h6>2021/10/28 </h6></Col>
                    <Col><h6>PUTIEN莆田 竹北光明店</h6></Col>
                    <Col><h6>評分:4.5</h6></Col>
                    <div></div> 
                  </Stack>
              </Col>
            </Row>
            {/* 評論內容 */}
            <FUsersStoreComment/>
        </Container>

  )
}

export default FCommemtList;