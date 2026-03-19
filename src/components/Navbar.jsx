import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" rx="8" fill="url(#logo-gradient)"/>
              <path d="M12 20L18 26L28 14" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                  <stop offset="0%" stopColor="#2563eb"/>
                  <stop offset="100%" stopColor="#0ea5e9"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="logo-text">Premium</span>
          </div>

          <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
            <li><a href="#leadership" onClick={() => setIsMenuOpen(false)}>Leadership</a></li>
            <li><a href="#news" onClick={() => setIsMenuOpen(false)}>News</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>

          <button className="btn btn-primary navbar-cta">Get Started</button>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            <span className={isMenuOpen ? 'active' : ''}></span>
            <span className={isMenuOpen ? 'active' : ''}></span>
            <span className={isMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
