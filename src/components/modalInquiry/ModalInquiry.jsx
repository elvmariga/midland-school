import React from 'react'
import "./style/style.css";
import {ImCross} from "react-icons/im"

 export const ModalInquiry = ({getModalState}) => {
  const [showModal, setShowModal]= React.useState(false);
  return (
    // showModal===true && 
    <div className="cover">

    <div className="contact">

    <div className='close'>
        <ImCross 
            onClick={() => {
                setShowModal(false);
                getModalState(showModal);
              }
            } 
            style={
              {
                opacity:"0.9", with:"25px",
                padding:"5px",color:"black",
                display:"flex",
                justifyItems:"end",
                height:"30px",
                width:"30px",
                alignSelf:"end"
              }
            } 
          />
    </div>
    
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
            rows="5"
            placeholder="Message"
          ></textarea>
          <input className="myBtn" type="button" value="Send Inquiry" />
        </form>
      </div>
    </div>
  </div>
  
    
  );
}

