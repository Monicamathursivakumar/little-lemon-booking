import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Little Lemon</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/booking">Reserve</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
