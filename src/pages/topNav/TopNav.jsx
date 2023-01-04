import React from 'react'
import { Socials } from "../../components";
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
            <i className="fa-regular fa-envelope "></i> info@midlandschool.co.ke
          </a>
        </div>

        <div className="tel tap">
          <a href="tel:+254729960675 ">
            <i className="fa-solid fa-phone "></i>+2547 2996 0675
          </a>
        </div>
        <div className="socials ">
          <Socials />
        </div>
        <div className="webmail tap">
          <a
            href="https://midlandschool.co.ke/webmail"
            target="_blank"
          >
            Staff Web Mail
          </a>
        </div>
      </div>
    </div>
  );
}

