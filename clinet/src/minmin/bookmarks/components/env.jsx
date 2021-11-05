import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container,Carousel,Table } from 'react-bootstrap';

class Env extends React.Component {
    render() {
        return <div>
            &nbsp;
            <Table striped bordered hover variant="warning">
                <thead className='table-sm'>
                    <tr>
                        <th>店鋪詳細資訊</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                        營業時間:11:30～22:00
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                        付款方式:信用卡/現金
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                        嚴禁吸煙
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                        空間、設備:20位/有包廂/檯座位
                        </td>
                       
                    </tr>
                    <tr>
                        <td>
                        停車場:有合作停車場
                        </td>
                       
                    </tr>
                 
                </tbody>
            </Table>

        </div>
    }
}

export default Env