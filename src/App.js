import React, {useState, useEffect} from 'react';
import Products from './products';
import db from './fireStoreData.js';
import NavbarImg from './navbar';


function App() {

  return (
    <>
    < NavbarImg />
    < Products />
    </>
      )
  }

export default App;
