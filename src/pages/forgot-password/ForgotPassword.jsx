import React from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./style/style.css";
import {Loading } from "../../components";

export const ForgotPassword = () => {

  const [formData, updateFormData] = React.useState({
    phone_number:0,
  });
  const [error,setError]  = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorBool, setErrorBool] = React.useState(false)

  const navigate = useNavigate();
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
     

      const res = await axios({
        method: "post",
        url: "https://ondishub.co.ke/api/password/forgot-password",
        data: formData,
      });


      //redirect the user to new password page
      //else display error of the no
      res.status === 200 && navigate("/newpassword"); 
        
      
    }

    catch (error) {

      //displaying the error recieved
      setError(error.response.data.message);
      setErrorBool(true);
      // resetting the value of form data to empty
      error && updateFormData({
        phone_number: 0,
      }) ;
      
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
      { errorBool && <p className='error'>{`${error}`}</p> }

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

