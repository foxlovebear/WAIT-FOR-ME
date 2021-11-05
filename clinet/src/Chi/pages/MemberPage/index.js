import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// 使用react-bootstrap 和CSS
import './index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import Me from './img/Me.jpg';
import FMemberIcon from './conponents/MemberIcon.js';

//PersonalIfo List
import FList from './conponents/List.js';
//CommemtList
import FCommemtList from './conponents/CommemtList.js';
// -----------------------Import End----------------


function FMemberPage(){
  return(
  <Container>
    {/* grid >>9 */}
    <Row > 
      <Col md={9} className="mx-auto">
        <Stack gap={3} >
          {/* 封面圖片 */}
          <div className="mt-5">
                 <img className="w-100 coverImg"
                 src="http://picsum.photos/id/163/800/200"alt="new" />
            </div>
          {/* 個人資料 */}
          <div className="PersonalInfo">
              <Stack gap={3}  direction="horizontal"className=" mx-auto">
                <div className=" w-50 d-flex justify-content-md-center">
                  <FMemberIcon />
                  </div>
                <div className=" w-50">
                  <FList/>
                </div>
              </Stack>
            </div>
          {/* 評論資料 */}
          <div className="">
              <Stack gap={3}  className=" mx-auto ">
                <div className=" mx-auto my-3">
                  <h1>我的評論</h1>
                  </div>
                <div className=" w-50 mx-auto">
                  <FCommemtList/>
                </div>
              </Stack>
          </div>
        </Stack>
      </Col>
    </Row>
  </Container>
  )
}

export default FMemberPage;