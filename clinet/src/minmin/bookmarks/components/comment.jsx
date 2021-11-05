import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StarItem from './star'
import { Row, Col } from 'react-bootstrap';




const design = {
  width: '450px',
  height: '250px',
  border: '5px 	#FFAD86 solid',



}

const designbut = {
  marginTop: '35vh',

}

const designSize = {
  marginLeft: '5vw'
}



const designOut = {
  border: '5px #FFED97 solid',
  borderStyle: 'dotted',
  padding: '30px',
  marign: '2px'
}

function Comment() {

  const [movieName, setMovieName] = useState('');
  const [review, setReview] = useState('');

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movieName: movieName, movieReview: review,
    }).then(() => {
      alert('成功');
    })


  }


  // type='text area' 


  return (
    <div>


      <Row>
        <Col>
        &nbsp; 
        </Col>
      </Row>

      <div style={designOut} >


        <Row>

          <Col style={designSize} >
            <label>User:</label>
            <input type='text' name='movieName'
              onChange={(e) => { setMovieName(e.target.value) }}
            ></input>

            <Row>
              <Col >
                <label>Comment:</label> <br />
                <textarea style={design} name='review'
                  onChange={(e) => { setReview(e.target.value) }}
                ></textarea>

              </Col>
            </Row>

          </Col>

          <Col style={designbut} >
            <div >
              <StarItem />
            </div>
            
            <Row>
              <Col>
                <button onClick={submitReview} class="btn btn btn-warning m-3 " >Submit</button>
              </Col>
            </Row>

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
