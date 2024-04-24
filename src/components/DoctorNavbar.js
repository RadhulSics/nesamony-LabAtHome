import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../Assets/img/logo.png";


function DoctorNavbar() {

    const navigate = useNavigate();
    useEffect(() => {
      if (localStorage.getItem("doctorid") == null) {
        navigate("/");
      }
    });

  return (
    <div>
      
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
      <div className="rjr_nav-logo ">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <Link to='/doctor_home' className="rjr_a ">Home</Link>
       
       

        {/* <div class="nav-item dropdown">
                   <Link href="#" class=" dropdown-toggle rjr_a" data-bs-toggle="dropdown">Bookings</Link>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/lab_view_test_rq' class="dropdown-item">Booking Request</Link>
                       <Link to='/lab_view_test_bookings' class="dropdown-item">Bookings</Link>
                   </div>
               </div> */}
        <Link to='/doctor_profile' className="rjr_a ">Profile</Link>
      </div>
    </nav>
    </div>
  )
}

export default DoctorNavbar
