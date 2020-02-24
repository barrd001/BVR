import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () =>
    setSticky(ref.current.getBoundingClientRect().top <= 0);

  console.log(isSticky);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={ref} className={isSticky ? "sticky" : ""}>
      <nav className='navbar' id='navbar'>
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
            <Link to='/story' id='story'>
              Our Story
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
