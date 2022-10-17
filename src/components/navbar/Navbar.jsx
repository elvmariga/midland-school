import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";



export const Navbar = ({getModalState}) => {
  const [showLinks, setShowLinks] = React.useState(false);

  const handleClick = () =>{
    setShowLinks(!showLinks )
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        
        <Links showLinks={showLinks} getModalState ={getModalState}/>

        <div className="humberger"   >
          <div onClick={()=>handleClick() }>
            { showLinks ? <ImCross/> : <GiHamburgerMenu />}
          </div>
         
          <div>
            {
              showLinks &&  
              <Links 
                // className= {showLinks ? "mobileLinks" :"links"}
                // style={{ display:"flex", flexDirection:"column"}}
                getModalState ={getModalState}
                handleClick = {handleClick}

              />
            }
          </div>
         
        </div>

        
      </div>
    </nav>
  );
};



  export const Links = ({getModalState,showLinks,handleClick}) => {
    const [showModal, setShowModal]= React.useState(false);

    const hideLinks = () =>{
      handleClick();

    }
    
  return (
    <div className={!showLinks && "links"}>

    
          <ul>
            <li className="link" onClick={()=>hideLinks()}>
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li className="link">
              <Link to="/contactUs"> Contact Us</Link>
            </li>
            <li
              className="link"
              onClick={() => {
                setShowModal(true);
                getModalState(showModal);
              }}
            >
              Send Inquiry
            
            </li>

            <li className="link">
              <Link>
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
  )
}


