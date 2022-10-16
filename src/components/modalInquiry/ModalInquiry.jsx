import React from 'react'

 export const ModalInquiry = () => {
  return (
    <div className="contact-right">
      <div>
        <h2>Any questions? Send us an inquiry</h2>
      </div>
      <div>
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
  );
}

