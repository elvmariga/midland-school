import React from "react";
import img1 from '../../assests/img1.jpeg';
import img2 from "../../assests/img2.jpg";
import img3 from "../../assests/img3.jpeg";
import img4 from "../../assests/img4.jpeg";
import img5 from '../../assests/img5.jpeg';
import img6 from '../../assests/img6.jpeg';
import "./style/style.css";

export const Gallery = () => {
 

  return (
    <div className="gallery">
      <div className="line"></div>
      <div className="galleryTitle ">
        <h2>Media Gallery</h2>
      </div>

      <div className="galleryDetails">
        <div>
          {" "}
          <img src={img1} alt="" />
        </div>
        <div>
          {" "}
          <img src={img2} alt="" />
        </div>
        <div>
          {" "}
          <img src={img3} alt="" />
        </div>
        <div>
          {" "}
          <img src={img4} alt="" />
        </div>
        <div>
          {" "}
          <img src={img5} alt="" />
        </div>
        <div>
          {" "}
          <img src={img6} alt="" />
        </div>
      </div>
      <p className="results">
        <a
          href="https://www.instagram.com/midlandpreparatoryschool/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          View more
        </a>
      </p>
    </div>
  );
};
