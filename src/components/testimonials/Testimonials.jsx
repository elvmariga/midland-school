import React from 'react'
import TestimonialImage from '../../assests/team.png'
import './style/style.css'

export const Testimonials = () => {
  return (
    <div className="testimonial-container">
      <div className="containerT">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Our Team</h2>
        </div>
        <div className="profile">
          <div className="profileT">
            <div>
              <img
                className="testimonial-profile-image"
                src={TestimonialImage}
                alt="profile"
              />
            </div>
            <div>
              <h3 className="testimonial-name">Elvis</h3>
              <p className="testimony">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

