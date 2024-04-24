import React from 'react'
import illustration from "../Assets/img/trafalgar-illustration sec02 1.png";


function LandingProvider() {
  return (
    <div>
       <section className="rjr_section healthcare-providers rjr_container rjr_flex">
    <div className="rjr_hero-img">
      <img src={illustration} alt="photo"/>
    </div>
    <div className="healthcare-providers-cap">
    <h2 className='rjr_h2'>Leading healthcare providers</h2>
    <p className='rjr_p'>
        Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
        in the solutions we deliver
      </p>
      {/* <div className="rjr_btn-secondary">Learn more</div> */}
    </div>
  </section>
    </div>
  )
}

export default LandingProvider
