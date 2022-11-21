import React, { useState } from "react";
import { Socials, Loading, Map } from "../../components";
import { Footer } from "../footer/Footer";
import Zoom from "react-reveal/Zoom";
import "./style/style.css";
import axios from "axios";

export const Contact = () => {
  // form inputs
  const [formData, updateFormData] = useState({
    name: "",
    email: "",
    tel: "",
    subject: "",
    message: "",
  });
  // loading state
  const [isLoading, setIsLoading] = useState(false);
  // mailstatus
  const [mailSent, setMailSent] = useState();

  //geolocation pointer
  const location = {
    address: "JXW2+XH9, Community Rd, Nairobi",
    lat: -1.3525940209369631,
    lng: 36.951459742971196,
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });

    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ... submit to API or something
    sendEmail();
  };

  //submiting form data
  const sendEmail = async () => {
    try {
      setIsLoading(true);

      const res = await axios({
        method: "post",
        url: "http://localhost:5000/send-email", //backend API
        data: formData,
      });

      console.log({ res });

      res.data.status === "ok" ? setMailSent(true) : setMailSent(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="container-content">
        <div className="contact-left">
          <div className="contact-title">
            <h1>Reach Us</h1>
          </div>
          <div className="contact-details">
            <a href="tel:+254702789015">
              <i className="fa-solid fa-phone "></i>
              +254 702 789 015
            </a>
            <br />
            <a
              href="mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-solid fa-envelope "></i>
              midlandprep17@gmail.com
            </a>
            <p>
              <i className="fa-solid fa-location-dot "></i>
              Midland Court, Community Rd, Syokimau, Machakos County
              {/* <span className="location">Syokimau, Machakos County</span> */}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              backgroundColor: "#660113",
              justifyContent: "center",
              textAlign: "center",
              height: "30px",
              paddingTop: "15px",
            }}
          >
            <Socials />
          </div>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="contact-right">
            <div>
              <h2>Any questions? Send us an inquiry</h2>
            </div>
            <div>
              <Zoom cascade>
                <form action="" method="post">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <input
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Phone Number"
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="3"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                  <button
                    onClick={() => handleSubmit}
                    className="myBtn"
                    disabled={
                      formData.name === "" ||
                      formData.email === "" ||
                      formData.tel === "" ||
                      formData.subject === "" ||
                      formData.message === ""
                    }
                  >
                    Send Inquiry
                  </button>
                  {/* displays when the email is sent */}
                  {mailSent && <p>Your Inquiry has been recived. Thank you.</p>}
                </form>
              </Zoom>
            </div>
          </div>
        )}

        <div className="google-map">
          <hr />
          <Map location={location} zoomLevel={15} />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
