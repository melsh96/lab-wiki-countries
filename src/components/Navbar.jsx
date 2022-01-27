import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <p class="navLink">WikiCountries</p>
      </NavLink>
    </nav>
  );
};

export default Navbar;
