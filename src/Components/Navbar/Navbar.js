import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className='navbar'>
        <h1 className='logo'>BARITES VETERANS RANCH</h1>
        <ul className='navLinks'>
          <li className='link'>
            <Link to='/' id='home'>
              Our Mission
            </Link>
          </li>
          <li className='link'>
            <Link to='/herd' id='herd'>
              The Herd
            </Link>
          </li>
          <li className='link'>
            <Link to='/about' id='story'>
              Our Story
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
