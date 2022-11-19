import React from "react";
import "./style/style.css";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { Loading } from "../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ModalInquiry = ({ getModalState }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [formData, updateFormData] = React.useState({
    name:"",
    email:"",
    tel:"",
    subject:"",
    message:"",
  });
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
    notify();
    // ... submit to API or something
    sendInquiry();
  };
  const sendInquiry = async () => {

    try {
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

    finally {
      setIsLoading(false);
    }
  }
  //notify the uset that the response has been recieved
  const notify = () => {

    // Calling toast method by passing string
    toast.success("Thank you for your inquiry we will get in touch soon", { autoClose: 3000 });
  }



  return (
    isLoading ? <Loading /> :
      <div className="cover">
        <div className="contact">
          <div className="close">
          <ToastContainer />
          <div className="close-icon">
          <ImCross
              onClick={() => {
                setShowModal(false);
                getModalState(showModal);
              }}
             
            />
          </div>
           
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
                rows="2"
                placeholder="Message"
                required="required"
                onChange={handleChange}
              ></textarea>
              <button
                onClick={handleSubmit}
                disabled={formData.name ==='' || formData.email ==='' || formData.tel=== '' || formData.subject ==='' || formData.message=== ''}
                className="myBtn"
              > Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
  );
};
