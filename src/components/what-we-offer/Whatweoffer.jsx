import React from 'react'
import Daycare from '../../assests/daycare.png'
import ExtraCurriculum from "../../assests/extracurricular.png";
import VerifiedStaff from "../../assests/verified.png"
import KCPE from "../../assests/KCPE-certification.png";
import "./style/style.css"

export const Whatweoffer = () => {
  return (
    <div className="offer">
      <div className="line"></div>
      <div className="offerTitle ">
        <h2>What We Offer</h2>
      </div>
      <div className="offerDetails">
        <div className='cont'>
          <div className="offerIcon">
            <img src={ExtraCurriculum} alt=" Extra Curriculum Icon" />
          </div>
          <div className="offerIconDetails">
            <p>Extra Curriculum Activities</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

