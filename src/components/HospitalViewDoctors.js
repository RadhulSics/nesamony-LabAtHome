import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link } from "react-router-dom";

function HospitalViewDoctors({ url }) {
  const [array, setArray] = useState([]);
  const id = localStorage.getItem("hospitalid");

  useEffect(() => {
    axiosInstance
      .post(`/viewDoctorsByHospitalId/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.msg == "No Data obtained ") {
          setArray([]);
        } else if (response.data.status == 200) {
          setArray(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleRemove = (id) => {
    axiosInstance.post(`/deleteDoctorById/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Removed')
            setArray(prevArray => prevArray.filter(item => item._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp "
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Doctors
          </h1>
          <div class="row g-4">
            {array.length ? (
              array.map((a) => {
                return (
                  <div
                    class="col-lg-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                  >
                    <div class="cat-item rounded p-4 d-flex justify-content-around hospital_view_doct_pic">
                      <div>
                        <img
                          src={`${url}/${a.image.filename}`}
                          alt="profile_picture"
                        />
                      </div>
                      <div>
                        <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                        <h3 class="mb-3" id="blue_clr">
                          Dr.{a.name}{" "}
                        </h3>
                        <h6 class="mb-3 ">{a.specialization}</h6>
                        <h6 class="mb-3 ">{a.email}</h6>
                        <h6 class="mb-3 ">{a.experience} Year Experience</h6>
                        <h6 class="mb-3 ">{a.contact}</h6>
                        <div className="d-flex" >
                        <Link class="btn btn-success py1 px3 mt-3 " to={`/hospital_edit_doctor/${a._id}`} style={{marginRight:'3px'}} >Edit</Link>
                        {/* <Link class="btn btn-danger py1 px3 mt-3 " onClick={() => handleRemove(a._id)}  >Remove</Link> */}
                        </div>
                        
                        {/* <Link class="btn btn-danger py1 px3 mt-3 " onClick={() => handleRemove(a._id)}   >Remove</Link> */}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 style={{ padding: "30px" }}>No Doctors Found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalViewDoctors;
