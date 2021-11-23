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

function FRevisePage(){
  const [userNameRev,setUserNameRev]=  useState('');
  const [userPasswordRev,setUserPasswordRev]=  useState('');
  const [userPhoneRev,setUserPhoneRev]=  useState('');
  const reviseUsersTB = () =>{
    const id = localStorage.getItem("id");
     Axios.put(
       'http://localhost:3001/revise',
       {userNameRev:userNameRev, //傳給後端index.js key:key-value 
        userPasswordRev:userPasswordRev,
        userPhoneRev:userPhoneRev,        
        id:id,
        headers:{"x-access-token":localStorage.getItem("token"),},
      }).then((response)=>{
        console.log("Revised!!!"+response);
        alert("修改成功!!跳轉回會員頁。");
        localStorage.setItem("name",userNameRev);
        document.location.href="/memberpage";
      });
  };
  return (
  <Container>
    <Row >
      <Col>
          <Form className="col-md-5 mx-auto frame my-5">
          <h5 id="ReviseInfoTitle" className="line">修改會員資料 Revise</h5>
            <Form.Group className="mb-3" controlId="show_name">
            <Form.Label column="lg">顯示名稱</Form.Label>
            <Form.Control type="text" size="lg" placeholder="顯示名稱" 
                          onChange={(e)=>{
                            setUserNameRev(e.target.value);
                          }}/>
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="ReviseInfoPassword">
              <Form.Label column="lg">密碼</Form.Label>
              <Form.Control type="password" size="lg" placeholder="Password"  
                          onChange={(e)=>{
                            setUserPasswordRev(e.target.value);
                          }}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="ReviseInfoPhone">
              <Form.Label column="lg">行動電話</Form.Label>
              <Form.Control type="text" size="lg" placeholder="Phone"  
                          onChange={(e)=>{
                            setUserPhoneRev(e.target.value);
                          }}/>
            </Form.Group>

            <Stack gap={2} className="col-md-6 mx-auto">
            <Button variant="" type="" className=" buttonStyle"
                     onClick={reviseUsersTB}
                    >
              確定修改
            </Button>
            <Link to="/memberpage" >
               <Button variant="" type=""className="w-100 buttonStyle">
                返回會員頁
               </Button>
            </Link>
            </Stack>
          </Form>
      </Col>
    </Row>
  </Container>

);


}

export default FRevisePage;