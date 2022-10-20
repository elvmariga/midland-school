import React from 'react'
import "./style/style.css"
import Logo from "../../assests/logo.png"

export const Login = () => {
  return (
     <div className='login'>
        <div className="loginContainer">
            <div className="loginleft">
                <img src="../../achadwa/art.png     " alt="logo" />
            </div>
            <div className="loginRight">
                <div class="title">
                    <h2>Staff and Parent Log in</h2>
                </div>
                <div class="loginForm">
                    <form action="">
                        <div>
                            <label for="Username">Username</label>
                            <input type="text" placeholder="Username"/>
                        </div>
                       <div>
                        <label for="Password">Password</label>
                        <input type="password" placeholder="Password"/>

                       </div>
                       <div class="remember">
                           <div>
                            <input type="checkbox" name="rememberMe" id="rememberMe"/>rememberMe
                           </div>
                        <a href="http://">Forgot Password</a>
                       </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

