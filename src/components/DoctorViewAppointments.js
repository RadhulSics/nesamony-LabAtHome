import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link } from "react-router-dom";

function DoctorViewAppointments() {
  const [array, setArray] = useState([]);
  const id = localStorage.getItem("doctorid");

//   useEffect(() => {
//     axiosInstance
//       .post(`/viewTodaysAppointmentForDr/${id}`)
//       .then((response) => {
//         console.log(response);
//         if (response.data.msg == "No appointments for today") {
//           setArray([]);
//         } else if (response.data.status == 200) {
//           setArray(response.data.data);
//         }
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

useEffect(() => {
    axiosInstance
      .post(`/viewTodaysAppointmentForDr/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.msg === "No appointments for today") {
          setArray([]);
        } else if (response.data.status === 200) {
          // Filter appointments where drvisited is false
          const filteredAppointments = response.data.data.filter(
            (appointment) => !appointment.drvisited
          );

          setArray(filteredAppointments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Todays Appointments
          </h1>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                {array.length ? (
                  array.map((a) => {
                      return (
                        <div class="job-item cat-item p-4 mb-4">
                          <div class="row g-4">
                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                              <div class="text-start ps-4">
                                <h5 class="mb-3">
                                  {a.userid.firstname} {a.userid.lastname}
                                </h5>
                                <span class="text-truncate me-3">
                                  <i class="fa fa-map-marker-alt text-primary "></i>
                                  {a.userid.email}
                                </span>
                                <span class="text-truncate me-3">
                                  <i class="far fa-clock text-primary me-2"></i>
                                  {a.userid.contact}
                                </span>
                                {/* <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>hhh</span> */}
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div class="d-flex mb-3">
                                <Link
                                  class="btn"
                                  id="btns_bg"
                                  to={`/doctor_view_patient_details/${a._id}/${a.userid._id}`}
                                >
                                  View Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                
                  })
                ) : (
                  <h1 style={{ padding: "30px", textAlign: "center" }}>
                    No Appointments for Today
                  </h1>
                )}
              </div>
              {/* <div id="tab-1" class="tab-pane fade show p-0 active">
                            
                                
                                            <div class="job-item cat-item p-4 mb-4">
                                            <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">Sugar</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>Duration: 1 hrs</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Fasting</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>h hg iuh iuh hu</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <Link class="btn " id='btns_bg' >Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                   
                                
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorViewAppointments;
