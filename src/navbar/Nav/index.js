import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const NavbarImg = () => {
    return (
        <>
        <div>
        <nav class="navbar navbar-light bg-light">
        {/* <span class="navbar-brand mb-0 h1"> <Link to = "/ Navbar"></Link></span> */}
        <span class="navbar-brand mb-0 h1"> <Link to = "/Shopping Card" ></Link></span>
        </nav>
        </div>
        </>
    )
}
export default NavbarImg;
