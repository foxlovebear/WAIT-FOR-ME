import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// 使用react-bootstrap 和CSS
import './index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用


// -----------------------Import End----------------
// -----------------------JSX----------------

function FRegisterPage(){
  return (
  <Container>
    <Row >
      <Col>
          <Form className="col-md-5 mx-auto frame my-5">
          <h5 id="RegisterTitle" className="line">註冊 Register</h5>
            <Form.Group className="mb-3" controlId="show_name">
            <Form.Label column="lg">顯示名稱</Form.Label>
            <Form.Control type="text" size="lg" placeholder="顯示名稱" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="user_name">
            <Form.Label column="lg">登入帳號(即為您的電子郵件)</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Enter email" />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="Register_password">
              <Form.Label column="lg">密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Register_password">
              <Form.Label column="lg">確認密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password"  />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Stack gap={2} className="col-md-6 mx-auto">
            <Button variant="" type="submit" className=" buttonStyle">
              註冊
            </Button>
            <Link to="/login" >
               <Button variant="" type="submit"className="w-100 buttonStyle">
                返回登入
               </Button>
            </Link>
            <Button variant="" type="submit" className=" buttonStyle">
              關閉
            </Button>
            </Stack>
          </Form>
      </Col>
    </Row>
  </Container>

);


}

export default FRegisterPage;