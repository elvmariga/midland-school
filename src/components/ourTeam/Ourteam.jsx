import React from 'react'
import TeamProfileImage from "../../assests/team.png";
import './style/style.css'
import {TeamProfile} from '../teamProfile/TeamProfile'
import Zoom from 'react-reveal/Zoom';

export const Ourteam = () => {
  const teamArr = [
    {id:1,name:"John Doe", image:TeamProfileImage,position:"CEO"},
    {id:2,name:"Elvis Mariga", image:TeamProfileImage,position:"Head of PR"},
    {id:3,name:"Donult Trump", image:TeamProfileImage, position:"Senior Dev"},
  ]

  return (

    <div className="ourTeam-containerT">
      <div className="containerTeam">
        <div className="line"></div>
        <div className="ourTeam-title">
          <h2>Our Team</h2>
        </div>
      
        <div className='profileList'>
        {/* creating a compnent for each team member */}
          {
            teamArr.map(({id, ...team})=>{
              /* destructuring unique id */
              return(
                <div key={id} >
                  <Zoom cascade>
                  {/* passing the team details as props */}
                    <TeamProfile {...team} key ={id} />
                  </Zoom>
                </div>
                
              )
            })
          }
        
     
        </div>
      
      </div>
    </div>
  );
}

