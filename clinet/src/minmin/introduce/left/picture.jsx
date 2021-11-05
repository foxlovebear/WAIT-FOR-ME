import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card } from "react-bootstrap";

class Picture extends React.Component {
  render() {
    const { data } = this.props;
    let temp = data[0].img;
    let imgString = temp.substr(1, temp.length);
    return (
      <div>
        <Card className="mb-3">
          <Card.Img src={imgString} />

          <Card.Body>
            <Card.Title className="text-info">
              TAGS : {data[0].city}| {data[0].foodtype} | {data[0].tag1} |{" "}
              {data[0].tag2}{" "}
            </Card.Title>
            <Card.Text className="text-dark">
              營業時間:
              <br />
              午: AM:11:00~PM:2:00 晚: PM:5:30 ~ PM:10:00
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Picture;
