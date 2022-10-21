import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import "./style/style.css"

export const ForgotPasword = () => {

    const [formData, updateFormData] = React.useState();
    const [isLoading, setIsLoading] = React.useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.type]: e.target.value.trim()
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
     

      const res = await axios ({
        method: "post",
        url: "http://localhost:5000/forgot-password",
        data: formData,
       
      })
     

        console.log(res.data.status);
      
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
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" mb-3 btn btn-primary myBtn"
          >
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

