import React from 'react'
import { Socials } from "../socials/Socials";
import "./style/style.css"

export const TopNav = () => {
  return (
    <div className="topnav-container">
      <div className="containerTopnav">
        <div className="mail tap">
          <a
            href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope "></i> info@midland.co.ke
          </a>
        </div>

        <div className="tel tap">
          <a href="tel:+254123455 ">
            <i className="fa-solid fa-phone "></i> +2541234555
          </a>
        </div>
        <div className="socials ">
          <Socials />
        </div>
        <div className="webmail tap">
          <a href="http://">Staff Web Mail</a>
        </div>
      </div>
    </div>
  );
}

