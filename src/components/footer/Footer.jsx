import React from 'react'
import Logo from '../../assests/logo.png'
import './style/style.css';
import Fade from 'react-reveal/Fade';

export const Footer = () => {
  return (
    <div className="footer-container container">
      <div className="containerF">
        <div className="footer-left">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div>
            <p>MIDLAND</p>
            <p> PREPARATORY </p>
            <p>SCHOOL</p>
          </div>
        </div>
        <div className="footer-right">
          <p>Our Quick Links</p>
          <Fade right cascade>
          <ul className="quick-links">
            <li>
              <a href="http://"></a>About MPS
            </li>
            <li>
              <a href="http://"></a>Contact Us
            </li>
            <li>
              <a href="http://"></a>Send Inquiry
            </li>
            <li>
              <a href="http://"></a>Staff/Parent Login
            </li>
          </ul>
          </Fade>
        </div>
      </div>
    </div>
  );
}
