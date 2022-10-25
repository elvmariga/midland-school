import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { NavLink} from "react-router-dom";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
// import { Login } from "../login/Login";



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
              <NavLink smooth={true} spy={true} activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                smooth={true}
                spy={true}
                activeClassName="active"
                to="/aboutUs"
              >
                About Us
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                smooth={true}
                spy={true}
                activeClassName="active"
                to="/contactUs"
              >
                {" "}
                Contact Us
              </NavLink>
            </li>
            <li className="link">
              <NavLink
                smooth={true}
                spy={true}
                activeClassName="active"
                to="/calendar"
              >
               
                News and Events
              </NavLink>
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
              <NavLink activeClassName="active" to="/log-in" className="login">
                Login
              </NavLink>
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
                <ul
                  style={{
                    listStyle: "none",
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <li
                    className="link"
                    onClick={() => handleClick()}
                    style={{ textDecoration: "none" }}
                  >
                    <NavLink
                      smooth={true}
                      spy={true}
                      style={{ textDecoration: "none" }}
                      activeClassName="active"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="link" onClick={() => handleClick()}>
                    <NavLink
                      smooth={true}
                      spy={true}
                      style={{ textDecoration: "none" }}
                      activeClassName="active"
                      to="/aboutUs"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li className="link" onClick={() => handleClick()}>
                    <NavLink
                      smooth={true}
                      spy={true}
                      style={{ textDecoration: "none" }}
                      activeClassName="active"
                      to="/contactUs"
                    >
                      {" "}
                      Contact Us
                    </NavLink>
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
                    <NavLink
                      style={{ textDecoration: "none" }}
                      activeClassName="active"
                      to="/log-in"
                      className="log-in"
                    >
                      Login
                    </NavLink>
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



 


