import React from 'react'
import { Socials } from "../socials/Socials";
import "./style/style.css"

export const TopNav = () => {
  return (
    <div className="topnav-container">
      <div className="containerTopnav">
        <div className="mail">
          <a
            href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope fa-xl"></i> info@midland.co.ke
          </a>
        </div>

        <div className="tel">
          {" "}
          <a href="tel:+2541234555">
            <i className="fa-solid fa-phone fa-xl"></i> +2541234555
          </a>
        </div>
        <div className="socials">
          <Socials />
        </div>
        <div className="webmail">
          <a href="http://">Staff Web Mail</a>
        </div>
      </div>
    </div>
  );
}

