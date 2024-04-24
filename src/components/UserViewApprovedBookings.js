import React, { useEffect, useState } from "react";
import axiosInstance from "../BaseUrls";
import { Link } from "react-router-dom";

function UserViewApprovedBookings() {
  const [array, setArray] = useState([]);
  const id = localStorage.getItem("userid");

  useEffect(() => {
    axiosInstance
      .post(`/viewApprovedBookingsByUserId/${id}`)
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
    axiosInstance
      .post(`/deleteBookingById/${id}`)
      .then((res) => {
        console.log(res);
        if (
          res.data.status == 200 &&
          res.data.msg == "Can't be deleted as Date Over"
        ) {
          alert(res.data.msg);
          // setArray(prevArray => prevArray.filter(item => item._id !== id));
        } else if (res.data.status == 200) {
          alert(res.data.msg);
          setArray((prevArray) => prevArray.filter((item) => item._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div class="container-xxl py-5 mt-3">
        <div class="container" style={{ minHeight: "400px" }}>
        <div className="user_appointment mb-4">
            <Link
              to={"/user_pending_bookings"}
              
            >
              Pending Bookings
            </Link>
            <Link className="fw-bold"
              id="blue_clr" to={"/user_approved_bookings"}>Approved Bookings</Link>
          </div>
          <div class="row g-4">
            {array.length ? (
              array.map((a, index) => {
                return (
                  <div className="col-md-6 col-sm-12 " key={index}>
                    <div class="row gy-4">
                      <div class="col-md-12 wow fadeIn" data-wow-delay="0.1s">
                        <div
                          class=" align-items-center rounded p-5"
                          style={{ backgroundColor: "#effdf5" }}
                        >
                          <div>{/* <h3>{a.labId.name}</h3> */}</div>
                          <div>
                            <h3>{a.testid.name}</h3>
                          </div>
                          <div class="d-flex align-items-center rounded justify-content-between">
                            <p>{a.date}</p>
                            <p>{a.time}</p>
                            <p>₹{a.testid.price}</p>
                            {a.result == false ? (
                              <button
                                class="btn btn-danger"
                                onClick={() => handleRemove(a._id)}
                              >
                                Cancel
                              </button>
                            ) : (
                              <Link to={`/user_view_result/${a._id}`}>
                                <button class="btn btn-success">
                                  View Result
                                </button>
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 style={{ padding: "30px", textAlign: "center" }}>
                No Bookings
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserViewApprovedBookings;
