import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function List() {
  const data = useSelector((state) => state.stores.newData);
  return (
    <div>
      {data.map((v, i) => {
        return (
          <Container>
            {/* <Link to={`/page3/${v.id}`}> */}
            <Card>
              <Row>
                <Col>
                  <Card.Img src={v.img} />
                </Col>
                <Col>
                  <h1>{v.name}</h1>
                  <span>{v.city}</span>
                  <span>{v.foodtype}</span>
                  <span>{v.tag1}</span>
                  <span>{v.tag2}</span>
                  <span>{v.tag3}</span>
                </Col>
              </Row>
            </Card>
            {/* </Link> */}
          </Container>
        );
      })}
    </div>
  );
}

export default List;
