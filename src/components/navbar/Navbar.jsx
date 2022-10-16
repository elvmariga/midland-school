import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { Link } from "react-router-dom";



export const Navbar = ({getModalState}) => {
  const [showModal, setShowModal]= React.useState(false);
  return (
    <nav>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <ul>
            <li className="link">
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
                setShowModal(!showModal);
                getModalState(showModal);
              }}
            >
            {showModal === false ?  <i style={{backgroundColor:"black",opacity:"0.9", with:"25px", padding:"5px",color:"#fff"}} className="fa-solid fa-xmark"></i>  :  "Send Inquiry"    }
            
            </li>

            <li className="link">
              <Link>
                <button>Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
