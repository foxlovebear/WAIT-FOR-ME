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
import FMemberIcon from '../MemberPage/conponents/MemberIcon';

//FShowComment
import CStarIcon from './conponents/StarIcon';

// -----------------------Import End----------------
function FStarPage(){
  return (
  <Container>
    <Row >
      <Col>
          <Form className="col-md-5 mx-auto frame my-5">
            <Col>
            <h5 id="loginTitle" className="line">分享評論</h5>
            <CStarIcon/>
            </Col>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={3} placeholder="發表評論..." />
            </Form.Group>      

            <Stack gap={2} className="col-md-6 mx-auto">
            <Button variant="" type="submit" className=" buttonStyle">
              上傳評論
            </Button>

            </Stack>
          </Form>
      </Col>
    </Row>
  </Container>

  )
}

export default FStarPage;