import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Card, Row, Col, Container } from 'react-bootstrap';

// 引用用戶頭像照片
import Woman from './icon/woman.png';
import Male from './icon/male.png';
import Female from './icon/female.png';





class Share extends React.Component {
    render() {
        return <div>
             &nbsp; 

            {/* <Table striped bordered hover>
                <tr>
                    <td xs={4} xl={2} >
                        <img src={Woman} className='userphoto' />
                    </td>
                    <td xs={8} xl={10} >
                        <Card.Text className="text-dark" >
                            超級好吃~下次要帶家人來吃超級好吃~下次要帶家人來吃超級好吃~下次要帶家人來吃超級好吃~下次要帶家人來吃
                        </Card.Text>
                    </td>
                </tr>
            </Table> */}

            <Container className="border border-info d-flex flex-column "  >   

            <Row  className="border border-info p-2 " >
                <Col  className="border border-info p-1 bg-warning  "  xs={3} xl={1}  > 
               
                 <img  src={Male} className='userphoto' />
           
                </Col>
                <Col xs={9} xl={11} > 
                <div className="text-dark text-align"   >
                            超級好吃~下次要帶家人來吃超級好吃~
                        </div>
                </Col>
              
            </Row>


            <Row  className="border border-info p-2 " >
                <Col  className="border border-info p-1 bg-warning  "  xs={3} xl={1}  > 
               
                 <img  src={Woman} className='userphoto' />
           
                </Col>
                <Col xs={9} xl={11} > 
                <div className="text-dark text-align"   >
                還不錯的咖啡廳，推薦黑糖卡布奇諾，早午餐份量十足，味道也很好，千層馬鈴薯值得一試，店裡貌似還可以看電影，如果是時間有餘裕，可以再來，因為出餐時間略久，著急的人不適合。
                        </div>
                </Col>
              
            </Row>

            <Row  className="border border-info p-2 " >
                <Col  className="border border-info p-1 bg-warning  "  xs={3} xl={1}  > 
               
                 <img  src={Male} className='userphoto' />
           
                </Col>
                <Col xs={9} xl={11} > 
                <div className="text-dark text-align"   >
                甜點可選自製可麗露、美翻天菊花豆腐等，可喫茶、食材跟甜點都很有質感的台北餐廳推薦
                        </div>
                </Col>
              
            </Row>


            <Row  className="border border-info p-2 " >
                <Col  className="border border-info p-1 bg-warning  "  xs={3} xl={1}  > 
               
                 <img  src={Female} className='userphoto' />
           
                </Col>
                <Col xs={9} xl={11} > 
                <div className="text-dark text-align"   >
                非常驚艷，餐點特別，裝潢時尚，特別推薦海鮮跟甜點鍋餅，紅酒🍷櫻桃鴨非常特別，滿滿的酒香
                        </div>
                </Col>
              
            </Row>

            </Container>   

    


        </div>;
    }
}

export default Share;
