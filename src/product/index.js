import React from 'react';
import './index.css';


const Product = (props) => {
    return (
        <>
            <h2> Coding T-Shirts</h2>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <p>{props.description}</p>
            <div className="images">
            <img src= {props.img} />
            </div> 
        </>
    )
}
export default Product