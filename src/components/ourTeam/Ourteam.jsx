import React from 'react'
import TeamProfileImage1 from "../../assests/Ellipse 12.png";
import TeamProfileImage2 from "../../assests/Ellipse 15.png";
import TeamProfileImage3 from "../../assests/Ellipse 14.png";
import TeamProfileImage4 from "../../assests/Ellipse 10.png";
import './style/style.css'
import {TeamProfile} from '../teamProfile/TeamProfile'
import Zoom from 'react-reveal/Zoom';

export const Ourteam = () => {
  const teamArr = [
    { id: 1, name: "Mr. Matkher", image: TeamProfileImage1, position: "Director" },
    {
      id: 2,
      name: "Elvis Mariga",
      image: TeamProfileImage2,
      position: "HeadTeacher",
    },
    {
      id: 3,
      name: "Mr. Okeri",
      image: TeamProfileImage3,
      position: "Deputy Teacher",
    },
    {
      id: 3,
      name: "Miss Elizabeth",
      image: TeamProfileImage4,
      position: "Accountant",
    },
  ];

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

