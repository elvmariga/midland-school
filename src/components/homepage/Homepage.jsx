import React from 'react'
import bg from '../../assests/homepage-bg.png'

export const Homepage = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }}>
      <h1>MIDLAND PREPARATORY SCHOOL</h1>
      <div className="line"></div>
      <h2>Pragmatism, Integrity, Competency</h2>
      <p>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>
      <button>Send Inquiry</button>
    </div>
  );
}

