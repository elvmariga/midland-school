import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom"
// import Logo from "../../assests/logo.png"
import "./style/style.css";
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure()

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

      const res = await axios({
        method: "post",
        url: "https://ba57-102-68-77-133.ap.ngrok.io/api/auth/login",
        data: formData,
       
      })
     
      console.log(res);
      if(res.data.status === "success" ){
        notify();
        window.localStorage.setItem("token",res.data.data);
        // window.location.href=`https://9568-102-68-77-133.ap.ngrok.io/admin?token=${res.data.token}`
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

  //diaplaying succes message after user login
  const notify = () =>{
 
    // Calling toast method by passing string
    toast.success("Log in succesful, welcome", {autoClose:3000});
  }

  return isLoading ? (
    <p>Loading..</p>
  ) : (
    <div className="signinContainer">
      <div className="containerS">
        <ToastContainer />
        {/* <div className="signin-left">
          <img src={Logo} alt="   logo" />
        </div> */}
        <div className="signin-right">
          <form>
            <h2>Sign In</h2>

            <div className="mb-3">
              <label>Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                placeholder=" Enter Staff/Parent ID"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                required="required"
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
                  Forgot <Link to="/forgotpassword">password?</Link>
                </p>
              </div>
            </div>

            
            <div className="d-grid">
              <button
                onClick={handleSubmit}
                type="submit"
                // disabled
                className="btn btn-primary myBtn ">
                Submit
              </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};
