import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import StarItem from "./star";
import { Row, Col } from "react-bootstrap";

const design = {
  width: "450px",
  height: "250px",
  border: "5px 	#FFAD86 solid",
};

const designbut = {
  marginTop: "35vh",
};

const designSize = {
  marginTop: "30vh",
};

const designOut = {
  border: "5px #FFED97 solid",
  borderStyle: "dotted",
  padding: "30px",
  marign: "2px",
};

function Comment() {
  const [review, setReview] = useState("");

  const submitReview = () => {
    Axios.post("http://localhost:3001/comment", {
      Review: review,
    }).then(() => {
      alert("成功");
    });
  };

  // type='text area'

  return (
    <div>
      <Row>
        <Col>&nbsp;</Col>
      </Row>

      <div style={designOut}>
        <Row>
          {/* <label>User:</label>
            <input type='text' name='movieName'
              onChange={(e) => { setMovieName(e.target.value) }}
            ></input> */}

          <Col xs={12} xl={1}>
            &nbsp;
          </Col>

          <Col xs={12} xl={6}>
            <label>Comment:</label> <br />
            <textarea
              style={design}
              name="review"
              onChange={(e) => {
                setReview(e.target.value);
              }}
            ></textarea>
          </Col>

          <Col xs={12} xl={5} style={designSize}>
            <div>
              <StarItem />
            </div>

            <Col>
              <button onClick={submitReview} class="btn btn btn-warning m-3 ">
                Submit
              </button>
            </Col>
          </Col>
        </Row>

        {/* 
      <div className='form'>
        <label>User:</label>
        <input type='text' name='movieName'
          onChange={(e) => { setMovieName(e.target.value) }}
        ></input>
        <br />
        <label>Comment:</label> <br />
        <input type='text area' style={design} name='review'
          onChange={(e) => { setReview(e.target.value) }}
        ></input>

        <button onClick={submitReview} style={designbut} class="btn btn btn-warning" >Submit</button>
        <div style={designStar} >
          <StarItem />
        </div>

      </div> */}
      </div>
    </div>
  );
}

export default Comment;
