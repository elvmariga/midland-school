import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
import Logo from "../../assests/logo.png"
import "./style/style.css"

export  const Login = () => {

  const [formData, updateFormData] = React.useState();
  const [isLoading, setIsLoading] = React.useState(false);

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
    logInUser();
  };

  const logInUser = async () => {
    
    try{
      setIsLoading(true);

      const res = await axios ({
        method: "post",
        url: "https://a6f4-102-68-77-133.ngrok.io/api/auth/login",
        data: formData,
       
      })
     
      console.log(res);
      if(res.data.status === "ok" ){
        // alert("login successful");
        // window.localStorage.setItem("token",res.data.data);
        // window.location.href="/user-details"
        console.log(res);
      }
    }

    catch (error) {

      console.log(error);
      
    }

    finally{
      setIsLoading(false);
    }


  }

  return (
    <div className="signinContainer">
      <div className="containerS">
        {/* <div className="signin-left">
          <img src={Logo} alt="   logo" />
        </div> */}
        <div className="signin-right">
          <form>
            <h2>Sign In</h2>

            <div className="mb-3">
              <label>Staff/Parent ID</label>
              <input
                type="text"
                name= "username"
                className="form-control"
                placeholder=" Enter Staff/Parent ID"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3 forgot-remember">
              <div className="custom-control check custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
              <div className="forgot">
                <p className="forgot-password text-right">
                  Forgot <Link to={"/forgot-password"}>password?</Link>
                </p>
              </div>
            </div>

            <div className="d-grid">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-primary myBtn"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};
