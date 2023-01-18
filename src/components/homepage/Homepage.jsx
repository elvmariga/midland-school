import React from "react";
import "./style/style.css";
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';


export const Homepage = () => {
  return (
    <div className="hero-container">
      <div className="containerh">
        <Fade top>
          <h1 className="school">MIDLAND PREPARATORY PRIMARY
          AND JUNIOR SECONDARY</h1>
        </Fade>
        <div className="line"></div>
        <h2>
          <Typed
            strings={["Pragmatism", "Integrity", "Competency"]}
            typeSpeed={40}
            backSpeed={50}
            loop
          ></Typed>
        </h2>
        <p>
          Exemplary Leadership,
          Exemplary Education,
           Exemplary Results.
        </p>
      </div>
    </div>
  );
};



