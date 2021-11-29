import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function List() {
  const data = useSelector((state) => state.stores.newData);
  const comment = useSelector((state) => state.comment.data);

  return (
    <>
      {data.map((v, i) => {
        let temp = comment.filter((v2) => {
          return v2.sid == v.id;
        });

        return (
          <div className="listdiv">
            <Container>
              <Link to={`/page3/${v.id}`} className="page2list rwd999list">
                <Row className="topage3">
                  <Col className="col-3">
                    <Card.Img src={"http://localhost:3001/" + v.img} className="resterauntimg" />
                  </Col>
                  <Col className="col-3" className="resterauntlist">
                    <br />
                    <div className="resterauntlist">店名：{v.name}</div>
                    <div className="resterauntlist">電話：{v.phone}</div>
                    <div className="resterauntlist">地址：{v.address}</div>
                    <div className="resterauntlist">平均消費：{v.cost}元</div>
                    <br />
                    <div className="resterauntlist">
                      標籤：
                      {v.city}&nbsp;{v.foodtype}&nbsp;{v.tag1}&nbsp;{v.tag2}
                      &nbsp;
                      {v.tag3}
                    </div>
                  </Col>
                  <Col className="col-2 page2comment">
                    用戶評論1：
                    <br />
                    <br />
                    <p className="resterauntlist">
                      {temp.length != 0 && (temp[0].comment.length > 35 ? temp[0].comment.substr(0, 35) + "..." : temp[0].comment)}
                    </p>
                  </Col>
                  <Col className="col-2 page2comment">
                    用戶評論2：
                    <br />
                    <br />
                    <p className="resterauntlist">
                      {temp.length > 1 && (temp[1].comment.length > 35 ? temp[1].comment.substr(0, 35) + "..." : temp[1].comment)}
                    </p>
                  </Col>
                  <Col className="col-2 page2comment">
                    用戶評論3：
                    <br />
                    <br />
                    <p className="resterauntlist">
                      {temp.length > 2 && (temp[2].comment.length > 35 ? temp[2].comment.substr(0, 35) + "..." : temp[2].comment)}
                    </p>
                  </Col>
                </Row>
                <hr className="hrstyle" />
              </Link>
              {/*---------------------- RWD版本 --------------------*/}
              <section className="rwdlistver">
                <Link to={`/page3/${v.id}`} className="page2list">
                  <Row className="topage3">
                    <Col className="col-12">
                      <Card.Img src={"http://localhost:3001/" + v.img} className="resterauntimg" />
                    </Col>
                    <Col className="col-12">
                      <br />
                      <div className="resterauntlist">店名：{v.name}</div>
                      <div className="resterauntlist">電話：{v.phone}</div>
                      <div className="resterauntlist">地址：{v.address}</div>
                      <br />
                      <div className="resterauntlist">
                        標籤：
                        {v.city}&nbsp;{v.foodtype}&nbsp;{v.tag1}&nbsp;{v.tag2}
                        &nbsp;
                        {v.tag3}
                      </div>
                    </Col>
                    <Row>
                      <Col className="col-4 page2comment">
                        食客評論1：
                        <br />
                        <br />
                        <p className="resterauntlist">
                          {temp.length != 0 && (temp[0].comment.length > 30 ? temp[0].comment.substr(0, 30) + "..." : temp[0].comment)}
                        </p>
                      </Col>
                      <Col className="col-4 page2comment">
                        食客評論2：
                        <br />
                        <br />
                        <p className="resterauntlist">
                          {temp.length > 1 && (temp[1].comment.length > 30 ? temp[1].comment.substr(0, 30) + "..." : temp[1].comment)}
                        </p>
                      </Col>
                      <Col className="col-4 page2comment">
                        食客評論3：
                        <br />
                        <br />
                        <p className="resterauntlist">
                          {temp.length > 2 && (temp[2].comment.length > 30 ? temp[2].comment.substr(0, 30) + "..." : temp[2].comment)}
                        </p>
                      </Col>
                    </Row>
                  </Row>
                  <hr className="hrstyle" />
                </Link>
              </section>
            </Container>
          </div>
        );
      })}
      {/* 返回最上層按鈕BACKTOP */}
      <section className="backtop">
        <a href="#" className="backtopa">
          TOP
          <img src="/images/syuan/upbacktop.png" className="backtopimg" alt="" />
        </a>
      </section>
    </>
  );
}

export default List;
