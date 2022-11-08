import React from 'react';
import axios from "axios";
// import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import "./style/style.css";
import {Loading } from "../loading/Loading";

export const ForgotPassword = () => {

  const [formData, updateFormData] = React.useState({
    phone_number:0,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();
  const handleChange = (e) => {
   
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });

  };



  const handleSubmit = (e) => {
    navigate("/newpassword")
    e.preventDefault()
    
    // ... submit to API or something
    getPassword();
  };

  const getPassword = async () => {
    
    try{
      setIsLoading(true);
     

      const res = await axios({
          method: "post",
          url: "https://ondishub.co.ke/api/password/forgot-password",
          data: formData,
      });

        console.log(res);
      if(res.data.status ===200) {navigate("/newpassword")};
//redirect the user to new password page
        
      
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
            disabled={formData.phone_number.length !== 10}
            onClick={handleSubmit}
            type="submit"
            className= " mb-3 btn btn-primary myBtn">
            Reset Password
          </button>
        </div>

        
      </div>
    </div>
  );
}

