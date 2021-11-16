import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import Picture from "./introduce/picture";
import Bookmarks from "./bookmarks/bookmarks";

function Storelist(  { data } ) {
  return (
    <div>
      &nbsp;
      &nbsp;
      &nbsp;
      <Container>
        <Row>
          <Col>
            {" "}
            <Picture data={data} />{" "}
          </Col>
        </Row>

        <Row>
          <Col>
            <Bookmarks data={data} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Storelist;
