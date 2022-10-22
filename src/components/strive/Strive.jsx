import React from 'react'
import StriveImage from '../../assests/strive.png'
import "./style/style.css";
import Slide from 'react-reveal/Slide';

export const Strive = () => {
  return (
    <div className="striveContainer">
      <div className="striveLeft">
        <div className="line"></div>
        <h2 className="head">Striving towards Success</h2>
        <p className="details">
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      </div>
      <div className="striveRight">
      <Slide right>
        <img src={StriveImage} alt="Strive" />
      </Slide>
      </div>
    </div>
  );
}


