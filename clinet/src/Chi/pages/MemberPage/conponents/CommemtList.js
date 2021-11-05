import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import FMemberIcon from './MemberIcon.js';

//
function FCommemtList(){
  return( 
            <Container className="userCommentContainer mb-5 ">
            {/* 個人資訊+店家 */}
            <Row id="commentUserInfo" >
              <Col lg={4} >
                <Col lg={5} className="userIcon w-100"><FMemberIcon/></Col>
                <Col className="commenterName"><h6>大狐狸</h6></Col>
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
            <Row>
              <Col lg={4}></Col>
              <Col className="commentText">(評論內容:)好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~好好吃~ </Col>
            </Row>
            {/* 圖片 */}
            <Row>
              <Col lg={4}></Col>
              <Col lg={8}>圖片<img src="https://picsum.photos/id/102/300/250"/></Col>
            </Row>
        </Container>

  )
}

export default FCommemtList;