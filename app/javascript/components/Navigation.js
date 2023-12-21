import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/motorcycle-logo.png';
import twitter from '../../assets/images/twitter.png';
import facebook from '../../assets/images/facebook.png';
import github from '../../assets/images/github.png';
import pinterest from '../../assets/images/pinterest.png';
import googleplus from '../../assets/images/googleplus.png';
import '../assets/css/style.css';

function Navigation() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div>
          <button type="button" className="toggle-button" onClick={toggleNav}>
            ☰
          </button>
          <nav className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <NavLink to="/" exact activeClassName="active" onClick={toggleNav}>
              Model
            </NavLink>
            <NavLink to="/reservations/new" activeClassName="active" onClick={toggleNav}>
              Reserve
            </NavLink>
            <NavLink to="/reservations" activeClassName="active" onClick={toggleNav}>
              My reservations
            </NavLink>
            <NavLink to="/motorbikes/new" activeClassName="active" onClick={toggleNav}>
              Add Motorcycle
            </NavLink>
            <NavLink to="/motorbikes/list" activeClassName="active" onClick={toggleNav}>
              Delete motorcycle
            </NavLink>
          </nav>
        </div>

        <div className="loadng network-icon">
          <Link to="/"><img src={facebook} alt="" /></Link>
          <Link to="/"><img src={twitter} alt="" /></Link>
          <Link to="/"><img src={github} alt="" /></Link>
          <Link to="/"><img src={pinterest} alt="" /></Link>
          <Link to="/"><img src={googleplus} alt="" /></Link>
        </div>
        <div className="loadng copyright">
          <p>Copyright @2023</p>
        </div>
      </header>
    </>

  );
}

export default Navigation;
