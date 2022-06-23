import React from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <div className = "navbar">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/projects">Projects</Link></button>
        <button><Link to="/about">About Me</Link></button>
        <button><Link to="/contact">Contact</Link></button>
    </div>
  )
}

export default Nav;
