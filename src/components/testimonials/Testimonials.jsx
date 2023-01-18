import React from 'react'
import TestimonialImage1 from '../../assests/Ellipse 11 1.svg'
import TestimonialImage2 from "../../assests/Ellipse 13.svg";
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
                  src={TestimonialImage1}
                  alt="profile"
                />
              </div>
              <div>
                <h3 className="testimonial-name">Mr. Diribo Hassan</h3>
                <p className="testimony">
                  " I have been consistently impressed by the quality of
                  teaching at this school. My child is always engaged and
                  challenged in their learning, and I can see the progress they
                  are making"
                </p>
              </div>
            </div>
            <div className="profileT">
              <div>
                <img
                  className="testimonial-profile-image"
                  src={TestimonialImage2}
                  alt="profile"
                />
              </div>
              <div>
                <h3 className="testimonial-name">Mohamed Hussein</h3>
                <p className="testimony">
                  " Since starting at this school, my child has shown tremendous
                  growth in their knowledge and understanding of the material.
                  The teachers here are truly exceptional"
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>

      <div className="partners">
        <div className="line">
          <img src={line} alt="line" />
        </div>
        <h2>Our Partners</h2>
        <div className="partner-logos">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="partner1 pic"
            href="https://www.education.go.ke/"
          >
            <img src={moe} alt="Ministry of Education" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="partner2 pic"
            href="https://www.health.go.ke/"
          >
            <img src={moh} alt="Ministry of Health" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="partner3 pic"
            href="https://www.knec.ac.ke/"
          >
            <img src={knec} alt="KNEC" />
          </a>
          <a className="partner4 pic" href="www.pta.co.ke">
            <img src={pta} alt="Ministry of Education" />
          </a>
          <a className="partner5 pic" href="www.boardmembers.co.ke">
            <img src={board} alt="Ministry of Education" />
          </a>
        </div>
      </div>
    </div>
  );
}

