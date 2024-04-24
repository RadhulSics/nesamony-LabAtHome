import React from 'react'
import './EmptyNavbar.css'
import Logo from "../Assets/img/logo.png";


function EmptyNavbar() {
  return (
    <div  >
      {/* <div className='empty_navbar' >
        <div className='container'>
            <div className='empty_navbar_logo' >
                <p className='empty_navbar_logo_title1' >EMED<span className='empty_navbar_logo_title2' >icals</span></p>
            </div>
        </div>
      </div> */}
      <nav className="rjr_container rjr_flex rjr_nav">
      <div className="rjr_nav-logo">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <a href="#" className="rjr_a rjr_active">Home</a>
        <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a>
      </div>
    </nav>
    </div>
  )
}

export default EmptyNavbar
