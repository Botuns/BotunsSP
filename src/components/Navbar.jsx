import React, { useState } from 'react';
import { Link } from "react-router-dom";
import img from '../utils/BotunsLogo-removebg-preview.png';
import './navbar.css';  
const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to='/'><img src={img} className="img-logo"></img></Link>
        <ul className='main-nav-list'>
        <Link to='/contact' className="nav-link">Contact me</Link>
        <Link to='/resume' className="nav-link">Resume</Link>
        <Link to='/works' className="nav-link">See works</Link>
        <Link to='/hire' className="nav-link" id='nav-link-cta'>Hire me</Link>
        </ul>


    </div>
  )
}

export default Navbar