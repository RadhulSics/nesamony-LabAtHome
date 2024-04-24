import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import EmptyNavbar from './EmptyNavbar';
import LandingNavbar from './LandingNavbar';

function HospitalForgotPassword() {

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
      });
    
      const navigate=useNavigate()
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleLogin = (e) => {
        e.preventDefault()
        axiosInstance.post(`/forgotPwdHospital`, loginData)
          .then((result) => {
            console.log("data entered", result);
            if (result.data.status == 200) {
              alert("Updated Succesfully");
              navigate('/hospital_login')
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
        <div className="user_log_box">
          <p className="user_log_box_title mb-5">Forgot Password </p>
          <form onSubmit={handleLogin} >
            <div className="user_log_inp_box mt-3">
            <input
              type="email"
              className="mb-3"
              placeholder="Email Id"
              name="email"
              onChange={handleChange}
              required

            />
            <input
              type="password"
              className="mb-3"
              placeholder="New Password"
              name="password"
              onChange={handleChange}
              required
            />
           
            <div className="user_log_btn mt-5">
              <button type="submit" >Confirm</button>
            </div>
          </div>
          </form>
          
          {/* <div className="user_log_signup mt-4">
            <p>
              Don't have an account? <Link to="/user_registration">Sign up</Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HospitalForgotPassword
