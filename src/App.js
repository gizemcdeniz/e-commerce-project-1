import React, {useState, useEffect} from 'react';
import db from './fireStoreData.js';
import ShoppingCard from './navbar/ShoppingCard';
import NavbarImg from './navbar/Nav';
import Products from './products';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home';
import SignIn from './sign';
import SignUp from './signup';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      {/* <Route path="/" component={NavbarImg} /> */}
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/shoppingcard" component={ShoppingCard} />
      < NavbarImg />      
      < Home />
      <SignUp path="signUp" />
          <SignIn path="/" />
          {/* <PasswordReset path = "passwordReset" /> */}
    < Products path="/products"/>
    </Router>
  
    </>
      )
  }

export default App;
