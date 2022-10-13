import React from 'react'
import Logo from '../../assests/logo.png'

export const Footer = () => {
  return (
    <div className="footer-container container">
        <div className="footer-left">
            <img src={Logo} alt="logo" />
        </div>
        <div className="footer-right">
            <ul className="quick-links">
                <li><a href="http://"></a>About MPS</li>
                <li><a href="http://"></a>Contact Us </li>
                <li><a href="http://"></a>Send Inquiry</li>
                <li><a href="http://"></a>Staff/Parent Login</li>
            </ul>
        </div>
    </div>
  )
}
