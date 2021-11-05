import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Picture from "./introduce/left/picture";
import Bookmarks from "./bookmarks/bookmarks";

class Storelist extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Col>
              {" "}
              <Picture data={data} />{" "}
            </Col>
            <Col>
              {" "}
              <Picture data={data} />{" "}
            </Col>
          </Row>

          <Row>
            <Col>
              <Bookmarks />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Storelist;
