import React, { useEffect } from "react";
import Logo from "../Assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

function AdminNavbar() {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('adminid')==null){
      navigate('/')
    }
  });

  return (
    <div>
      <nav className="rjr_container rjr_flex rjr_nav justify-content-between">
        <div className="rjr_nav-logo ">
          <a className="rjr_a" href="#">
            <img src={Logo} alt="logo" />
          </a>
        </div>
        <div className="rjr_nav-links rjr_flex">
          <Link to="/admin_dashboard" className="rjr_a ">
            Home
          </Link>
         
          <div class="nav-item dropdown">
            <Link
              href="#"
              class=" dropdown-toggle rjr_a"
              data-bs-toggle="dropdown"
            >
              View
            </Link>
            <div class="dropdown-menu rounded-0 m-0">
              <Link to="/admin_home" class="dropdown-item">
                Users
              </Link>
              <Link to="/admin_view_hospitals_req" class="dropdown-item">
                Hospital requests
              </Link>
              <Link to="/admin_view_hospitals" class="dropdown-item">
                Hospitals
              </Link>
              <Link to="/admin_view_doctors" class="dropdown-item">
                Doctors
              </Link>
              <Link to="/admin_view_tests" class="dropdown-item">
                Tests
              </Link>
            </div>
          </div>
          <Link onClick={()=>{localStorage.clear();window.location.reload(false)}} className="rjr_a ">
            Logout
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default AdminNavbar;
