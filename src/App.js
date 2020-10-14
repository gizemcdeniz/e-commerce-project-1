import React, {useState, useEffect} from 'react';
import db from './fireStoreData.js';
import ShoppingCard from './navbar/ShoppingCard';
import NavbarImg from './navbar/Nav';
import { Container } from "react-bootstrap";
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './auth/Login';
import { AuthProvider } from './auth/Auth';
// import SnapshotFirebaseAdvanced from './SnapshotFirebaseAdvanced';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <Container>
      <div className="App">
    <Router>
    <Route path="/login">
    <Login/>
    <AuthProvider/>
    </Route>
      <Route path="/shoppingcard">
       <ShoppingCard />
        </Route>
        <Route path="/products">
        <Products/>
       </Route>

    
    </Router>
  
    </div>
      </Container>
      )
  }

export default App;
