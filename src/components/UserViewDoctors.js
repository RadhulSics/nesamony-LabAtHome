import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link, useParams } from "react-router-dom";

function UserViewDoctors({ url }) {
  const [array, setArray] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const { id } = useParams();



  // useEffect(() => {
  //   console.log('updating');
  //   axiosInstance
  //     .post(`/viewDoctorBySpecialization`,{specialization:specialization})
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.msg == "No Data obtained ") {
  //         setArray([]);
  //       } else if (response.data.status == 200) {
  //         setArray(response.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [specialization]);


  // useEffect(() => {
  //   console.log('mounting');

  //   axiosInstance
  //     .post(`/viewDoctorsByHospitalId/${id}`)
  //     .then((response) => {
  //       console.log(response);
  //       if (response.data.msg == "No Data obtained ") {
  //         setArray([]);
  //       } else if (response.data.status == 200) {
  //         setArray(response.data.data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     }); 
  // }, [id]);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (!specialization) {
          // If specialization is empty, fetch doctors by hospital
          response = await axiosInstance.post(`/viewDoctorsByHospitalId/${id}`);
        } else {
          // If specialization is selected, fetch doctors by specialization
          response = await axiosInstance.post(`/viewDoctorBySpecialization`, { specialization });
        }

        console.log(response);

        if (response.data.msg === "No Data obtained ") {
          setArray([]);
        } else if (response.data.status === 200) {
          setArray(response.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [id, specialization]);


  const specializationOptions = [
    "Surgeon",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic Surgeon",
    "Neurologist",
    "Ophthalmologist",
    "ENT Specialist",
    "Gastroenterologist",
    "Pediatrician",
    "Urologist",
  ];

  console.log(specialization);

 

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Doctors
          </h1>

          <select
            className="form-select w-25 mb-3"
            aria-label="Default select example"
            value={specialization} 
            name="specialization"
            onChange={(event) => setSpecialization(event.target.value)}
          >
            <option value="">
             View All
            </option>
            {specializationOptions.map((specializationOption, index) => (
              <option key={index} value={specializationOption}>
                {specializationOption}
              </option>
            ))}
          </select>

          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                {array.length ? (
                  array.map((a) => {
                    return (
                      <div class="job-item cat-item p-4 mb-4">
                        <div class="row g-4">
                          <div class="col-sm-12 col-md-8 d-flex align-items-center">
                            <div class="text-start ps-4 d-flex">
                              <div className="hospital_view_doct_pic">
                                <img
                                  src={`${url}/${a.image.filename}`}
                                  alt="profile_picture"
                                />
                              </div>
                              <div className="px-4 align-items-center">
                                <h5 class="m-0">
                                  Dr. {a.name}{" "}
                                  <small>({a.qualification})</small>
                                </h5>
                                <b className="mb-3">{a.specialization}</b>

                                <br />
                                <div className="mt-2">
                                  <span class="text-truncate ">
                                    <i class="far fa-clock text-primary "></i>
                                    Time: {a.fromtime.slice(0, 5)} -{" "}
                                    {a.totime.slice(0, 5)}
                                  </span>
                                  <br />
                                  <span class="text-truncate ">
                                    <i class="far fa-clock text-primary "></i>
                                    Available Days:{" "}
                                    {a.days.map((e) => {
                                      return <span>{e.slice(0, 3) + " "}</span>;
                                    })}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                            <div class="d-flex mb-3">
                              <Link
                                class="btn"
                                id="btns_bg"
                                to={`/user_take_appointment/${a._id}`}
                              >
                                Appointment
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <h1 style={{ padding: "30px", textAlign: "center" }}>
                    No Doctors Found
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

export default UserViewDoctors;
