import React, { Component ,useState } from 'react';
import'./star.css'
import {FaStar} from'react-icons/fa';


const textDesign ={

    fontSize:'20px',

   
    
}


const StarItem=()=>{

    const[rating,setRating]=useState(null);
    const[hover,setHover]=useState(null);

    return <div className='Comment' >
        

        {[...Array(5)].map((star,i)=>{
            const ratingValue = i + 1;
            

            return (
                <div>
                    
                <label>
                    <input type="radio"
                    name='rating'
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)}
                    
                    />
                      <FaStar className='star'
                       color={ ratingValue <=( hover || rating)  ? "#FFDC35":"#D0D0D0" }
                       size={35}
                       onMouseEnter={()=>setHover(ratingValue)}
                       onMouseLeave={()=>setHover(null)}    />

                </label>

                
                </div>
            )  }
              )}
             &nbsp;
         
          <p style={ textDesign } >推薦指數:{rating}星</p>
        
        
      
    </div>
}

export default StarItem ;
