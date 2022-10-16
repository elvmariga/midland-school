import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Socials } from "../socials/Socials";
import { ModalInquiry } from "../modalInquiry/ModalInquiry";
import './style/Style.css'

export const Contact = ({modalState}) => {
  return (
    <div className="concact-container">
      {modalState && <ModalInquiry />}
      <div className="container">
        <div className="contact-left">
          <div className="contact-title">
            <h1>Reach Us</h1>
          </div>
          <div className="contact-details">
            <a href="tel:+254702789015">
              <i className="fa-solid fa-phone"></i>
              +254 702 789 015
            </a>
            <br />
            <a
              href="mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope"></i>
              midlandprep17@gmail.com
            </a>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              Midland Court, Community Rd Syokimau, Machakos County
            </p>
            <div className="socials">
              <Socials />
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div>
            <h2>Any questions? Send us an inquiry</h2>
          </div>
          <div>
            <form action="" method="post">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="tel"
                name="tel"
                id="tel"
                placeholder="Phone Number"
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <input className="myBtn" type="button" value="Send Inquiry" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
