import React, { useState, useRef } from "react";
import { Socials, Loading, Map } from "../../components";
import { Footer } from "../footer/Footer";
import Zoom from "react-reveal/Zoom";
import "./style/style.css";
// import axios from "axios";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  // form inputs
  // const [formData, updateFormData] = useState({
  //   name: "",
  //   email: "",
  //   tel: "",
  //   subject: "",
  //   message: "",
  // });
  // loading state
  // const [isLoading, setIsLoading] = useState(false);
  // mailstatus
  // const [mailSent, setMailSent] = useState();

  //geolocation pointer
  const location = {
    address: "JXW2+XH9, Community Rd, Nairobi",
    lat: -1.3525940209369631,
    lng: 36.951459742971196,
  };

  // const handleChange = (e) => {
  //   updateFormData({
  //     ...formData,

  //     // Trimming any whitespace
  //     [e.target.name]: e.target.value.trim(),
  //   });

  //   console.log(formData);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // ... submit to API or something
  //   sendEmail();
  // };

  // //submiting form data
  // const sendEmail = async () => {
  //   try {
  //     setIsLoading(true);

  //     const res = await axios({
  //       method: "post",
  //       url: "http://localhost:5000/send-email", //backend API
  //       data: formData,
  //     });

  //     console.log({ res });

  //     res.data.status === "ok" ? setMailSent(true) : setMailSent(false);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };


   const form = useRef();

   const sendEmail = (e) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_886sh85",
         "template_ybaee3f",
         form.current,
         "3ELD80oB0_0MwUc2d"
       )
       .then(
         (result) => {
           alert("success");
         },
         (error) => {
            alert("failed");
         }
       );
   };

  return (
    <div className="contact-container">
      <div className="container-content">
        <div className="contacts">
          <div className="contact-left">
            <div className="contact-title">
              <h1>Reach Us</h1>
            </div>
            <div className="contact-details">
              <a href="tel:+254702789015">
                <i className="fa-solid fa-phone "></i>
                +254 702 789 015
              </a>

              <a
                href="mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-regular fa-envelope "></i>
                midlandprep17@gmail.com
              </a>
              <a
                href="mailto:info@midlandschool.co.ke?subject=Inquiry&body=The%20body%20of%20the%20email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-envelope "></i>
                info@midlandschool.co.ke
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
          <hr style={{ margin: "2rem 0" }} />

          <div className="contact-right">
            {/* {isLoading ? (
              <Loading />
            ) : ( */}
              <div>
                <div>
                  <h2>Any questions? Send us an inquiry</h2>
                </div>
                <div>
                  <Zoom cascade>
                    <form ref={form} onSubmit={sendEmail}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                      <input
                        type="tel"
                        name="tel"
                        id="tel"
                        placeholder="Phone Number"
                      />
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                      <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                      <input type="submit" value="Send Inquiry " />
                      {/* displays when the email is sent */}
                      {/* {mailSent && (
                        <p>Your Inquiry has been recived. Thank you.</p>
                      )} */}
                    </form>
                    {/* <form action="" method="post">
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
                      {}
                      {mailSent && (
                        <p>Your Inquiry has been recived. Thank you.</p>
                      )}
                    </form> */}
                  </Zoom>
                </div>
              </div>
             {/* )} */}
          </div>
        </div>
        <div className="google-map">
          <hr />
          {/* <Map location={location} zoomLevel={10} /> */}
          <div
            className="google-map-code"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.706616426128!2d36.949271!3d-1.3525886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d805ba00975%3A0x6d8ac13ce32d467d!2sMidland%20School!5e0!3m2!1sen!2ske!4v1672856636417!5m2!1sen!2ske"
              width="100%"
              height="500"
              frameborder="0"
              style={{
                border: "2px",
                display: "grid",
                gridTemplateColumns: "row",
                justifyContent: "center",
              }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
