import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import './index.css';
import { Container,Row,Col,Stack,
 Form,
 FormControl,
 Button, } from 'react-bootstrap';

//  -----------------------IMPORT結束-------------------



function FLoginPage(){
  return (
  <Container>
    <Row >
      <Col>
          <Form className="col-md-5 mx-auto frame my-5">
          <h5 id="loginTitle" className="line">登入 Login</h5>
            <Form.Group className="mb-3" controlId="username">
            <Form.Label column="lg">登入帳號(即為您的電子郵件)</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Enter email" />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="login_password">
              <Form.Label column="lg">密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password"  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Stack gap={2} className="col-md-6 mx-auto">
            <Button variant="" type="submit" className=" buttonStyle">
              登入
            </Button>
            <Link to="/registerpage" >
               <Button variant="" type="submit"className="w-100 buttonStyle">
                註冊帳號
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

export default FLoginPage;

