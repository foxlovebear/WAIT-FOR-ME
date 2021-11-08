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
            <Link to={`/page3/${v.id}`}>
              <Card>
                <Row>
                  <Col>
                    <Card.Img src={v.img} />
                  </Col>
                  <Col>
                    <h1>{v.name}</h1>
                    <p>{v.city}</p>
                    <p>{v.foodtype}</p>
                    <p>{v.tag1}</p>
                    <p>{v.tag2}</p>
                    <p>{v.tag3}</p>
                    <p>{v.phone}</p>
                    <p>{v.address}</p>
                    <p>{v.comment}</p>
                  </Col>
                </Row>
              </Card>
            </Link>
          </Container>
        );
      })}
    </div>
  );
}

export default List;
