import React, {useState, useEffect} from 'react';
import db from '../firebase/FireStoreData';
import Product from '../components/product'
import Row from 'react-bootstrap';

const Products = () => {

//     const [users, setUsers] = useState([]);
        
//   const fetchData = async ()=>{
//     const UserNameRes = await db.collection('UserData').get() 
//     console.log(UserNameRes);
//     const userData = UserNameRes.docs.map(name => name.data())
//     console.log(userData);
//     setUsers(userData)

    const [theProducts, setTheProducts] = useState([]);
    
    const fetchData = async ()=>{

    const ProductsNames = await db.collection('Products').get()
    console.log (ProductsNames);
    const Products = ProductsNames.docs.map(name => name.data())
    console.log(Products);
    setTheProducts(Products)

  }
console.log(theProducts);

  useEffect(()=>{
    fetchData()
  },[])


    return (
     <Row>
        <div>
           {theProducts.map ( product => <Product {...product} />)} 
        </div>
        </Row>
    ) 
    
}
export default Products;