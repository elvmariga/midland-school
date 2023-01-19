import React, {  useRef, useState } from "react";
import { Socials } from "../../components";
import Zoom from "react-reveal/Zoom";
import "./style/style.css";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";

export const Contact = () => {

  const [isLoading, setIsLoading] = useState(false);
  

  const formRef = useRef(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(formRef.current.value);
   
    emailjs
      .sendForm(
        "service_886sh85",
        "template_ybaee3f",
        formRef.current,
        "hg8g2BYh9dMK-hAnq"
      )
      .then(
        (result) => {
          // show the user an sent success
          console.log("yeah");
          swal("Email Sent Successfully");
          
        },
        (error) => {
          // show the user an error
          console.log("oops")
          swal("Email not sent, try again");
        
        }
      );

      setIsLoading(false);
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
        
            <div>
              <div>
                <h2>Any questions? Send us an inquiry</h2>
              </div>
              <Zoom cascade>
              <div>
             
                  <form ref={formRef} onSubmit={sendEmail}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                    <input
                      type="tel"
                      name="tel"
                      placeholder="Phone Number"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                    />
                    <textarea
                      name="message"
                      cols="30"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                    <input className="myBtn" type="submit" value= {isLoading ? "Sending..." : "Send Inquiry" }/>
                  </form>
              

               
              </div>
              </Zoom>
            </div>
           
          </div>
        </div>
        <div className="google-map">
          <hr />
         
          <div
            className="google-map-code"
            style={{ width: "80%", margin: "0 auto" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3988.706616426128!2d36.949271!3d-1.3525886!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d805ba00975%3A0x6d8ac13ce32d467d!2sMidland%20School!5e0!3m2!1sen!2ske!4v1672856636417!5m2!1sen!2ske"
              width="100%"
              height="500"
              frameBorder="0"
              style={{
                border: "2px",
                display: "grid",
                gridTemplateColumns: "row",
                justifyContent: "center",
              }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
