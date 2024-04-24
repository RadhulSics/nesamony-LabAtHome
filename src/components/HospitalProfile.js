import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';
import { Link, useNavigate } from 'react-router-dom';

function HospitalProfile({url}) {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('hospitalid')==null){
      navigate('/')
    }
  });
    
    const [data,setData]=useState({image:{filename:''}})
  const id=localStorage.getItem('hospitalid')
  console.log(id);

  useEffect(()=>{

  axiosInstance.post(`/viewHospitalById/${id}`)
  .then((res)=>{
    console.log(res);
    setData(res.data.data)
  })
  .catch((err)=>{
    console.log(err);
  })

  },[])

  return (
    <div>
      <div className=" user_profile mt-5">
        <div className="user_log_box mt-2 row ">
          <div className='col-6 user_profile_left_col' >
          <img src={`${url}/${data.image.filename}`} alt="profile_picture" />
          </div>
          <div className='col-6 user_profile_right_col' >
            <div className='row w-75' >
                <div className='col-12 d-flex justify-content-between'>
                    <p>Name</p>
                    <p>{data.name}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>E-mail</p>
                    <p>{data.email}</p>
                </div>
                
                <div className='col-12 d-flex justify-content-between'>
                    <p>Contact</p>
                    <p>{data.contact}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>Reg Number</p>
                    <p>{data.regno}</p>
                </div>
                
               
                <div className='col-12 d-flex justify-content-between'>
                    <p>Address</p>
                    <p>{data.city}, {data.district}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p></p>
                    <p>{data.pincode}</p>
                </div>
                <div className='col-12 d-flex justify-content-around'>
                    <Link to='/hospital_edit_profile' ><button className='btn btn-success' >Edit</button></Link>
                    <button className='btn btn-danger' onClick={()=>{localStorage.clear();window.location.reload(false)}} >Logout</button>
                </div>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HospitalProfile
