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
          At our school, we believe that every student has the potential to
          achieve success in their studies and in their personal lives. We are
          committed to supporting our students as they work towards their goals,
          and offer a wide range of resources and services to help them succeed.
          This includes academic support as well as extracurricular activities.
          We encourage all of our students to set and work towards their own
          goals, and we support them every step of the way.   
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


