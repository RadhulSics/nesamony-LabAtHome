import React, { useEffect, useState } from "react";
import "./UserLogin.css";
import EmptyNavbar from "./EmptyNavbar";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrls";
import LandingNavbar from "./LandingNavbar";

function UserLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "", 
  });

  const navigate=useNavigate()

  useEffect(() => {
    if(localStorage.getItem('userid')!==null){
      navigate('/user_home')
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault()
    axiosInstance.post(`/loginUser`, loginData)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          localStorage.setItem("userid", result.data.data._id);
          navigate('/user_home')
          alert("login Sucessfully...");
        } else if (result.data.status == 500) {
          alert(result.data.msg)
        }
        else {
          alert(result.data.msg)
        }
      })
      .catch((error) => {
        console.log("error", error);
      });

  };

  return (
    <div>
      <div className="user_log">
        <LandingNavbar />
        <div className="user_log_box mt-5">
          <p className="user_log_box_title mb-5">Patient Login</p>
          <form onSubmit={handleLogin} >
            <div className="user_log_inp_box mt-3">
            <input 
              type="email"
              className="mb-3"
              placeholder="Email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required

            />
            <input
              type="password"
              className="mb-3"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required

            />
            <p><Link to='/user_forgot_password' >Forgot Password</Link></p>
            <div className="user_log_btn">
              <button type="submit" onClick={handleLogin}>Login</button>
            </div>
          </div>
          </form>
          
          <div className="user_log_signup mt-4">
            <p>
              Don't have an account? <Link to="/user_registration">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
