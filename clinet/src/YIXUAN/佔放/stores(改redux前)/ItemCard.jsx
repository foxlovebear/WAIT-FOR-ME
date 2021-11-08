import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

//本標籤管理
//1.{id, name, category, img, content}(Index->List->本標籤)(對應到json的各項參數值)
//2.狀態:none
//3.將得到的參數show出來

function ItemCard({ id, name, category, img, content, hashtag1, city }) {
  return (
    <div>
      <Container>
        {/* <Link to = {`/shop/${id}`}> */}
        <Card>
          <Row>
            <Col>
              <Card.Img src={img} alt="" />
            </Col>
            <Col>
              <h3
                style={{
                  "padding-top": "50px",
                  color: "#444",
                  "border-bottom": "1px solid #333",
                }}
              >
                {name}
                <span style={{ "font-size": "5px", color: "#555" }}>
                  |{category}
                </span>
              </h3>
              <h5 style={{ color: "#555" }}>{city}</h5>
              <span style={{ color: "#777" }}>{content}</span>|
              <span style={{ color: "#777" }}>{hashtag1}</span>
            </Col>
          </Row>
        </Card>
        {/* </Link> */}
      </Container>
    </div>
  );
}

export default ItemCard;
