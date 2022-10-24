import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { Link } from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import { Login } from "../login/Login";



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

        <div className="links">
          <ul>
            <li className="link" onClick={() => handleClick()}>
              <Link smooth={true} spy={true}  activeClass='active' to="/">
                Home
              </Link>
            </li>
            <li className="link">
              <Link smooth={true} spy={true}  activeClass='active' to="/aboutUs">About Us</Link>
            </li>
            <li className="link">
              <Link smooth={true} spy={true}  activeClass='active' to="/contactUs"> Contact Us</Link>
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

            <li className="link ">
              <Link to="/log-in" className="login">
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="humberger" onClick={() => handleClick()}>
            {showLinks ? <ImCross /> : <GiHamburgerMenu />}
          </div>

          <div>
            {showLinks && (
              <div className="mobilelinks">
                <ul>
                  <li className="link" onClick={() => handleClick()}>
                    <Link smooth={true} spy={true}  activeClass='active' to="/">Home</Link>
                  </li>
                  <li className="link" onClick={() => handleClick()}>
                    <Link smooth={true} spy={true}   activeClass='active' to="/aboutUs">About Us</Link>
                  </li>
                  <li className="link" onClick={() => handleClick()}>
                    <Link smooth={true} spy={true}   activeClass='active' to="/contactUs"> Contact Us</Link>
                  </li>
                  <li
                    className="link"
                    onClick={() => {
                      setShowModal(true);
                      getModalState(showModal);
                      handleClick();
                    }}
                  >
                    Send Inquiry
                  </li>

                  <li className="link" onClick={() => handleClick()}>
                    <Link spy={true}  to="/log-in" className="log-in">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};



 


