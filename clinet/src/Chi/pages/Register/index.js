import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Axios from 'axios';//處理POST

// 使用react-bootstrap 和CSS
import './index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用


// -----------------------Import End----------------




// -----------------------JSX畫面----------------

function FRegisterPage(){
  const [userNameReg,setUserNameReg]=  useState('');
  const [userMailReg,setUserMailReg]=  useState('');
  const [userPasswordReg,setUserPasswordReg]=  useState('');
  // const showInfo = () =>{console.log(userNameReg,userMailReg,userPasswordReg);}; //測試1.
  const addUsersTB = () =>{
     Axios.post(
       'http://localhost:3001/create',
       {userNameReg:userNameReg, //傳給後端index.js key:key-value 
        userMailReg:userMailReg,
        userPasswordReg:userPasswordReg,
      }).then(()=>{
        console.log("Registered!!!");
        alert("註冊成功!!跳轉登入頁登入。");
        document.location.href="/login";
      });
  };
  return (
  <Container>
    <Row >
      <Col>
          <Form className="col-md-5 mx-auto frame my-5">
          <h5 id="RegisterTitle" className="line">註冊 Register</h5>
            <Form.Group className="mb-3" controlId="show_name">
            <Form.Label column="lg">顯示名稱</Form.Label>
            <Form.Control type="text" size="lg" placeholder="顯示名稱" 
                          onChange={(e)=>{
                            setUserNameReg(e.target.value);
                          }}/>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="user_name">
            <Form.Label column="lg">登入帳號(即為您的電子郵件)</Form.Label>
            <Form.Control type="email" size="lg" placeholder="Enter email" 
                          onChange={(e)=>{
                            setUserMailReg(e.target.value);
                          }}/>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="Register_password">
              <Form.Label column="lg">密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password"  
                          onChange={(e)=>{
                            setUserPasswordReg(e.target.value);
                          }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmRegisterPassword">
              <Form.Label column="lg">確認密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Confirm Password"  
                          />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Stack gap={2} className="col-md-6 mx-auto">
            <Button variant="" type="" className=" buttonStyle"
                    // onClick={showInfo} //測試1.
                     onClick={addUsersTB}
                    >
              註冊
            </Button>
            <Link to="/login" >
               <Button variant="" type=""className="w-100 buttonStyle">
                返回登入
               </Button>
            </Link>
            <Link to="/" >
            <Button variant="" type="" className="w-100 buttonStyle">
              回首頁
            </Button>
            </Link>
            </Stack>
          </Form>
      </Col>
    </Row>
  </Container>

);


}

export default FRegisterPage;