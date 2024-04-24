import React from 'react'
import img1 from "../Assets/trafalgar-header illustration 1(1).png";
import img2 from "../Assets/Frame(1).png";
import img3 from "../Assets/Frame(2).png";
import img4 from "../Assets/Frame(3).png";
import img5 from "../Assets/Frame(4).png";
import img6 from "../Assets/Frame(6).png";
import img7 from "../Assets/Frame.png";
import img8 from "../Assets/trafalgar-illustration sec02 1.png";
import img9 from "../Assets/trafalgar-illustration sec03 1.png";
import { Link } from "react-router-dom";
import Logo from "../Assets/img/logo.png";


function LandingNavbar() {

  
  return (
    <div>
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
      <div className="rjr_nav-logo ">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <Link to='/' className="rjr_a rjr_active">Home</Link>
        <div class="nav-item dropdown">
                   <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/user_login' class="dropdown-item">User</Link>
                       <Link to='/hospital_login' class="dropdown-item">Hospital</Link>
                       <Link to='/lab_login' class="dropdown-item">Lab</Link>
                       <Link to='/pharmacy_login' class="dropdown-item">Pharmacy</Link>
                       <Link to='/doctor_login' class="dropdown-item">Doctor</Link>
                   </div>
               </div>
        {/* <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a> */}
      </div>
    </nav>
    </div>
  )
}

export default LandingNavbar
