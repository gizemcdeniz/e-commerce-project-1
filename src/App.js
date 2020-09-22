import React, {useState, useEffect} from 'react';
import Products from './products';
import db from './fireStoreData.js';
import NavbarImg from './navbar/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";





function App() {

  return (
    <>
    <Router>
      {/* <Route path="/" component={NavbarImg} /> */}
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/Shopping Card" component={Shopping Card} />
    </Router>
    < NavbarImg />
    < Products />
    </>
      )
  }

export default App;
