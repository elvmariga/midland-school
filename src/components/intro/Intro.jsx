import React from 'react';
import moe from '../../assests/moe.png'
import moh from "../../assests/moh.png";
import knec from "../../assests/knec.png";
import pta from "../../assests/pta.png";
import board from "../../assests/board.png";
import line from "../../assests/line.png";

import "./style/sytle.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <div className="container-top">
          <h2>Midland Preparatory School</h2>
          <p>Admissions Open for January 2023</p>
          <a href="../contact/Contact.jsx">Inquire</a>
        </div>
        <div className="container-bottom">
          <div className="details">
            <h2>Welcome to Midland Preparatory School</h2>

            <p>
              <i className="fa-solid fa-quote-left"></i>
              I'm constantly inspired by our young graduates. They emerge from
              their time at Brookhouse with a truly 21st Century perspective as
              young global citizens, ready to contribute to society with a
              profound sense of justice, tolerance and understanding. A
              Brookhouse education is more than just about good grades, sporting
              prowess or artistic talent. It is about young people of good
              character, armed with the courage, compassion and humility to
              really make a difference in the world.
              <i className="fa-solid fa-quote-right"></i>
            </p>

            <p>
              <b>Elvis Mariga</b>
            </p>
            <p>
              <i>Director</i>
            </p>
          </div>
        </div>
        <div className="partners">
          <h2>Our Partners</h2>
          <div className="partner-logos">
            <a className="partner1" href="http://">
              <img src={moe}  alt="Ministry of Education" />
            </a>
            <a className="partner2" href="http://">
              <img src={moh} alt="Ministry of Education" />
            </a>
            <a className="partner3" href="http://">
              <img src={knec} alt="Ministry of Education" />
            </a>
            <a className="partner4" href="http://">
              <img src={pta} alt="Ministry of Education" />
            </a>
            <a className="partner5" href="http://">
              <img src={board} alt="Ministry of Education" />
            </a>
          </div>
        </div>
        <div>
          <img src={line} alt="line" />
        </div>
      </div>
    </div>
  );
}

