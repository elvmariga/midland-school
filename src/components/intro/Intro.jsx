import React from 'react';
import { Link } from 'react-router-dom';
import "./style/sytle.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-container">
        <div className="container-top">
          <h2>Midland Preparatory School</h2>
          <p>Admissions Open for January 2023</p>
          <Link to="/contactUs">Inquire</Link>
        </div>
        <div className="container-bottom">
          <div className="details">
            <h2>Welcome to Midland Preparatory School</h2>

            <p>
              <i className="fa-solid fa-quote-left"></i>
              I'm constantly inspired by our young graduates. They emerge from
              their time at Midland School with a truly 21st Century perspective
              as young global citizens, ready to contribute to society with a
              profound sense of justice, tolerance and understanding. A Midland
              School education is more than just about good grades, sporting
              prowess or artistic talent. It is about young people of good
              character, armed with the courage, compassion and humility to
              really make a difference in the world.
              <i className="fa-solid fa-quote-right"></i>
            </p>

            <p>
              <b>Mr. Matkher</b>
            </p>
            <p>
              <i>Director</i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

