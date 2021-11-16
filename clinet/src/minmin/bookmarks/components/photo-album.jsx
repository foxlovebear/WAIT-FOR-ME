import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import A from './pic/A.jpg';
import B from './pic/B.jpg';
import C from './pic/C.jpg';
import D from './pic/D.jpg';
import E from './pic/E.jpg';
import F from './pic/F.jpg';
import G from './pic/G.jpg';
import H from './pic/H.jpg';
import I from './pic/I.jpg';
import J from './pic/J.jpg';
import K from './pic/K.jpg';
import L from './pic/L.jpg';


import './user.css';

const position1 ={
   width:'250px',
   height:'250px'
 
}

function Photo(){
   return(
      <div>
            &nbsp; 
          <Container >   

          <Row>
            <Col xs={6} xl={3} > <img style={position1} src={ A} alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ E } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ G } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={D} alt="Camera" /> </Col>
         </Row>
         &nbsp; 
         <Row>
            <Col xs={6} xl={3} > <img style={position1} src={ B } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={F} alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ C } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ H } alt="Camera" /> </Col>
         </Row>
         &nbsp; 
         <Row>
            <Col xs={6} xl={3} > <img style={position1} src={ I } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ J } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ K } alt="Camera" /> </Col>
            <Col xs={6} xl={3} > <img style={position1} src={ L } alt="Camera" /> </Col>
         </Row>
      


           

          </Container>
        </div>
   )
}

 
export default  Photo    