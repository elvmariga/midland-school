import React , {useState} from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./styles/style.css";

export const Password = () => {

  const [formData, updateFormData] = useState({
    password_confirm:0,
    password:0
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const navigate  = useNavigate();

  console.log(isLoading)
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
        url: "http://ondishub.co.ke/api/password/forgot-password",
        data: formData,
      })

      console.log(res);

     res.data.status = "ok" && navigate("/log-in");
    } catch (error){
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="password-container">
      <div className="password-password">
        <div className="mb-3">
          <h2>Create New Password</h2>
        </div>
        <div className="mb-3">
          <label>OTP</label>
          <input
            name="otp"
            placeholder="Enter the OTP"
            onChange={handleChange}
            required
          />
          <p style={{ margin: "2px", textAlign:"right" } }>Resend OTP</p>
        </div>

        <div className="mb-3">
          <label>New Password</label>
          <input
            name="password"
            type="text"
            className="form-control"
            placeholder="Enter New Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            name="password_confirm"
            type="text"
            className="form-control"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-grid">
          <button
            onClick={handleSubmit}
            type="submit"
            className=" mb-3 btn btn-primary myBtn"
            disabled={formData.password !== formData.password_confirm}
          >
            Password
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
