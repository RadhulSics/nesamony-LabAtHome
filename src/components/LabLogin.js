import React, { useEffect, useState } from 'react'
import EmptyNavbar from './EmptyNavbar'
import { useNavigate } from 'react-router-dom';
import LandingNavbar from './LandingNavbar';

function LabLogin() {

    const navigate=useNavigate();

    useEffect(() => {
      if(localStorage.getItem('labid')!==null){
        navigate('/lab_home')
      }
    });

    const[loginData,setLogin]=useState({
        email:'',
        password:''
    })
    const handleChange  = (a)=> {
        setLogin({...loginData,[a.target.name]:a.target.value})
        
      }
     
      


      const handleLogin=(b)=>{
        console.log('submitted')
        b.preventDefault()
        if(loginData.email=='lab' && loginData.password=='lab123'){
           localStorage.setItem('labid',1)        
           alert('Login successfully')         
          navigate("/lab_home")
        }else{
            alert('Login failed')         

        }
      }

      console.log(loginData);

  return (
    <div>
      <div className="user_log">
        <LandingNavbar />
        <div className="user_log_box">
          <p className="user_log_box_title mb-5">Lab Login</p>
          <form onSubmit={handleLogin} >
            <div className="user_log_inp_box mt-3">
            <input 
              type="text"
              className="mb-3"
              placeholder="Username"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required

            />
            <input
              type="password"
              className="mb-3"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required

            />
            {/* <p><Link to='/user_forgot_password' >Forgot Password</Link></p> */}
            <div className="user_log_btn">
              <button type="submit" >Login</button>
            </div>
          </div>
          </form>
          
          {/* <div className="user_log_signup mt-4">
            <p>
              Don't have an account? <Link to="/user_registration">Sign up</Link>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default LabLogin
