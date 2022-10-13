import React from "react";
import Logo from '../../assests/logo.png'

export const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="logo">
            <img src= {Logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Send Inquiry</li>
            <li>
              <button>login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
