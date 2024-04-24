import React, { useEffect, useState } from 'react'
import './AdminDashboard.css'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function AdminDashboard() {

    
    
    const navigate=useNavigate()
    useEffect(() => {
      if(localStorage.getItem('adminid')==null){
        navigate('/')
      }
    });    

    const [hospital,sethospital]= useState([]);
    const [doctor,setdoctor]= useState([]);
    const [user,setuser]= useState([]);
    const [test,settest]= useState([]);

    useEffect(()=>{
        axiosInstance.post(`/viewApprovedHospitals`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                sethospital([])

            }else if(response.data.status==200){
                sethospital(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })
        axiosInstance
      .post(`/viewDoctors`)
      .then((response) => {
        console.log(response);
        if (response.data.msg == "No Data obtained ") {
            setdoctor([]);
        } else if (response.data.status == 200) {
            setdoctor(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

      axiosInstance.post(`viewAllTests`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                settest([])

            }else if(response.data.status==200){
                settest(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })

        axiosInstance.post("/viewUsers")
        .then((response)=>{
            if(response.data.msg=='No Data obtained '){
                setuser([])

            }else if(response.data.status==200){
                setuser(response.data.data)

            }
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[])


  return (
    <div>
      <div className='admin_dashboard_main container' >
        <div class="admin_dashboard_header">
          <h1>Dashboard</h1>
         
        </div>

        <ul class="admin_dashboard_cards">
          <li>
            <i class="bx bx-group"></i>
            <span class="admin_dashboard_info">
              <h3>{user.length}</h3>
              <p>Total Users</p>
            </span>
          </li>
          <li>
            <i class="bx bx-cart-add"></i>
            <span class="admin_dashboard_info">
              <h3>{hospital.length}</h3>
              <p>Total Hospitals</p>
            </span>
          </li>
          <li>
            <i class="bx bx-line-chart"></i>
            <span class="admin_dashboard_info">
              <h3>{doctor.length}</h3>
              <p>Total Doctors</p>
            </span>
          </li>
          <li>
            <i class="bx bx-dollar-circle"></i>
            <span class="admin_dashboard_info">
              <h3>{test.length}</h3>
              <p>Total Tests</p>
            </span>
          </li>
        </ul>

       
      </div>
    </div>
  
  )
}

export default AdminDashboard
