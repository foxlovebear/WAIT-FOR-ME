import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "../../../../public/images/syuan/upbacktop.png";

function List() {
  const data = useSelector((state) => state.stores.newData);

  return (
    <div id="restaurantRight">
      {data.map((v, i) => {
        return (
          <Container>
            <Link to={`/page3/${v.id}`} className="page2list rwd999list">
              <Row className="topage3">
                <Col className="col-3">
                  <Card.Img src={v.img} className="resterauntimg" />
                </Col>
                <Col className="col-3" className="resterauntlist">
                  <br />
                  <div className="resterauntlist">店名：{v.name}</div>
                  <div className="resterauntlist">電話：{v.phone}</div>
                  <div className="resterauntlist">地址：{v.address}</div>
                  <br />
                  <div className="resterauntlist">
                    標籤：
                    {v.city}&nbsp;{v.foodtype}&nbsp;{v.tag1}&nbsp;{v.tag2}&nbsp;
                    {v.tag3}
                  </div>
                  {/* <p>{v.city}</p>
                    <p>{v.tag1}</p>
                    <p>{v.tag2}</p>
                    <p>{v.tag3}</p>
                    <p>{v.foodtype}</p> */}
                  {/* <p>{v.comment}</p> */}
                </Col>
                <Col className="col-2 page2comment">
                  食客評論1：
                  <br />
                  <br />
                  <p className="resterauntlist">{v.comment && v.comment.length > 30
                    ? v.comment.substr(0, 30) + "..."
                    : v.comment}</p>
                </Col>
                <Col className="col-2 page2comment">
                  食客評論2：
                  <br />
                  <br />
                  <p className="resterauntlist">{v.comment && v.comment.length > 30
                    ? v.comment.substr(0, 30) + "..."
                    : v.comment}</p>
                </Col>
                <Col className="col-2 page2comment">
                  食客評論3：
                  <br />
                  <br />
                  <p className="resterauntlist">{v.comment && v.comment.length > 30
                    ? v.comment.substr(0, 30) + "..."
                    : v.comment}</p>
                </Col>
              </Row>
              <hr className="hrstyle" />
              {/* <p>{v.phone}</p>
              <p>{v.address}</p>
              <p>
                {v.comment && v.comment.length > 30
                  ? v.comment.substr(0, 30) + "..."
                  : v.comment}
              </p> */}
            </Link>


            {/*---------------------- RWD版本 --------------------*/}
            <section className="rwdlistver">
              <Link to={`/page3/${v.id}`} className="page2list">
                <Row className="topage3">
                  <Col className="col-5">
                    <Card.Img src={v.img} className="resterauntimg" />
                  </Col>
                  <Col className="col-7" className="resterauntlist">
                    <br />
                    <div className="resterauntlist">店名：{v.name}</div>
                    <div className="resterauntlist">電話：{v.phone}</div>
                    <div className="resterauntlist">地址：{v.address}</div>
                    <br />
                    <div className="resterauntlist">
                      標籤：
                      {v.city}&nbsp;{v.foodtype}&nbsp;{v.tag1}&nbsp;{v.tag2}&nbsp;
                      {v.tag3}
                    </div>
                  </Col>
                  <Row>
                    <Col className="col-4 page2comment">
                      食客評論1：
                      <br />
                      <br />
                      <p className="resterauntlist">{v.comment && v.comment.length > 30
                        ? v.comment.substr(0, 30) + "..."
                        : v.comment}</p>
                    </Col>
                    <Col className="col-4 page2comment">
                      食客評論2：
                      <br />
                      <br />
                      <p className="resterauntlist">{v.comment && v.comment.length > 30
                        ? v.comment.substr(0, 30) + "..."
                        : v.comment}</p>
                    </Col>
                    <Col className="col-4 page2comment">
                      食客評論3：
                      <br />
                      <br />
                      <p className="resterauntlist">{v.comment && v.comment.length > 30
                        ? v.comment.substr(0, 30) + "..."
                        : v.comment}</p>
                    </Col>
                  </Row>
                </Row>
                <hr className="hrstyle" />
              </Link>
            </section>
          </Container>
        );
      })}

      {/* 返回最上層按鈕BACKTOP */}
      <section className="backtop">
        <a href="#" className="backtopa">
          TOP
          <img
            src="/images/syuan/upbacktop.png"
            className="backtopimg"
            alt=""
          />
        </a>
      </section>
    </div>
  );
}

export default List;
