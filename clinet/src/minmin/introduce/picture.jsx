import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import Foodpic from "./introducepic/Foodpic.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAllFromTag,
  filterCity,
  filterType,
} from "../../redux/storesSlice";

// 組件內使用CSS

const pic2 = {
  height: "450px",
};

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
  border: "2px 	#FFCBB3 ",
  backgroundColor: "#FFFAF4",
  width: "450px",
  height: "250px",
  minHeight: "200px",
  borderStyle: "double",
  padding: "10px",
};

const text2 = {
  textAlign: "left",
  textIndent: "45px",
  fontSize: "18px",
  fontStyle: "italic",
};

const info1 = {
  paddingLeft: "20px",
};

function Picture({ data }) {
  const dispatch = useDispatch();
  const { city, foodtype, tag1, tag2, tag3 } = data[0];

  let temp = data[0].img;
  let imgString = temp.substr(1, temp.length);
  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Row>
            <Col xs={12} xl={6}>
              <Card style={pic2} className="mb-3">
                {/* <img src={Foodpic} style={pic1} alt="Camera" /> */}
                <Card.Img src={imgString} style={pic1} />
                <Card.Body>
                  <Card.Title className="text-info">
                    TAGS :
                    <a href="/page2" onClick={() => dispatch(filterCity(city))}>
                      <span>{city}</span>
                    </a>
                    |{" "}
                    <a
                      href="/page2"
                      onClick={() => dispatch(filterType(foodtype))}
                    >
                      <span>{foodtype}</span>
                    </a>{" "}
                    |{" "}
                    <a
                      href="/page2"
                      onClick={() => dispatch(filterAllFromTag(tag1))}
                    >
                      <span>{tag1}</span>
                    </a>{" "}
                    |{" "}
                    <a
                      href="/page2"
                      onClick={() => dispatch(filterAllFromTag(tag2))}
                    >
                      <span>{tag2}</span>
                    </a>
                  </Card.Title>
                  <Card.Text className="text-dark">
                    營業時間:
                    <br />
                    {data[0].time}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} xl={6}>
              <div style={text1}>{data[0].article}</div>

              <Row>
                <Col xs={12} xl={12}>
                  <div style={text2}>
                    餐廳名稱:{data[0].name}
                    定位電話:{data[0].phone}
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
    </>
  );
}

export default Picture;
