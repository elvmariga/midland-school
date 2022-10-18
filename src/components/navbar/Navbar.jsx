import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";



export const Navbar = ({getModalState}) => {
  const [showLinks, setShowLinks] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const handleClick = () =>{
    setShowLinks(!showLinks )
  }

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        
        <div className= "links">

    
          <ul>
            <li className="link" onClick={()=>handleClick()}>
              <Link aactivestyle ="activeLink" to="/">Home</Link>
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
                ;
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

        <div   >
        
          <div className="humberger"  onClick={()=>handleClick() }>
            { showLinks ? <ImCross/> : <GiHamburgerMenu />}
          </div>
         
          <div>
            {
              showLinks &&  
              <div className= "mobilelinks">

    
                <ul>
                  <li className="link" onClick={()=>handleClick()}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className="link" onClick={()=>handleClick()}>
                    <Link to="/aboutUs">About Us</Link>
                  </li>
                  <li className="link" onClick={()=>handleClick()}>
                    <Link to="/contactUs"> Contact Us</Link>
                  </li>
                  <li
                    className="link"
                    onClick={() => {
                      setShowModal(true);
                      getModalState(showModal);
                      handleClick()
                    }}
                  >
                    Send Inquiry
                  
                  </li>

                  <li className="link" onClick={()=>handleClick()}>
                    <Link>
                      <button>Login</button>
                    </Link>
                  </li>
                </ul>
              </div>
            }
          </div>
         
        </div>

        
      </div>
    </nav>
  );
};



 


