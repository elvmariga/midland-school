import React from 'react'
import "./style.scss"

 export const Socials = () => {
  return (
    <div className="social-container">
      <div className="links">
        <a
          href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-regular fa-envelope "></i>
        </a>
        <a href="tel:+2541234555">
          <i className="fa-solid fa-phone "></i> 
        </a>
        <a href="http:// ">
          {" "}
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="http://">
          {" "}
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="http://">
          {" "}
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="http://">
          {" "}
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="http://">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
}

