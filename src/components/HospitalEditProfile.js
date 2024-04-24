import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function HospitalEditProfile() {

    const [data, setData] = useState({})

  const id=localStorage.getItem('hospitalid')

  const navigate=useNavigate()
    
      const handleChange = (a) => {
        if (a.target.name == "image") {
          setData({ ...data, image: a.target.files[0] });
        } else {
          setData({ ...data, [a.target.name]: a.target.value });
        }
      };

      useEffect(()=>{
        axiosInstance.post(`/viewHospitalById/${id}`,data)
        .then((res)=>{
          console.log(res);
            setData(res.data.data)
          })
          .catch((err)=>{
            console.log(err);
            alert("something went wrong")
          })
      },[])

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

        axiosInstance.post(`/editHospitalById/${id}`,data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res)=>{
          console.log(res);
            if(res.data.status===200){
              alert("Profile Updated")
              navigate('/hospital_profile')
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
      <div className="user_reg mt-4">
        <div className="user_reg_head">
          <p className="user_reg_head_title pt-2">Profile</p>
          {/* <p className="user_reg_head_para">Fill the information carefully</p> */}
        </div>
        <form onSubmit={handleSubmit} >
            <div className="user_reg_content">
          {/* <p className="user_reg_content_title">Personal Information</p> */}
          <div className="user_reg_content_inpgrp row">
            
            <div className="col-6">
              <label for="exampleFormControlInput1" class="form-label">
                  Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
              />
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
              Registration Number  
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Registration Number"
                name="regno"
                value={data.regno}
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
              />
            </div>
            
          </div>
          <div className="user_reg_btn_div" >
            <button type="submit" className="user_reg_btn" >Update</button>
          </div>
        </div> 
        </form>
       
       
      </div>
    </div>
  )
}

export default HospitalEditProfile
