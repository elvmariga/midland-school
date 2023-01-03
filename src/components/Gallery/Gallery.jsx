import React from "react";
import image from '../../assests/Makini-Schools.jpg'

import "./style/style.css";

export const Gallery = () => {
 

  return (
    <div className="gallery">
      <div className="line"></div>
      <div className="galleryTitle ">
        <h2>Our Gallery</h2>
      </div>

      <div className="galleryDetails">
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
        <div>
          {" "}
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};
