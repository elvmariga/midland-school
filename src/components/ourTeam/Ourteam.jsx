import React from 'react'
import TeamProfile from '../../assests/team.png'

export const Ourteam = () => {
  return (
    <div className="ourTeam-container">
        <div className="line"></div>
        <div className="ourTeam-title">
            <h2>Our Team</h2>
        </div>
        <div className="profile">
            <img className='team-profile-image' src={TeamProfile} alt="profile" />
            <h3 className='team-name'>Boaz</h3>
            <p className="team-title">Director</p>

        </div>
    </div>
  )
}

