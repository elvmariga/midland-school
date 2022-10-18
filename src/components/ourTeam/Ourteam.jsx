import React from 'react'
import TeamProfileImage from "../../assests/team.png";
import './style/style.scss'
import {TeamProfile} from '../teamProfile/TeamProfile'

export const Ourteam = () => {
  const teamArr = [
    {id:1,name:"John Doe", image:TeamProfileImage,position:"CEO"},
    {id:2,name:"Elvis Mariga", image:TeamProfileImage,position:"Head of PR"},
    {id:3,name:"Donult Trump", image:TeamProfileImage, position:"Senior Dev"},
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
              <TeamProfile {...team} key={team.id} />
            )})
          }
     
        </div>
      </div>
    </div>
  );
}

