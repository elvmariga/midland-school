import React from 'react'
import VisionImage from '../../assests/history.png'
import "./style/style.css";


export const Vision = () => {
  return (
    
    <div className="vision-container">
      
      <div className="vision-left">
        <h2>Our Vision</h2>
        <p>Transforming learners into higher achivers and agents of change.</p>
      </div>
      <div className="vision-right">
        <img src={VisionImage} alt="Our Vision" />
      </div>
    </div>
  );
}

