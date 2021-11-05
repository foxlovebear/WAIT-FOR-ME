import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card } from 'react-bootstrap';
import Foodpic from './introducepic/Foodpic.jpg';


// 組件內使用CSS

const pic2 = {
  height: '450px'
}



const pic1 = {
  width: "450px",

  // 置中圖片
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "10px",
  minHeight: "200px",

};

const text1 = {
  marginTop: "40px",
  border: '2px 	#FFCBB3 ',
  backgroundColor: "#FFFAF4",
  width: "450px",
  height: '250px',
  minHeight: "200px",
  borderStyle: 'double',
  padding: '10px'

}

const text2 = {

  textAlign: 'left',
  textIndent: '45px',
  fontSize: '18px',
  fontStyle: 'italic'
}

const info1 = {
  paddingLeft: '20px'
}




class Picture extends React.Component {
  render() {

    const { data } = this.props;
    let temp = data[0].img;
    let imgString = temp.substr(1, temp.length);

    return <div>
      <Row>

        <Col xs={12} xl={12} >

          <Row>

            <Col xs={12} xl={6} >
              <Card style={pic2} className='mb-3' >
                {/* <img src={Foodpic} style={pic1} alt="Camera" /> */}
                <Card.Img src={imgString} style={pic1} />
                <Card.Body>
                  <Card.Title className="text-info">
                    TAGS : {data[0].city}| {data[0].foodtype} | {data[0].tag1} |{" "}
                    {data[0].tag2}{" "}
                  </Card.Title>
                  <Card.Text className="text-dark" >
                    營業時間:<br />
                    午: AM:12:00~PM:2:00 晚: PM:5:30 ~ PM:10:00
                  </Card.Text>

                </Card.Body>
              </Card>



            </Col>
            <Col xs={12} xl={6} >
              <div style={text1}  >
                今天的主餐海鮮部分是選用石老魚，
                是老饕就知道～石老魚產量稀少，是宴客的上等食材，
                且含有豐富的膠質，吃起來肉質細緻又新鮮，
                主廚先將石老魚的表皮用烘烤的方式處理過，
                搭配的醬汁則是以百里香、白酒、蝦膏調製而成，
                成為這道獨一無二的美味！
              </div>

              <Row>
                <Col xs={12} xl={12}>
                  <div style={text2} >
                    餐廳名稱:Makotozushi
                    定位電話:04-87878787

                  </div>



                </Col>
              </Row>

            </Col>
          </Row>


          {/* <Row>
            <Col xs={12} xl={12} >6</Col>

          </Row> */}

        </Col>
        {/* <Col></Col> */}



      </Row>


    </div>;
  }
}

export default Picture;
