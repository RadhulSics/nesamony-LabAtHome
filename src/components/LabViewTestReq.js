import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link, useNavigate } from "react-router-dom";

function LabViewTestReq() {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('labid')==null){
      navigate('/')
    }
  });
  const [array, setArray] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewBookings`)
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

  const handleApprove = (id) => {
    axiosInstance
      .post(`/approveBookingById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Approved");
          setArray((prevArray) => prevArray.filter((item) => item._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    axiosInstance
      .post(`/rejectBookingById/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Removed");
          setArray((prevArray) => prevArray.filter((item) => item._id !== id));
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
            class="text-center mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Requests
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
                                  Test: {a.testid.name}
                                </span>
                                <span class="text-truncate me-3">
                                  <i class="far fa-clock text-primary me-2"></i>
                                  Amount : {a.testid.price}
                                </span>
                                <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Date : {a.date}
                                </span>
                                <span class="text-truncate me-0">
                                  <i class="far fa-money-bill-alt text-primary me-2"></i>
                                  Time : {a.time}
                                </span>
                              </div>
                            </div>
                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                              <div class="d-flex mb-3">
                                <button
                                  class="btn btn-success"
                                  onClick={() => {
                                    handleApprove(a._id);
                                  }}
                                  style={{ margin: "0 5px" }}
                                >
                                  Accept
                                </button>
                                <button
                                  class="btn btn-danger"
                                  onClick={() => {
                                    handleRemove(a._id);
                                  }}
                                >
                                  Reject
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                   
                  })
                ) : (
                  <h1 style={{ padding: "30px", textAlign: "center" }}>
                    No Requests Found
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabViewTestReq;
