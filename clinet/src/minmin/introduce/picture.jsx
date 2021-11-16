import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  filterAllFromTag,
  filterCity,
  filterType,
} from "../../redux/storesSlice";
import "./picture.css";

// <br />
// {data.avgStar}

function Picture({ data }) {
  const dispatch = useDispatch();
  const { city, foodtype, tag1, tag2, tag3, img } = data[0];

  //11/15註解
  // let temp = data[0].img;
  // let imgString = temp.substr(1, temp.length);
  //11/15註解

  return (
    <>
      <Row>
        <Col xs={12} xl={12}>
          <Row>
            <Col xs={12} xl={6}>
              <Card className="pic2" className="mb-3">
                <Card.Img
                  src={"http://localhost:3001/" + img}
                  className="pic1"
                />
                <Card.Body>
                  <Card.Title className="text-warning">
                    TAGS :
                    <a
                      className="displayText"
                      href="/page2"
                      onClick={() => dispatch(filterCity(city))}
                    >
                      <span className="text-warning">{city}</span>
                    </a>
                    |{" "}
                    <a
                      className="displayText"
                      href="/page2"
                      onClick={() => dispatch(filterType(foodtype))}
                    >
                      <span className="text-warning">{foodtype}</span>
                    </a>{" "}
                    |{" "}
                    <a
                      className="displayText"
                      href="/page2"
                      onClick={() => dispatch(filterAllFromTag(tag1))}
                    >
                      <span className="text-warning">{tag1}</span>
                    </a>{" "}
                    |{" "}
                    <a
                      className="displayText"
                      href="/page2"
                      onClick={() => dispatch(filterAllFromTag(tag2))}
                    >
                      <span className="text-warning">{tag2}</span>
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
              <div className="text1">{data[0].article}</div>

              <Row className="orderRow">
                <Col xs={12} xl={7}>
                  <div className="text2">餐廳名稱: {data[0].name}</div>
                  <div className="text3"> 訂位電話: {data[0].phone}</div>
                </Col>
                <Col xs={12} xl={5}>
                  <div>
                    <button className="orderButton">前往訂位</button>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col xs={12} xl={12}>
                  <div className="textStar">
                    用戶平均星星數: &nbsp;
                    {[...Array(4)].map((star, i) => {
                      const ratingValue = i + 1;

                      return <FaStar className="icon" size={28} />;
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Picture;
