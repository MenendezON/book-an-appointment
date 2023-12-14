import React from 'react';
import { Link } from 'react-router-dom';
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
        
      <Link to="/">Lien 1</Link>
      <Link to="/">Lien 2</Link>
      <Link to="/">Lien 3</Link>
      <Link to="/motorbikes/new">Add Motorbike</Link>
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
