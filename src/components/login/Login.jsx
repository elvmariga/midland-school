import React, { useRef, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom"
// import Logo from "../../assests/logo.png"
import "./style/style.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validEmail, validPassword } from "../regex/Regex";
import { Loading } from "../loading/Loading"

// toast.configure()

export const Login = () => {

  const [formData, updateFormData] = useState({ phone_number: Number });
  const [isLoading, setIsLoading] = useState(false);

  const [userNameErr, setUserNameErr] = useState(false);
  const [msgError, setMsgError] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const ref = useRef(null);


  // const validate = () => {
  //   if (!validEmail.test(formData.email)) {
  //     setEmailErr(true);
  //   }
  //   if (!validPassword.test(formData.password)) {
  //     setPwdError(true);
  //   }
  // };

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
        url: "https://3e66-102-68-77-133.jp.ngrok.io/api/auth/login",
        data: formData,
      })

      console.log(res);
      if (res.data.status === "success") {
        notify();
        window.localStorage.setItem("token", res.data.data);
        // window.location.href=`https://9568-102-68-77-133.ap.ngrok.io/admin?token=${res.data.token}`
      
      }
    }

    catch(error) {
      error.response.status === 422 && setUserNameErr(true);
      // console.log(error.response.status);
      setMsgError(error.response.message);
    }

    finally {
      setIsLoading(false);
    }


  }

  //diaplaying succes message after user login
  const notify = () => {

    // Calling toast method by passing string
    toast.success("Log in succesful, welcome", { autoClose: 3000 });
  }

  return isLoading ? (
    <div><Loading /></div>
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
                // value={`${formData.phone_number}`}
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
            {/* {pwdError && <p className='error'>Your password is incorrect</p>} */}

            <div className="mb-3 forgot-remember">
              <div className="custom-control check custom-checkbox">
                <label name="rememberMe" className="custom-control-label" >Remember me </label>
                <input
                  ref={ref}
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                  onChange={
                    (e) => {
                      // e.preventDefault();
                      setIsChecked(ref.current.checked)
                    }}
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
                // disabled
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
