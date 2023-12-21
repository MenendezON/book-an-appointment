import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
          <img src="https://seeklogo.com/images/M/motorcycle-logo-0A99FC1E6E-seeklogo.com.png" alt="" />
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
          <Link to="/"><img src="https://cdn-icons-png.flaticon.com/256/20/20837.png" alt="" /></Link>
          <Link to="/"><img src="https://freeiconshop.com/wp-content/uploads/edd/twitter-solid.png" alt="" /></Link>
          <Link to="/"><img src="https://static-00.iconduck.com/assets.00/logo-github-icon-256x256-6fb8e1xp.png" alt="" /></Link>
          <Link to="/"><img src="https://freeiconshop.com/wp-content/uploads/edd/pinterest-solid.png" alt="" /></Link>
          <Link to="/"><img src="https://cdn-icons-png.flaticon.com/256/59/59490.png" alt="" /></Link>
        </div>
        <div className="loadng copyright">
          <p>Copyright @2023</p>
        </div>
      </header>
    </>

  );
}

export default Navigation;
