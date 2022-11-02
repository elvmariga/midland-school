import React from "react";
import "./style/style.css";
import { ImCross } from "react-icons/im";
import axios from "axios";

export const ModalInquiry = ({ getModalState }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, updateFormData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

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
    sendInquiry();
  };

  const sendInquiry = async () => {
    
    try{
      setIsLoading(true);

      const res = await axios({
        method: "post",
        url: "https://ba57-102-68-77-133.ap.ngrok.io/api/enquire",
        data: formData,
       
      })
     
      console.log(res);
      
    }

    catch (error) {

      console.log(error);
      
    }

    finally{
      setIsLoading(false);
    }


  }
  return (
    // showModal===true &&
    <div className="cover">
      <div className="contact">
        <div className="close">
          <ImCross
            onClick={() => {
              setShowModal(false);
              getModalState(showModal);
            }}
            style={{
              opacity: "0.9",
              with: "25px",
              padding: "5px",
              color: "black",
              display: "flex",
              justifyItems: "end",
              height: "30px",
              width: "30px",
              alignSelf: "end",
            }}
          />
        </div>

        <div>
          <h2>Any questions? Send us an inquiry</h2>
        </div>
        <div>
          <div></div>
          <form action="" method="post">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              required="required"
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required="required"
            />
            <input
              onChange={handleChange}
              type="tel"
              name="tel"
              id="tel"
              placeholder="Phone Number"
              required="required"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required="required"
              onChange={handleChange}
            />
            <textarea
              name="message"
              id="message"
              cols="40"
              rows="3"
              placeholder="Message"
              required="required"
              onChange={handleChange}
            ></textarea>
            <input
              onClick={handleSubmit}
              className="myBtn"
              type="button"
              value="Send Inquiry"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
