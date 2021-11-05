import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Food from './icon/food.png';

import './user.css';



class Photo  extends React.Component {
    render() { 
        return <div>
            &nbsp; 
          <Container >   

         <Row  >
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
         </Row>
         &nbsp; 
         <Row>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
         </Row>
         &nbsp; 
         <Row>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img src={ Food } alt="Camera" /> </Col>
         </Row>


           

          </Container>
        </div>
    }
}
 
export default  Photo    