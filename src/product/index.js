import React from 'react';
import './index.css';
import {useState, useEffect} from 'react';
import {CardDeck} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Row} from 'react-bootstrap';
import {Coli } from 'react-bootstrap';

const Product = (props) => {
    const [like, setLike] = useState(0);

    useEffect(() => {
        document.title =`You clicked ${like} times`;
    });

    const style = {
      width: '30%',
      display: 'flex'
    }
    return (
        <>
        {/* <div className="tshirtSection">
            <h2> Coding T-Shirts</h2>
            <h4>T-shirt Name: {props.name}</h4>
            <h2>Price: {props.price}</h2>
            <p> T-shirt Description: {props.description}</p>
            <div className="images">
            <img src= {props.img} />
            <button id="likeButton" onClick= {() => setLike(like + 1)} >Like {like}</button>
            </div> 
            </div> */}


<div className='row'>
     <CardDeck style={style}>
  <Card >
    <Card.Img variant="top" src={props.img}/>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>
      {props.description}
      </Card.Text>
      <Card.Text>
      Price : {props.price}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <button id="likeButton" onClick= {() => setLike(like + 1)} >Like {like}</button>
    </Card.Footer>
  </Card>
  
</CardDeck>
</div>
        </>
        
    )
}
export default Product