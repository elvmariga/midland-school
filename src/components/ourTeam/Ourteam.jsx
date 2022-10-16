import React from 'react'

import './style/style.css'
import {TeamProfile} from '../teamProfile/TeamProfile'

export const Ourteam = () => {
  return (
    <div className="ourTeam-container">
      <div className="containerTeam">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Our Team</h2>
        </div>
        <div>
          <TeamProfile />
        </div>
      </div>
    </div>
  );
}

