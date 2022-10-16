import React from "react";
import Daycare from "../../assests/daycare.png";
import ExtraCurriculum from "../../assests/extracurricular.png";
import VerifiedStaff from "../../assests/verified.png";
import KCPE from "../../assests/KCPE-certification.png";

import "./style/style.css";

export const Whatweoffer = () => {
  const whatWeOfferArray = [
    { p: "Extracurricular Activities", icon: ExtraCurriculum },
    { p: "Day care school", icon: Daycare },
    { p: "Verified staff", icon: VerifiedStaff },
    { p: "KCPE certification", icon: KCPE },
  ];

  return (
    <div className="offer">
      <div className="line"></div>
      <div className="offerTitle ">
        <h2>What We Offer</h2>
      </div>

     
          <div className="offerDetails">
            {whatWeOfferArray.map((i) => {
                return (
                    <div className="cont">
                      <div className="offerIcon">
                        <img src={i.icon} alt=" Extra Curriculum Icon" />
                      </div>
                      <div className="offerIconDetails">
                        <p>{i.p}</p>
                      </div>
                    </div>
                    );
              })}
          </div>
     

    </div>
  );
};
