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

  // formData.value() === undefined && setBtnDisabled(true) ;
  const navigate = useNavigate();
  const handleChange = (e) => {
   
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });

  };

//   useEffect(()=>{
//     const checkNum = ()=>{
//       formData.phone_nuber.length === 9 ? setBtnDisabled(false) : setBtnDisabled(true);

//     }
// checkNum();
//   },[formData])

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
            disabled={formData.phone_number.length !== 10}
            onClick={handleSubmit}
            type="submit"
            className= " mb-3 btn btn-primary myBtn">
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

