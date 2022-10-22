import React from "react";
import Daycare from "../../assests/daycare.png";
import ExtraCurriculum from "../../assests/extracurricular.png";
import VerifiedStaff from "../../assests/verified.png";
import KCPE from "../../assests/KCPE-certification.png";
import Roll from 'react-reveal/Roll';

import "./style/style.css";

export const Whatweoffer = () => {
  const whatWeOfferArray = [
    { key: 1, p: "Extracurricular Activities", icon: ExtraCurriculum },
    { key: 2, p: "Day care school", icon: Daycare },
    { key: 3, p: "Verified staff", icon: VerifiedStaff },
    { key: 4, p: "KCPE certification", icon: KCPE },
  ];

  return (
    <div className="offer">
      <div className="line"></div>
      <div className="offerTitle ">
        <h2>What We Offer</h2>
      </div>

      <div className="offerDetails">
        {whatWeOfferArray.map(({ key, p, icon }) => {
          return (
            <div key={key} className="cont">
              <div className="offerIcon">
              <Roll left cascade>
                <img src={icon} alt=" Extra Curriculum Icon" />
              </Roll>
              </div>
              <div className="offerIconDetails">
                <p>{p}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
