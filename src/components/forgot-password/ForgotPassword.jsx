import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import { Navigate } from 'react-router-dom';
import "./style/style.css";

export const ForgotPasword = () => {

  const [formData, updateFormData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate  = Navigate();

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
    getPassword();
  };

  const getPassword = async () => {
    
    try{
      setIsLoading(true);
     

      const res =
        (await axios({
          method: "post",
          url: "https://ba57-102-68-77-133.ap.ngrok.io/api/password/forgot-password",
          data: formData,
        })
        ((res.data.status = "ok"))) && Navigate("./newpassword");

        
      
    }

    catch (error) {

      console.log(error);
      
    }

    finally{
      setIsLoading(false);
    }


  }
  return (
    <div className="forgot-container">
      <div className="forgot-password">
        <div className="mb-3">
          <h2>Reset Password</h2>
        </div>
        <div className="mb-3">
          <label>Phone no:</label>
          <input
            name="phone_number"
            type="tel"
            className="form-control"
            placeholder="Enter phone number"
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" mb-3 btn btn-primary myBtn">
            Reset Password
          </button>
        </div>

        {/* 
        <p className="d-grid  text-right">
         <Link to={'/sign-up'}>sign Up?</Link>
      </p> */}
      </div>
    </div>
  );
}

