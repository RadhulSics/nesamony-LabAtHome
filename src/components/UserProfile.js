import React, { useEffect, useState } from 'react'
import './UserProfile.css'
import axiosInstance from '../BaseUrls';
import { Link, useNavigate } from 'react-router-dom';

function UserProfile({url}) {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('userid')==null){
      navigate('/')
    }
  });

    const [data,setData]=useState({image:{filename:''},dob:''})
  const id=localStorage.getItem('userid')
  console.log(id);

  useEffect(()=>{

  axiosInstance.post(`/viewUserById/${id}`)
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
                    <p>{data.firstname} {data.lastname}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>E-mail</p>
                    <p>{data.email}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>DOB</p>
                    <p>{data.dob.slice(0,10)}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>Gender</p>
                    <p>{data.gender}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p>Contact</p>
                    <p>{data.contact}</p>
                </div>
                
                <div className='col-12 d-flex justify-content-between'>
                    <p>Address</p>
                    <p>{data.housename}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p></p>
                    <p>{data.city}, {data.district}</p>
                </div>
                <div className='col-12 d-flex justify-content-between'>
                    <p></p>
                    <p>{data.pincode}</p>
                </div>
                <div className='col-12 d-flex justify-content-around'>
                    <Link to='/user_edit_profile' ><button className='btn btn-success' >Edit</button></Link>
                    <button className='btn btn-danger' onClick={()=>{localStorage.clear();window.location.reload(false)}} >Logout</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
