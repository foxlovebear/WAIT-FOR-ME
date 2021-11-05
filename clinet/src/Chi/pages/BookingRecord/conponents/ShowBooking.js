import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片

//
function FShowBooking(){
  return(
            <Container className="userBookingContainer mb-5 " >
            <div className="userBookingDiv">
            {/* 個人資訊+店家 */}
            <Row id="BookingTableTitle" > 
                <Col lg={2} id="BookingIDTitle"><h6>訂單編號</h6></Col>
                <Col lg={2} ><h6>預訂日期 </h6></Col>
                <Col lg={2} ><h6>預訂時間 </h6></Col>
                <Col><h6>店名 </h6></Col>
                <Col lg={2}><h6>預訂人數 </h6></Col>
            </Row>
            {/* 評論內容 */}
            <Row>
                <Col lg={2} id="showBookingID"><h6>6666</h6></Col>
                <Col lg={2} ><h6>2021/10/28 </h6></Col>
                <Col lg={2} ><h6>12:00 </h6></Col>
                <Col><h6>PUTIEN莆田 竹北光明店 </h6></Col>
                <Col lg={2} ><h6>3 </h6></Col>
            </Row>
            </div>
        </Container>


  )
}

export default FShowBooking;