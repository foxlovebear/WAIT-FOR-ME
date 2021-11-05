import React, { Component } from 'react';
import Carouselpic from './menucarousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Mpic from './icon/mpic.png';




class Menu extends React.Component {
    render() {
        return <div>
            &nbsp;
            <Container fluid>
                <Row>
                    <Col xs={12} xl={5}>
                        <Carouselpic />
                    </Col>

                    <Col xs={12} xl={7}  >
                        <img className=' h-75 border' src={Mpic} />

                    </Col>


                </Row>

                <Row>

                </Row>

            </Container>


        </div>
    }
}

export default Menu