import React from 'react';
import '../styles/CompanyDetails.css';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import compLogo from '../assets/logos/73f58b96-4ae6-47d3-bbbe-408d6752e9c6-converted 1@2x.png'
const CompanyDetails = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-logo">
            <img src={compLogo} alt="logo" />
            <h3>Company</h3>
          </div>
          <p>We help students to grow and gain certifications from free YouTube content.</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>→&nbsp;&nbsp;&nbsp;Home</li>
            <li>→&nbsp;&nbsp;&nbsp;Features</li>
            <li>→&nbsp;&nbsp;&nbsp;Pricing</li>
            <li>→&nbsp;&nbsp;&nbsp;FAQs</li>
          </ul>
        </div>

        

        <div className="footer-section">
          <h4>Our Services</h4>
          <ul>
            <li>→&nbsp;&nbsp;&nbsp;Campus Recruitment</li>
            <li>→&nbsp;&nbsp;&nbsp;Bulk Hiring</li>
            <li>→&nbsp;&nbsp;&nbsp;Career Guidance</li>
            <li>→&nbsp;&nbsp;&nbsp;Skill Development</li>
            <li>→&nbsp;&nbsp;&nbsp;Job Placement</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest job opportunities and career tips.
          </p>
          <input type="email" placeholder="Your email" className="input" />
          <button>Subscribe&nbsp;&nbsp;&nbsp;→</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Company. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
};

export default CompanyDetails;
