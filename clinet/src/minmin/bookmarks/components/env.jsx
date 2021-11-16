import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container,Carousel,Table } from 'react-bootstrap';

const textDesign={
    foneSize:"18px",
    textAlign:'center',
    width:'500px',
    height:'450px'
    
}



function Env ( { data } ){
    return(
        <div>
          
    
        <Table   style={textDesign}  striped bordered hover variant="warning">
            <thead className='table-sm'>
                <tr>
                    <th >店鋪詳細資訊   </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                     推薦族群:情侶約會、聚餐
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    付款方式:信用卡/現金/Apple Pay
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    嚴禁吸煙
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    空間、設備:35位/有包廂/吧檯位
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    停車場:有合作停車場
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    慶生活動需提前三天告知
                    </td>
                   
                </tr>
                <tr>
                    <td>
                    其他:有提供伴手禮販售
                    </td>
                   
                </tr>
             
            </tbody>
        </Table>

    </div>
    )
}


export default Env