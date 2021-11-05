import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{useState ,useEffect} from 'react';
import Axios from 'axios';



{/* variant='info' */ }


function Comment () {

  const[movieName,setMovieName]= useState('');
  const[review,setReview]= useState('');

  const submitReview=()=>{
    Axios.post('http://localhost:3001/api/insert',{
       movieName:movieName,movieReview:review,
     }).then(()=>{
    alert('成功');
  })


  }


  return (
      
      <div className="App">
      <h1>Comment 可以寫入資料庫未調整版型</h1>

      <div className='form'>
      <label>User:</label>
      <input type='text' name='movieName' 
      onChange={(e)=>{ setMovieName(e.target.value)}}
      ></input>
      <label>Comment:</label>   
      <input type='text' name='review'
      onChange={(e)=>{ setReview(e.target.value)}}
      ></input>

      <button onClick={submitReview} >Submit</button>  
      </div>

    </div>
  );
}

export default Comment ;
