import React from "react";

import "./style/style.css";
import Fade from 'react-reveal/Fade';
import Typed from 'react-typed';


export const Homepage = () => {
  return (
    <div className="hero-container">
      <div className="containerh">
      <Fade top><h1 className="school">MIDLAND PREPARATORY SCHOOL</h1></Fade>
        <div className="line"></div>
        <h2>
          <Typed
            strings={ ['Pragmatism', 'Integrity','Competency']}
            typeSpeed={40}
            backSpeed={50}
            
            loop >
            {/* <intyput type="text"/> */}
          </Typed>
        </h2>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
      
      
        {/* <ModalInquiry/> */}
      </div>
    </div>
  );
};



// var textWrapper = document.querySelector(".school");
// textWrapper.innerHTML = textWrapper.textContent.replace(
//   /\S/g,
//   "<span className='letter'>$&</span>"
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
