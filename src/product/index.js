import React from 'react';
import tshirt2 from './tshirt2.png';
import tsirt3 from './tsirt3.png';

const Product = (props) => {
    return (
        <>
            <h2> Coding T-Shirts</h2>
            <h2>{props.name}</h2>
            <h2>{props.price}</h2>
            <img src= {props.img} />

        </>
    )
}
export default Product