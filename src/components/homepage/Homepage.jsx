import React from "react";
import { ModalInquiry } from "../modalInquiry/ModalInquiry";
import "./style/style.css";


export const Homepage = () => {
  return (
    <div className="hero-container">
      <div className="containerh">
        <h1 className="school">MIDLAND PREPARATORY SCHOOL</h1>
        <div className="line"></div>
        <h2>Pragmatism, Integrity, Competency</h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        {/* <button>Send Inquiry</button> */}
        {/* <ModalInquiry/> */}
      </div>
    </div>
  );
};



// var textWrapper = document.querySelector(".school");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span class='letter'>$&</span>"
// );
// var anime;

// anime.timeline({ loop: true })
//   .add({
//     targets: ".school.letter",
//     translateX: [40, 0],
//     translateZ: 0,
//     opacity: [0, 1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i,
//   })
//   .add({
//     targets: ".school.letter",
//     translateX: [0, -30],
//     opacity: [1, 0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i,
//   });
