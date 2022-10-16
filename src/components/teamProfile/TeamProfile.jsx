import React from 'react'
import TeamProfileImage from "../../assests/team.png";
import './style/style.css'


export const TeamProfile = () => {
  return (
    <div className="profile">
      <div className="profile1">
        <img className="team-profile-image" src={TeamProfileImage} alt="profile" />
        <h3 className="team-name">Boaz</h3>
        <p className="team-title">Director</p>
      </div>
    </div>
  );
}
