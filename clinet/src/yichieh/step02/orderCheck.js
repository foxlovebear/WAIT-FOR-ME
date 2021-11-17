import React from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Card, ListGroup } from 'react-bootstrap';
import './orderCheck.css';
function OrderCheck() {
    const history = useHistory();
    return (
        <Container>
            <Card style={{ width: '40rem' }}>
                <Card.Title> <h2>訂位資料核對</h2></Card.Title>
                <Card.Header>您的訂位資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>餐廳名稱{` `}:{` `}一笈壽司</ListGroup.Item>
                    <ListGroup.Item>訂位日期{` `}:{` `}2021年11月28日</ListGroup.Item>
                    <ListGroup.Item>預訂人數{` `}:{` `}3位</ListGroup.Item>
                    <ListGroup.Item>選擇時段{` `}:{` `}下午15點</ListGroup.Item>
                </ListGroup>
                <Card.Header>您的聯絡資訊</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="orderLabelStyle">
                        訂位人{` `}:{` `}
                        <input type="text" style={{ width: '3rem' }} />{` `}
                        <input type="radio" name="Gender" id="sir" value="men" />
                        <label htmlFor="sir">先生</label>{` `}
                        <input type="radio" name="Gender" id="miss" value="women" />
                        <label htmlFor="miss">小姐</label>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        聯絡電話{` `}:{` `}
                        <input type="tel" size="20" maxLength="15" />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        備註{` `}:{` `}
                        <textarea rows="5" cols="30" style={{ verticalAlign: "middle" }}></textarea>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Text>
                    <button onClick={() => { history.push('/order/Completed') }}>確認完成</button>
                </Card.Text>
            </Card>
        </Container>
    )
}

export default OrderCheck;