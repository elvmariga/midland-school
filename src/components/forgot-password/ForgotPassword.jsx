import React from 'react';
import axios from "axios";
// import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import "./style/style.css";
import {Loading } from "../loading/Loading";

export const ForgotPassword = () => {

  const [formData, updateFormData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);
  const [btnDisabled, setBtnDisabled] = React.useState(true);

  // formData.value() === undefined && setBtnDisabled(true) ;
  const navigate = useNavigate();
  const handleChange = (e) => {
   
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });

    formData.phone_number.length === 9 ? setBtnDisabled(false) : setBtnDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // ... submit to API or something
    getPassword();
  };

  const getPassword = async () => {
    
    try{
      setIsLoading(true);
     

      const res = await axios({
          method: "post",
          url: "https://3e66-102-68-77-133.jp.ngrok.io/api/password/forgot-password",
          data: formData,
      });

        console.log(res);
      if(res.data.status ==="ok") { window.location.href=("/newpassword")};

        
      
    }

    catch (error) {

      console.log(error);
      
    }

    finally{
      setIsLoading(false);
    }


  }
  return (
    
      isLoading ? 
      <div>

      <Loading/>
      </div> :
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
            required
            disabled={btnDisabled ? true : false}
            onClick={handleSubmit}
            type="submit"
            className={btnDisabled ? "disabled mb-3 btn btn-primary " : " mb-3 btn btn-primary myBtn"}>
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

