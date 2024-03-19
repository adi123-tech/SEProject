// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src="https://coursekhoj.com/wp-content/uploads/2023/09/Ck-Logo-e1693760795965.png" alt="Logo" className="logo" />
      <ul>
        <li><Link to="/" className="hover-underline-animation">Home</Link></li>
        <li>|</li>
        <li><Link to="/profile" className="hover-underline-animation">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
