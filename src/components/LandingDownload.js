import React from 'react'
import illustration from "../Assets/img/trafalgar-illustration sec03 1.png";


function LandingDownload() {
  return (
    <div>
       <section className="rjr_section download-our-app rjr_container rjr_flex">
    <div className="download-our-app-cap">
      <h2 className='rjr_h2'>Download our 
        mobile apps</h2>
        <p className='rjr_p'>
        Our dedicated patient engagement app and 
        web portal allow you to access information instantaneously (no tedeous form, long calls, 
        or administrative hassle) and securely
      </p>
      {/* <div className="rjr_btn-secondary">Download<span><i className="fa-solid fa-arrow-down-long"></i></span></div> */}
    </div>
    <div className="rjr_hero-img">
      <img src={illustration} className="img-fluid" alt="photo" />
    </div>

  </section>
    </div>
  )
}

export default LandingDownload
