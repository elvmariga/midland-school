import React from 'react'
import TestimonialImage from '../../assests/team.png'
import './style/style.css';
import moe from "../../assests/moe.png";
import moh from "../../assests/moh.png";
import knec from "../../assests/knec.png";
import pta from "../../assests/pta.png";
import board from "../../assests/board.png";
import Fade from 'react-reveal/Fade';
import line from "../../assests/line.png";


export const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="containerT">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Testimonials</h2>
        </div>
        <Fade top cascade>
          <div className="profile">
            <div className="profileT">
              <div>
                <img
                  className="testimonial-profile-image"
                  src={TestimonialImage}
                  alt="profile"
                />
              </div>
              <div>
                <h3 className="testimonial-name">Elvis</h3>
                <p className="testimony">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previ
                </p>
              </div>
            </div>
            <div className="profileT">
              <div>
                <img
                  className="testimonial-profile-image"
                  src={TestimonialImage}
                  alt="profile"
                />
              </div>
              <div>
                <h3 className="testimonial-name">Elvis</h3>
                <p className="testimony">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previ
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="partners">
        <div>
          <img src={line} alt="line" />
        </div>
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <a className="partner1 pic" href="https://www.education.go.ke/">
            <img src={moe} alt="Ministry of Education" />
          </a>
          <a className="partner2 pic" href="https://www.health.go.ke/">
            <img src={moh} alt="Ministry of Health" />
          </a>
          <a className="partner3 pic" href="https://www.knec.ac.ke/">
            <img src={knec} alt="KNEC" />
          </a>
          <a className="partner4 pic" href="http://">
            <img src={pta} alt="Ministry of Education" />
          </a>
          <a className="partner5 pic" href="http://">
            <img src={board} alt="Ministry of Education" />
          </a>
        </div>
      </div>
    </div>
  );
}

