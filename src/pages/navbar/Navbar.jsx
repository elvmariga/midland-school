import React from "react";
import Logo from "../../assests/logo.png";
import "./style/style.css";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

export const Navbar = () => {
  const [showLinks, setShowLinks] = React.useState(false);
  // const [showModal, setShowModal] = React.useState(false);

  const handleClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav>
      <div className="bigCont">
        <div className="container">
          <div className="logo">
            <NavLink smooth="true" spy="true" to="/home">
              <img onClick={window.scrollTo(0, 0)} src={Logo} alt="logo" />
            </NavLink>
          </div>

          <div className="links">
            <ul>
              <li className="link">
                <NavLink
                  smooth="true"
                  spy="true"
                  activeclassname="active"
                  to="/home"
                >
                  Home
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  smooth="true"
                  spy="true"
                  activeclassname="active"
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </li>
              <li className="link">
                <NavLink
                  smooth="true"
                  spy="true"
                  activeclassname="active"
                  to="/contactUs"
                >
                  {" "}
                  Contact Us
                </NavLink>
              </li>
              <li className="link">
                <NavLink spy="true" activeclassname="active" to="/calendar">
                  News & Events
                </NavLink>
              </li>

              

              <li className="link ">
                <NavLink
                  activeclassname="active"
                  to="/log-in"
                  className="login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>

          <div style={{ marginRight: "0.5rem" }}>
            <div className="humberger" onClick={() => handleClick()}>
              {showLinks ? <ImCross /> : <GiHamburgerMenu />}
            </div>

            <div className="mobile-container">
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
                      style={{
                        textDecoration: "none",
                        fontSize: "1.3rem",
                        fontFamily: "Poppins",
                      }}
                    >
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeclassname="active"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <hr />
                    <li className="link" onClick={() => handleClick()}>
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeClassName="active"
                        to="/aboutUs"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <hr />
                    <li className="link" onClick={() => handleClick()}>
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeClassName="active"
                        to="/contactUs"
                      >
                        {" "}
                        Contact Us
                      </NavLink>
                    </li>
                    {/* <hr /> */}
                    {/* <li
                      className="link"
                      onClick={() => {
                        setShowModal(true);
                        getModalState(showModal);
                        handleClick();
                      }}
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "Poppins",
                        color: "#141138",
                      }}
                    >
                      Send Inquiry
                    </li> */}

                    {/* <li>
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeclassname="active"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <hr />
                    <li className="link" onClick={() => handleClick()}>
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeClassName="active"
                        to="/aboutUs"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <hr />
                    <li className="link" onClick={() => handleClick()}>
                      <NavLink
                        smooth="true"
                        spy="true"
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
                        activeClassName="active"
                        to="/contactUs"
                      >
                        {" "}
                        Contact Us
                      </NavLink>
                    </li> */}
                    {/* <hr /> */}
                    {/* <li
                      className="link"
                      onClick={() => {
                        setShowModal(true);
                        getModalState(showModal);
                        handleClick();
                      }}
                      style={{
                        fontSize: "1.3rem",
                        fontFamily: "Poppins",
                        color: "#141138",
                      }}
                    >
                      Send Inquiry
                    </li> */}
                    <hr />

                    <li className="link" onClick={() => handleClick()}>
                      <NavLink
                        style={{
                          textDecoration: "none",
                          fontSize: "1.3rem",
                          fontFamily: "Poppins",
                          color: "#141138",
                        }}
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
      </div>
    </nav>
  );
};
