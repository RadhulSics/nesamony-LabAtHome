import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../Assets/img/logo.png";


function LabNavbar() {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('labid')==null){
      navigate('/')
    }
  });

  return (
    <div>
      
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
      <div className="rjr_nav-logo ">
        <a className="rjr_a" href="#"><img src={Logo} alt="logo"/></a>
      </div>
      <div className="rjr_nav-links rjr_flex">
        <Link to='/lab_home' className="rjr_a ">Home</Link>
        <div class="nav-item dropdown">
                   <Link href="#" class=" dropdown-toggle rjr_a" data-bs-toggle="dropdown">Test</Link>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/lab_add_test' class="dropdown-item">Add Test</Link>
                       <Link to='/lab_view_tests' class="dropdown-item">View Test</Link>
                   </div>
               </div>
       
               <Link onClick={()=>{localStorage.clear();window.location.reload(false)}} className="rjr_a ">Logout</Link>

        {/* <a className="rjr_a" href="#">About</a>
        <a className="rjr_a" href="#">Contact Us</a>
        <a className="rjr_a" href="#">Sign Up</a>
        <a className="rjr_a" href="#">Sign In</a> */}
      </div>
    </nav>
    </div>
  )
}

export default LabNavbar
