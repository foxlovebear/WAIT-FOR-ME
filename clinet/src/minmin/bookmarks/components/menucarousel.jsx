import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container,Carousel } from 'react-bootstrap';
import Food from './icon/food.png';
import Menu_1  from'../components/pic/menu/Menu_1.jpg';
import Menu_2  from'../components/pic/menu/Menu_2.jpg';
import Menu_3  from'../components/pic/menu/Menu_3.jpg';



import  './user.css'

const menuSize={
    width:'450px',
    height:'450px'
}

function Carouselpic( { data } ){
    let temp = data[0].img;
    let imgString = temp.substr(1, temp.length);
    return(
        <div style={ menuSize } >
            <Carousel variant="dark"  >
                <Carousel.Item style={ menuSize } >
                    <img
                        className="d-block w-100   "
                        
                        src={ Menu_3}
                        alt="First slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item style={ menuSize } >
                    <img
                        className="d-block w-100 "
                        src={Menu_1}
                        alt="Second slide"
                    />
                   
                </Carousel.Item>
                <Carousel.Item style={ menuSize } >
                    <img className=''
                        className="d-block w-100 "
                        src={ Menu_2}
                        alt="Third slide"
                    />
                   
                </Carousel.Item>
            </Carousel>
        </div>
    )
}



export default Carouselpic;