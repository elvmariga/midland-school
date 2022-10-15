import React from 'react'
import { Socials } from "../socials/Socials";
import "./style/style.css"

export const TopNav = () => {
  return (
    <div className="topnav-container">
      <div className="mail">
        <a
          href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-regular fa-envelope fa-xl"></i> info@midland.co.ke
        </a>
      </div>

      <div className="tel">
        {" "}
        <a href="tel:+2541234555">
          <i class="fa-solid fa-phone fa-xl"></i> +2541234555
        </a>
      </div>
      <div className="socials">{Socials}</div>
      <div className="links">
        <a href="http:// ">
          {" "}
          <i class="fa-brands fa-whatsapp fa-xl"></i>
        </a>
        <a href="http://">
          {" "}
          <i class="fa-brands fa-twitter fa-xl"></i>
        </a>
        <a href="http://">
          {" "}
          <i class="fa-brands fa-facebook fa-xl"></i>
        </a>
        <a href="http://">
          {" "}
          <i class="fa-brands fa-instagram fa-xl"></i>
        </a>
        <a href="http://">
          <i class="fa-brands fa-linkedin-in fa-xl"></i>
        </a>
      </div>
      <div className="webmail">
        <a href="http://">Staff Web Mail</a>
      </div>
    </div>
  );
}

