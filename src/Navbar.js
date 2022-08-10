import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = { textDecoration:"none" };
  return (
    <>
      <nav>
        <NavLink style={navStyle} to="/"><span>HOME</span></NavLink>
        <NavLink style={navStyle} to="/popular"><span>POPULAR</span></NavLink>
        <NavLink style={navStyle} to="/trending"><span>TRENDING</span></NavLink>
        <NavLink style={navStyle} to="/search"><span>SEARCH</span></NavLink>
      </nav>
    </>
  )
}

export default Navbar