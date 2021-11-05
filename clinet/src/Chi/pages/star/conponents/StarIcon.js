import React from 'react';
import ReactDOM from 'react-dom';

// 使用react-bootstrap 和CSS
import '../index.css';
import {Container,Row,Col,Stack,
 Form,
 FormControl,
 Button } from 'react-bootstrap';
//使用圖片
import{FaStar} from "react-icons/fa";
// ------------------------IMPORT END-------------------

function CStarIcon(){
    const starColors={
        orange:"#FFBA5A",
        grey:"#a9a9a9"
    }
    const stars = Array(5).fill(0);
    return(
        <div style={styles.starDiv}>
          <div style={styles.stars}>
              {stars.map((_, index)=>{
                  return(
                      <FaStar
                          key={index}
                      />
                  )
              }

              )} 

          </div>
        </div>
    );
}

// --------------樣式----------------------
const styles = {
    starDiv:{
        display:"flex",
        flexDirection:"column",
        alignItems:"",
        marginBottom:"1rem",
        fontSize:"1.5rem",
    }
}


export default CStarIcon;