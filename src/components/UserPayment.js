import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import { BookingSchema } from './Schema';
import { useFormik } from 'formik';

function UserPayment() {

    const { id } = useParams();
  const { value } = useParams();
  const { price } = useParams();

  const navigate=useNavigate();

  const valueDetails = JSON.parse(value);
  console.log(valueDetails.values);
  const priceDetails = JSON.parse(price);
  console.log(priceDetails.price.price);

  const onSubmit = (e) => {
    // console.log(values);
    e.preventDefault()
  axiosInstance
    .post("/addBooking", valueDetails.values)
    .then((response) => {
        if(response.data.status==500){
            alert(response.data.msg)
        }else if(response.data.status==200){
            alert('Booking Succesfull')
            navigate('/user_pending_bookings')
        }
      
    })
    .catch((err) => {
      console.log("error", err);
      alert("Failed");
    });
    
};

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        cardHolderName: "",
        cardNo: "",
        cvv: "",
        month: "",
        year: "",
      },
      validationSchema: BookingSchema,
      onSubmit,
    });


  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 ">
           
            <div
              class="col-lg-12 wow fadeIn"
              data-wow-delay="0.5s"
              style={{ marginTop: "10rem" }}
            >
              <h1 class="mb-4">Total Amount - <span id='blue_clr' >₹{priceDetails.price.price}</span></h1>

              <form onSubmit={onSubmit}>
                  <div class="row g-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          value={values.cardHolderName}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cardHolderName"
                          placeholder="Your Name"
                        />
                       
                        <label for="name">Card Holder Name</label>
                        {errors.cardHolderName && touched.cardHolderName && (
                      <span className="err">{errors.cardHolderName}</span>
                    )}
                      </div>
                      
                    </div>
                    

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          value={values.cardNo}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cardNo"
                          placeholder="Your Name"
                        />

                        <label for="cardNo">Card Number</label>
                      </div>
                      {errors.cardNo && touched.cardNo && (
                        <span className="err">{errors.cardNo}</span>
                      )}
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="number"
                          class="form-control"
                          value={values.cvv}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          id="cvv"
                          placeholder="Your Name"
                        />

                        <label for="email">CVV</label>
                      </div>
                      {errors.cvv && touched.cvv && (
                        <span className="err">{errors.cvv}</span>
                      )}
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        {/* <input type="number" class="form-control"  id="contact" placeholder="Expiry"/> */}
                        <div class="form-group">
                          <div class="row">
                            <div class="col-4">
                              <label for="email">Expiry</label>
                            </div>
                            <div class="col-4">
                              <label for="email">Month</label>
                              <select
                                class="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="month"
                                id="month"
                              >
                                <option>Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                              </select>
                            </div>
                            <div class="col-4">
                              <label for="email">Year</label>
                              <select
                                class="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                name="year"
                                id="year"
                              >
                                <option>Year</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                                <option value="2031">2031</option>
                                <option value="2032">2032</option>
                                <option value="2033">2033</option>
                                <option value="2034">2034</option>
                                <option value="2035">2035</option>
                                <option value="2036">2036</option>
                                <option value="2037">2037</option>
                                <option value="2038">2038</option>
                                <option value="2039">2039</option>
                                <option value="2040">2040</option>
                                <option value="2041">2041</option>
                                <option value="2042">2042</option>
                                <option value="2043">2043</option>
                                <option value="2044">2044</option>
                                <option value="2045">2045</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                   

                    <div class="col-12">
                      <button
                        class="btn "
                        
                        type="submit"
                        id='btns_bg'
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPayment
