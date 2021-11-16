import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Card, ListGroup } from 'react-bootstrap';
// 引入圖片 
function OrderCompleted() {
    return (
        <Container>
            <Card style={{ width: '40rem' }}>
                <Card.Title>
                    <img src={`/images/orderImg/checkIcon.png`} alt="" width="300" height='auto' />
                    <div>訂位完成</div>
                </Card.Title>
                <Card.Header>訂位資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>餐廳名稱{` `}:{` `}一笈壽司</ListGroup.Item>
                    <ListGroup.Item>訂位日期{` `}:{` `}2021年11月28日</ListGroup.Item>
                    <ListGroup.Item>預訂人數{` `}:{` `}3位</ListGroup.Item>
                    <ListGroup.Item>選擇時段{` `}:{` `}下午17點</ListGroup.Item>
                    <ListGroup.Item>聯絡人{` `}:{` `}邱先生</ListGroup.Item>
                    <ListGroup.Item>聯絡電話{` `}:{` `}0912345678</ListGroup.Item>
                    <ListGroup.Item>備註{` `}:{` `}有一位未滿周歲的兒童，能否請餐廳協助準備兒童座椅。</ListGroup.Item>

                </ListGroup>
            </Card>
        </Container>
    )
}

export default OrderCompleted;