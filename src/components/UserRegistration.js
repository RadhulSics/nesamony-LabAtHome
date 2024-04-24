import React, { useState } from "react";
import "./UserRegistration.css";
import EmptyNavbar from "./EmptyNavbar";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrls";
import LandingNavbar from "./LandingNavbar";

function UserRegistration() {

    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        dob: "",
        gender: "",
        email: "",
        housename: "",
        city: "",
        district: "",
        pincode: "",
        contact: "",
        image: null,
        password: ""
      });

      const navigate=useNavigate()
    
      const handleChange = (a) => {
        if (a.target.name == "image") {
          setData({ ...data, image: a.target.files[0] });
        } else {
          setData({ ...data, [a.target.name]: a.target.value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
       
          if (!/^\d{6}$/.test(data.pincode)) {
              alert("Pincode must have 6 digits");
              return;
            }
          if (!/^\d{10}$/.test(data.contact)) {
              alert("Contact must have 10 digits");
              return;
            }
  
            axiosInstance.post(`/registerUser`,data, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res)=>{
              console.log(res);
                if(res.data.status===200){
                  alert("Registration Successful")
                  navigate('/user_login')
                }
                else{
                  alert("something went wrong")
                }
              })
              .catch((err)=>{
                console.log(err);
                alert("something went wrong")
              })
      };
    

  return (
    <div>
      <div className="user_reg">
      <LandingNavbar/>
        <div className="user_reg_head">
          <p className="user_reg_head_title">Patient Registration</p>
          <p className="user_reg_head_para">Fill the information carefully</p>
        </div>
        <form onSubmit={handleSubmit} >
            <div className="user_reg_content">
          <p className="user_reg_content_title">Personal Information</p>
          <div className="user_reg_content_inpgrp row">
            
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                 First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="First Name"
                name="firstname"
                value={data.firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                 Second Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Last Name"
                name="lastname"
                value={data.lastname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Date of birth
              </label>
              <input
                type="date"
                class="form-control"
                id="exampleFormControlInput1"
                name="dob"
                value={data.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              
              <br />
              <div className="d-flex justify-content-evenly" >
              <label for="exampleFormControlInput1" class="form-label">
                Gender
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value='Male'
                onChange={handleChange}
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Male
              </label>
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value='Female'
                onChange={handleChange}
                required
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Female
              </label>
              </div>
              
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Personal Email Id
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
              House Name   
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="House Name"
                name="housename"
                value={data.housename}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="City"
                name="city"
                value={data.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                District
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="District"
                name="district"
                value={data.district}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Pincode
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Pincode"
                name="pincode"
                value={data.pincode}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Contact
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Contact"
                name="contact"
                value={data.contact}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Image
              </label>
              <input
                type="file"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="image"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="user_reg_btn_div" >
            <button type="submit" className="user_reg_btn" >Submit</button>
          </div>
        </div> 
        </form>
       
        <div className="user_log_signup pb-5" >
            <p>Have an account? <Link to='/user_login' > Log in</Link></p>
          </div>
      </div>
    </div>
  );
}

export default UserRegistration;
