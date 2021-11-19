import React, { useState } from 'react';
import './star.css'

import { css, ThemeProvider } from "styled-components";
import { base, Star } from "grommet-icons";
import { deepMerge } from "grommet-icons/utils";



const textDesign = {

    fontSize: '20px',



}


const StarItem = () => {

    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    const customColorTheme = deepMerge(base, {
        icon: {
            extend: css`
        ${(props) =>
                    props.color === "golden" &&
                    `
        fill: #FFDC35;
      `}
      `
        }
    });

    return <div className='Comment' >


        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;


            return (
                <div>


                    <label>
                        <input type="radio"
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}

                        />
                        {/* <FaStar className='star'
                            color={ratingValue <= (hover || rating) ? "#FFDC35" : "#D0D0D0"}
                            size={35}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)} /> */}

                        <ThemeProvider theme={customColorTheme}>
                            <Star className='star'
                             color={ratingValue <= (hover || rating) ? "#FFDC35" : "#D0D0D0"}
                             onMouseEnter={() => setHover(ratingValue)}
                             onMouseLeave={() => setHover(null)} 
                             size="large" />
                        </ThemeProvider>

                    </label>


                </div>
            )
        }
        )}
        &nbsp;

        <p style={textDesign} >推薦指數:{rating}星</p>



    </div>
}

export default StarItem;
