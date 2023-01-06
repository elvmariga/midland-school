import React from 'react'
import Director from "../../assests/director.png";
import Headteacher from "../../assests/headteacher.png";
import Deputy from "../../assests/deputy.png";
import Principal from "../../assests/principal.png";
import './style/style.css'
import {TeamProfile} from '../teamProfile/TeamProfile'
import Zoom from 'react-reveal/Zoom';

export const Ourteam = () => {
  const teamArr = [
    {
      id: 1,
      name: "Matkher Mohammed Noor",
      image: Director,
      position: "Director",
    },
    {
      id: 2,
      name: "Said Hiribae Gayoye",
      image: Headteacher,
      position: "Headteacher",
    },
    {
      id: 3,
      name: "Rehema Hawa",
      image: Deputy,
      position: "Deputy Headteacher",
    },
    {
      id: 3,
      name: "Mr. Fredrick Olumbo",
      image: Principal,
      position: "Principal Junior High School",
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

