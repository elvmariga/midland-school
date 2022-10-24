import React,{useState} from "react";
import { Socials } from "../socials/Socials";
import { ModalInquiry } from "../modalInquiry/ModalInquiry";
import Zoom from 'react-reveal/Zoom';
import './style/style.css';
import axios from "axios"


export const Contact = () => {
  const [formData, updateFormData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [mailSent, setMailSent] = useState();

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // ... submit to API or something
    sendEmail();
  };

  const sendEmail= async () => {
    
    try{
      setIsLoading(true);

      const res = await axios ({
        method: "post",
        url: "http://localhost:5000/send-email", //backend API
        data: formData,
       
      })
     
      console.log({res});

      (res.data.status === "ok" ) ? setMailSent(true) : setMailSent(false)
        
     
    }

    catch (error) {

      console.log(error);
      
    }

    finally{
      setIsLoading(false);
    }


  }


  return (
    <div className="concact-container">
      

      <div className="container">
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
          <div className="linkContact" style={{color:"red !important"}}>
            
            <a href="http:// ">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="http://">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="http://">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="http://">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="http://">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
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
              <input type="email" name="email" id="email" placeholder="Email" />
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
                rows="5"
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
              <input onClick={()=>handleSubmit} className="myBtn" type="button" value={ isLoading ? "Sending...":"Send Inquiry"} />
              {/* displays when the email is sent */}
              {mailSent && <p>Your Inquiry has been recived. Thank you.</p>}
            </form>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};
