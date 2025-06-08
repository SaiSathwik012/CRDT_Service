import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/logos/73f58b96-4ae6-47d3-bbbe-408d6752e9c6-converted 1@2x.png';

function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="CRTD Technologies" className="logo" />
        <div className="logo-text">
          <span className="company-name">CRTD Technologies</span>
          <span className="tagline">Connecting Freshers</span>
        </div>
      </div>

      <button
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuActive(!mobileMenuActive)}
      >
        ☰
      </button>

      <nav className={`navigation ${mobileMenuActive ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/" className="nav-link active">Home</a>
          </li>
          <li className="nav-item">
            <a href="/fresher-jobs" className="nav-link">Fresher Jobs</a>
          </li>
          <li className="nav-item">
            <a href="/fresher-jobs" className="nav-link">Services</a>
          </li>
          <li className="nav-item">
            <a href="/fresher-jobs" className="nav-link">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/services" className="nav-link">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">LOGIN</button>
        <button className="register-button button-15">Register Now</button>
      </div>
    </header>
  );
}

export default Header;