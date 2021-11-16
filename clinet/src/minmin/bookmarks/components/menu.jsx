import React, { Component } from 'react';
import Carouselpic from './menucarousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Env from './env'



// import Mpic from './icon/mpic.png';
{/* <img className=' h-75 border' src={Mpic} /> */}



function Menu ( {data} ){
    return(
        <div>
        &nbsp;
        <Container fluid>
            <Row>
                <Col xs={12} xl={6}>
                    <Carouselpic data={data}  />
                </Col>

                <Col xs={12} xl={6}  >
                    <Env  />

                </Col>


            </Row>

            <Row>

            </Row>

        </Container>


    </div>
    )
}



export default Menu