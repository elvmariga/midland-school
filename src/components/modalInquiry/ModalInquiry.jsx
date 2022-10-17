import React from 'react'
import "./style/style.css";
import {ImCross} from "react-icons/im"

 export const ModalInquiry = ({getModalState}) => {
  const [showModal, setShowModal]= React.useState(false);
  return (
    // showModal===true && 
    <div className="cover">

     <ImCross 
        onClick={() => {
            setShowModal(false);
            getModalState(showModal);
          }
        } 
        style={
          {
            backgroundColor:"black",
            opacity:"0.9", with:"25px",
            padding:"5px",color:"#fff",
            display:"flex",
            justifyItems:"end",
            height:"30px",
            width:"30px",
          }
        } 
      />
    <div className="contact">

      <div>
        <h2>Any questions? Send us an inquiry</h2>
      </div>
      <div>
        <div>
      
        </div>
        <form action="" method="post">
          <input type="text" name="name" id="name" placeholder="Full Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input type="tel" name="tel" id="tel" placeholder="Phone Number" />
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
            rows="10"
            placeholder="Message"
          ></textarea>
          <input className="myBtn" type="button" value="Send Inquiry" />
        </form>
      </div>
    </div>
  </div>
  
    
  );
}

