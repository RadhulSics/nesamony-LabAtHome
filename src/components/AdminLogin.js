import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const navigate=useNavigate();

    useEffect(() => {
        if(localStorage.getItem('adminid')!==null){
          navigate('/admin_dashboard')
        }
      });

    const[login,setLogin]=useState({
        name:'',
        password:''
    })
    const changehandleSubmit  = (a)=> {
        setLogin({...login,[a.target.name]:a.target.value})
        
      }
      useEffect(() =>{
        console.log(login);
      })
      


      const submitt=(b)=>{
        console.log('submitted')
        b.preventDefault()
        if(login.name=='admin' && login.password=='admin123'){
           localStorage.setItem('adminid',1)        
           alert('Login successfully')         
          navigate("/admin_dashboard")
        }else{
            alert('Login failed')         

        }
      }

  return (
    <div>
      <div class="container">
        <div class="row" style={{marginTop:'5rem',marginBottom:'10rem'}}>
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title mb-5 mt-5">
                    <h1>Admin Login</h1>
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={submitt}>
                            <div class="form-group mb-3">
                                <label class="form-control-label mb-2">USER NAME</label>
                                <input 
                                type="text" class="form-control" name="name" value={login.name} onChange={changehandleSubmit}/>
                            </div>
                            <div class="form-group mb-3">
                                <label class="form-control-label mb-2">PASSWORD</label>
                                <input 
                                type="password" class="form-control"name="password" value={login.password} onChange={changehandleSubmit}
                                />
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-7 login-btm login-button mt-2">
                                   
                                 <button type="submit" class="btn " id='btns_bg'>LOGIN</button>
                                
                               
                                </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
                {/* <div class="col-lg-3 col-md-2"></div> */}
            </div>
        </div>





    </div>
    </div>
  )
}

export default AdminLogin
