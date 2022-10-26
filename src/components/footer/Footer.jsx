import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import Fade from "react-reveal/Fade";
import { Socials } from "../socials/Socials";

export const Footer = () => {
  return (
    <div className="footer-container ">
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
          <p> Quick Links</p>
          <Fade right cascade>
            <ul className="quick-links">
              <li>
                <a href="http://">About MPS</a>
              </li>
              <li>
                <a href="http://">Policy</a>
              </li>
              <li>
                <a href="http://">Calendar</a>
              </li>
              <li>
                <a href="http://">Staff/Parent Login</a>
              </li>
            </ul>
          </Fade>
        </div>
        <div className="contact">
          <p> Contact Us</p>
          <Fade right cascade>
            <p className="contacts">
              <i className="fa-solid fa-location-dot"></i>: P.O. Box 98-200,
              Nairobi-Kenya
            </p>
            <p className="contacts">
              <i className="fa-solid fa-phone"></i>: 
              <a href="tel:+25472999999">+25472999999</a>
            </p>
            <p className="contacts">
              <a href="mailto:midland@ac.ke">
                <i className="fa-solid fa-envelope"></i>: midland@ac.ke
              </a>
            </p>
            <Socials style={{ display: "block" }} />
          </Fade>
        </div>
      </div>

      <div className="copyright">
        <div>
          <p>
            Copyright &copy; {new Date().getFullYear()} <b>Midland School </b>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
