import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style/style.css";

export const Otp= () => {
  const [formData, updateFormData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ... submit to API or something
    getPassword();
  };

  const getPassword = async () => {
    try {
      setIsLoading(true);

      const res = await axios({
        method: "post",
        url: "https://ba57-102-68-77-133.ap.ngrok.io/api/password/forgot-password",
        data: formData,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="otp-container">
      <div className="otp">
        <div className="mb-3">
          <h2>Enter the OTP sent through the SMS</h2>
        </div>
        <div className="mb-3">
          <label>OTP</label>
          <input
            name="otp"
            type="number"
            className="form-control"
            placeholder="Enter the OTP"
            onChange={handleChange}
          />
        </div>
      
        <div className="d-grid">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" mb-3 btn btn-primary myBtn">
            Confirm
          </button>
        </div>

        {/* 
        <p className="d-grid  text-right">
         <Link to={'/sign-up'}>sign Up?</Link>
      </p> */}
      </div>
    </div>
  );
};
