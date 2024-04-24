import React from 'react'
import Element from "../Assets/img/element.png";
import Vector from "../Assets/img/Vector.png";
import Frame2 from "../Assets/img/Frame (1).png";
import Frame1 from "../Assets/img/Frame.png";
import Frame3 from "../Assets/img/Frame (2).png";
import Frame4 from "../Assets/img/Frame (3).png";
import Frame5 from "../Assets/img/Frame (4).png";
import Frame6 from "../Assets/img/Frame (5).png";

function LandingServices() {
  return (
    <div>
      <section className="our-services rjr_container rjr_section">
    <img className="services-vector" src={Vector} alt="vector"/>
    <img className="services-pattern" src={Element} alt="pattern"/>    
    <h2 className='rjr_h2'>Our Services</h2>
    <p className="section-desc rjr_p">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
    <div className="rjr_cards-wrapper rjr_container rjr_flex">
      
      <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame1} alt="service"/></div>
        <h3>Search doctor</h3>
        <p className='rjr_p'>Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
    </div>
    <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame2} alt="service"/></div>
        <h3>Online pharmacy</h3>
        <p className='rjr_p'>Buy  your medicines with our mobile application with a simple delivery system</p>
    </div>
    <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame3} alt="service"/></div>
        <h3>Consultation</h3>
        <p className='rjr_p'>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>
    <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame4} alt="service"/></div>
        <h3>Details info</h3>
        <p className='rjr_p'>Free consultation with our trusted doctors and get the best recomendations</p>
    </div>
    <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame5} alt="service"/></div>
        <h3>Emergency care</h3>
        <p className='rjr_p'>You can get 24/7 urgent care for yourself or your children and your
            lovely family</p>
    </div>
    <div className="rjr_card-wrapper">
        <div className="rjr_card-img"><img src={Frame6} alt="service"/></div>
        <h3>Tracking</h3>
        <p className='rjr_p'>Track and save your medical history and health data</p>
    </div>
    </div>
    {/* <div className="rjr_btn-secondary rjr_btn-center">Learn more</div> */}
  </section>
    </div>
  )
}

export default LandingServices
