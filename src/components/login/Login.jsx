import React, { useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
// import Logo from "../../assests/logo.png"
import "./style/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { validEmail, validPassword } from "../regex/Regex";
import { Loading } from "../loading/Loading"

// toast.configure()

export const Login = () => {

  const [formData, updateFormData] = useState({
    username: window.localStorage.getItem("username") || "",
    password: window.localStorage.getItem("password") || ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const [userNameErr, setUserNameErr] = useState(false); //error presence
  const [msgError, setMsgError] = useState(""); //error  message
  const [isChecked, setIsChecked] = useState(window.localStorage.getItem("isChecked") || true); //remember me

  window.localStorage.setItem("isChecked", isChecked);

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

    try {
      setIsLoading(true);

      const res = await axios({
        method: "post",
        url: "http://ondishub.co.ke/api/auth/login",
        data: formData,
      })


      if (res.data.status === "success") {

        notify();
        window.localStorage.setItem("token", res.data.data);
        //reset the formdata state
        !isChecked && updateFormData({
          username: "",
          password: ""
        })
      }

    }

    catch (error) {
      error.response.status === 422 && setUserNameErr(true);
      setMsgError(error.response.data.message);

    }

    finally {
      setIsLoading(false);
    }

  }

  //store the value of isChecked in localStorage

  const persistUser = () => {
    window.localStorage.setItem("isChecked", isChecked);
    //updating formdata in localstorage evertime checkbox is changed
    if (!isChecked) {
      window.localStorage.setItem("username", formData.username)
      window.localStorage.setItem("password", formData.password)

    } else {

      window.localStorage.setItem("password", "")
      window.localStorage.setItem("username", "")
    }
  }


  //diaplaying succes message after user login
  const notify = () => {

    // Calling toast method by passing string
    toast.success("Log in succesful, welcome", { autoClose: 3000 });
  }


  return isLoading ? (
    //display loader when waiting for response
    <div className='loader'><div className='child'><Loading /></div></div>
  ) : (
    <div className="signinContainer">
      <div className="containerS">
        <ToastContainer />
        {/* <div className="signin-left">
          <img src={Logo} alt="   logo" />
        </div> */}
        <div className="signin-right">
          <form>
            {userNameErr && <p className='error'>{`${msgError}`}</p>}
            <h2>Sign In</h2>

            <div className="mb-3">
              <label>Username</label>
              <input
                name="username"
                value={formData.username}
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
                value={formData.password}
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                required="required"
              />
            </div>
            {/* {pwdError && <p className='error'>Your password is incorrect</p>} */}

            <div className="mb-3 forgot-remember">
              <div className="custom-control check custom-checkbox">
                <label name="rememberMe" className="custom-control-label" >Remember me </label>
                <input
                  // ref={ref
                  type="checkbox"
                  checked={isChecked}
                  className="custom-control-input"
                  id="customCheck1"
                  onChange={
                    (e) => {
                      setIsChecked(e.target.checked);
                      persistUser();
                    }
                  }
                />
                {/*
                <input  / >  */}
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
                disabled={formData.username === "" || formData.password === ""}
                className="btn btn-primary myBtn "
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
