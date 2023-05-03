import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-me'>About me</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/resume'>Resume</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
