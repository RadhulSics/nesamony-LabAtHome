import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link, useNavigate } from "react-router-dom";

function PharmacyViewMedicines({ url }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("pharmacyid") == null) {
      navigate("/");
    }
  });

  const [array, setArray] = useState([]);
  // const navigate=useNavigate();

  useEffect(() => {
    axiosInstance
      .post("/viewmedicines")
      .then((response) => {
        console.log(response);
        if (response.data.msg == "No Data obtained ") {
          setArray([]);
        } else {
          setArray(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(array);
  });

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-5">Medicines</h1>
          </div>
          <div class="row g-4">
            {array.length?array.map((a) => {
              return (
                <div
                  class="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div class="room-item shadow rounded overflow-hidden">
                    <div class="position-relative" style={{ margin: "auto" }}>
                      <img
                        class="img-fluid"
                        src={`${url}/${a.image.filename}`}
                        style={{
                          margin: "auto",
                          height: "200px",
                          width: "410px",
                          objectFit: "contain",
                        }}
                        alt=""
                      />
                    </div>

                    <div
                      class="p-3  scrolls"
                      style={{
                        height: "200px",
                        overflowY: "scroll",
                        overflowX: "hidden",
                      }}
                    >
                      <div class=" mb-3">
                        <h5 class="mb-0">{a.name}</h5>
                        <small class=" me-3 pe-3 ">
                          <i class="ri-mail-line"></i> {a.manufacturer}
                        </small>
                        <br />
                        <div class="d-flex mb-1">
                          <small class="border-end me-3 pe-3 ">
                            <i class="ri-mail-line"></i>₹ {a.price}
                          </small>
                          <small class=" me-3 pe-3 ">
                            <i class="ri-mail-line"></i>{" "}
                            {a.count > 0 ? (
                              <span class="text-success">{a.count} left</span>
                            ) : (
                              <span class="text-danger">Out of stock</span>
                            )}
                          </small>
                        </div>
                      </div>
                      <div class="d-flex mb-1">
                        <small class="border-end me-3 pe-3">
                          <i class="ri-mail-line"></i> {a.dosage}
                        </small>
                        <small class="border-end me-3 pe-3">
                          <i class="ri-phone-line"></i>Expiry :{" "}
                          {a.expiryDate.slice(0, 10)}
                        </small>
                      </div>

                      <p class="text-body mb-3 mt-3">{a.description}</p>

                      {/* <h6
                        class="section-title text-center  text-uppercase"
                        style={{ color: "#FEA116" }}
                      >
                        Reviews
                      </h6>
                     
                      <h6
                        class="section-title text-center  text-uppercase"
                        style={{ color: "#FEA116" }}
                      >
                        Ratings
                      </h6> */}

                      {/* <div class="col-lg-12 login-btm login-button mt-2">
                        <button type="submit" class="btn" id="btns_bg">
                          Edit
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            }):<h1 style={{padding:'30px',textAlign:'center'}}>No Medicines Added</h1>
          }
          </div>
        </div>
      </div>
    </div>
  );
}

export default PharmacyViewMedicines;
