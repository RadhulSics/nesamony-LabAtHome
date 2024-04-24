import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function HospitalEdtDoctorProfile() {

    const [values,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const {id}=useParams();
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewDoctorById/${id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
    console.log(values);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editDoctorById/${id}`,values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Profile Updated')
          navigate('/hospital_view_doctors')
        }else{
          alert('Updation Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (a)=>{
      if (a.target.name == "image") {
        setValue({ ...values, image: a.target.files[0] });
      } else {
        setValue({ ...values, [a.target.name]: a.target.value });
      }
    }

    const specializationOptions = [
        "Surgeon",
        "Cardiologist",
        "Dermatologist",
        "Orthopedic Surgeon",
        "Neurologist",
        "Ophthalmologist",
        "ENT Specialist",
        "Gastroenterologist",
        "Pediatrician",
        "Urologist",
      ];

  return (
    <div>
      <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title ">
              <h1>Update Profile</h1>
            </div>

            <div class="col-lg-12 login-form ">
              <div class="col-lg-12 login-form">
                <form className="mt-3" onSubmit={updatefcn}>
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      {/* <label class="form-control-label">USER EMAIL</label> */}
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value={values.name}
                        placeholder="Name"
                        onChange={changefn}
                      />
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="e-mail"
                        value={values.email}
                        onChange={changefn}                       
                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                    <select
                        class="form-select"
                        aria-label="Default select example"
                        value={values.specialization}
                        onChange={changefn}
                        name='specialization'
                      >
                        <option value="" disabled>
                          Select Specialization
                        </option>
                        {specializationOptions.map((specialization, index) => (
                          <option key={index} value={specialization}>
                            {specialization}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        type="number"
                        class="form-control"
                        placeholder="experience"
                        value={values.experience}
                        onChange={changefn}                      />
                    </div>
                    
                    <div class="col-6 form-group mb-2">
                      <input
                        name="qualification"
                        type="text"
                        class="form-control"
                        placeholder="Age"
                        value={values.qualification}
                        onChange={changefn}                      />
                    </div>
                    
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
                        type="number"
                        class="form-control"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={changefn}                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="affiliationnumber"
                        type="number"
                        class="form-control"
                        placeholder="Password"
                        value={values.affiliationnumber}
                        onChange={changefn}
                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="city"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.city}
                        onChange={changefn}                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="district"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.district}
                        onChange={changefn}                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="pincode"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.pincode}
                        onChange={changefn}                      />
                    </div>
                    <div class="col-12 form-group mb-2">
                      <input
                        name="image"
                        type="file"
                        class="form-control"
                        placeholder="City"
                        onChange={changefn}                      />
                    </div>
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                        Update
                      </button>
                      <div class="reg__link"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="col-lg-3 col-md-2"></div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalEdtDoctorProfile
