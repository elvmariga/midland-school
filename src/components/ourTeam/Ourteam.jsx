import React from 'react'
import TeamProfileImage from "../../assests/team.png";
import './style/style.css'
import {TeamProfile} from '../teamProfile/TeamProfile'

export const Ourteam = () => {
  const teamArr = [
    {name:"John Doe", image:TeamProfileImage,position:"CEO"},
    {name:"Elvis Mariga", image:TeamProfileImage,position:"Head of PR"},
    {name:"Donult Trump", image:TeamProfileImage, position:"Senior Dev"}
  ]

  return (

    <div className="ourTeam-container">
      <div className="containerTeam">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Our Team</h2>
        </div>
        <div className='profileList'>
          {
            teamArr.map((team)=>{
            return(
              <TeamProfile {...team} />
            )})
          }
     
        </div>
      </div>
    </div>
  );
}

