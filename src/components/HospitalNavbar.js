import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../Assets/img/logo.png";


function HospitalNavbar() {
  return (
    <div>
      {/* <div className='empty_navbar' >
        <div className='container d-flex justify-content-between'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
            </div>
            <div className='user_nav_content'>
            <Link to='/hospital_home' >Home</Link>

               <Link to='/hospital_profile' >Profile</Link>
            </div>
        </div>
      </div> */}
       <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
      <div className="rjr_nav-logo ">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <Link to='/hospital_home' className="rjr_a ">Home</Link>
        
               <Link to='/hospital_profile' className="rjr_a ">Profile</Link>

        {/* <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a> */}
      </div>
    </nav>
    </div>
  )
}

export default HospitalNavbar
