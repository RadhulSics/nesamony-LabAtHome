import React, { useEffect } from "react";
import Element from "../Assets/img/element.png";
import illustration from "../Assets/img/doctor.jpg";
import illustration2 from "../Assets/img/trafalgar-header illustration 1.png";
import Vector from "../Assets/img/Vector.png";
import Frame2 from "../Assets/img/Frame (1).png";
import Frame1 from "../Assets/img/Frame.png";
import Frame3 from "../Assets/img/Frame (2).png";
import Frame4 from "../Assets/img/Frame (3).png";
import Frame5 from "../Assets/img/Frame (4).png";
import Frame6 from "../Assets/img/Frame (5).png";
import { useNavigate } from "react-router-dom";

function DoctorHome() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("doctorid") == null) {
      navigate("/");
    }
  });

  return (
    <div>
      <div>
        <section className="rjr_hero rjr_container rjr_flex rjr_section">
          <img src={Element} className="rjr_circle-pattern" alt="pattern" />
          <div className="rjr_hero-cap">
            <h1 className="rjr_h1">Expert Care Starts Here.</h1>
            <p className="rjr_p">
              Welcome to our platform connecting you with dedicated healthcare
              professionals. Our experienced doctors offer personalized medical
              services, guiding you through your health journey. With a
              commitment to your well-being, explore a range of services
              tailored to meet your specific needs. Trust us for expert care and
              support.
            </p>
            {/* <button className="rjr_button rjr_btn-primary">Consult today</button> */}
          </div>
          <div className="rjr_hero-img mt-5">
            <img
              src={illustration}
              alt="rjr_hero-photo"
              width={600}
              height={600}
              className="img-fluid"
            />
          </div>
        </section>
      </div>
      <div>
        <section className="our-services rjr_container rjr_section">
          <img className="services-vector" src={Vector} alt="vector" />
          <img className="services-pattern" src={Element} alt="pattern" />
          <h2 className="rjr_h2">Our Services</h2>
          <p className="section-desc rjr_p">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
          <div className="rjr_cards-wrapper rjr_container rjr_flex">
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame1} alt="service" />
              </div>
              <h3>Search doctor</h3>
              <p className="rjr_p">
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </p>
            </div>
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame2} alt="service" />
              </div>
              <h3>Online pharmacy</h3>
              <p className="rjr_p">
                Buy your medicines with our mobile application with a simple
                delivery system
              </p>
            </div>
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame3} alt="service" />
              </div>
              <h3>Consultation</h3>
              <p className="rjr_p">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame4} alt="service" />
              </div>
              <h3>Details info</h3>
              <p className="rjr_p">
                Free consultation with our trusted doctors and get the best
                recomendations
              </p>
            </div>
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame5} alt="service" />
              </div>
              <h3>Emergency care</h3>
              <p className="rjr_p">
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </p>
            </div>
            <div className="rjr_card-wrapper">
              <div className="rjr_card-img">
                <img src={Frame6} alt="service" />
              </div>
              <h3>Tracking</h3>
              <p className="rjr_p">
                Track and save your medical history and health data
              </p>
            </div>
          </div>
          {/* <div className="rjr_btn-secondary rjr_btn-center">Learn more</div> */}
        </section>
      </div>
      <div>
        <section className="rjr_section healthcare-providers rjr_container rjr_flex">
          <div className="rjr_hero-img">
            <img src={illustration2} alt="photo" />
          </div>
          <div className="healthcare-providers-cap">
            <h2 className="rjr_h2">Leading healthcare providers</h2>
            <p className="rjr_p">
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </p>
            {/* <div className="rjr_btn-secondary">Learn more</div> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default DoctorHome;
