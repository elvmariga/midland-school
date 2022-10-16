import React from 'react'

import './style/style.css'


export const TeamProfile = ({image,name,position}) => {
  return (
    <div className="profile">
      <div className="profile1">
        <img className="team-profile-image" src={image} alt="profile" />
        <h3 className="team-name">{name}</h3>
        <p className="team-title">{position}</p>
      </div>
    </div>
  );
}
