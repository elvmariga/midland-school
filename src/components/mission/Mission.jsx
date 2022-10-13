import React from 'react'
import MissionImage from '../../assests/mission.png'

export const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-left">
        <img src={MissionImage} alt="Our Mission" />
      </div>
      <div className="mission-right">
        <h2>Our Mission</h2>
        <p>
          To raise and nature leaders with sound characters in order to unlock
          their infinite possibilities.
        </p>
      </div>
    </div>
  );
}

