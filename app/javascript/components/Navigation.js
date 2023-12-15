import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/motorcycle-logo.png';
import twitter from '../assets/images/twitter.png';
import facebook from '../assets/images/facebook.png';
import github from '../assets/images/github.png';
import pinterest from '../assets/images/pinterest.png';
import googleplus from '../assets/images/googleplus.png';

function Navigation() {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <nav>
        
      <NavLink to="/" exact activeClassName="active">Model</NavLink>
      <NavLink to="/reservations/new" activeClassName="active">Reserve</NavLink>
      <NavLink to="/reservations" activeClassName="active">My reservations</NavLink>
      <NavLink to="/motorbikes/new" activeClassName="active">Add Motorcylce</NavLink>
      <NavLink to="/motorbikes/destroy" activeClassName="active">Delete motorcycle</NavLink>
      </nav>
      <div className="network-icon">
        <Link to="/"><img src={facebook} alt="" /></Link>
        <Link to="/"><img src={twitter} alt="" /></Link>
        <Link to="/"><img src={github} alt="" /></Link>
        <Link to="/"><img src={pinterest} alt="" /></Link>
        <Link to="/"><img src={googleplus} alt="" /></Link>
      </div>
      <div className='copyright'>
        <p>Copyright @2023</p>
      </div>
    </header>
  );
}

export default Navigation;
