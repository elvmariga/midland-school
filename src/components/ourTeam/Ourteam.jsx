import React from 'react'
import TeamProfile from '../../assests/team.png'
import './style/style.css'

export const Ourteam = () => {
  return (
    <div className="ourTeam-container">
      <div className="containerTeam">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Our Team</h2>
        </div>
        <div className="profile">
          <div className='profile1'>
            <img
              className="team-profile-image"
              src={TeamProfile}
              alt="profile"
            />
            <h3 className="team-name">Boaz</h3>
            <p className="team-title">Director</p>
          </div>
        </div>
      </div>
    </div>
  );
}

