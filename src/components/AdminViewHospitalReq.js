import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function AdminViewHospitalReq({url}) {

    const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("adminid") == null) {
      navigate("/");
    }
  });
  const [array, setArray] = useState([]);

  useEffect(() => {
    axiosInstance
      .post(`/viewHospitalReqs`)
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
      .post(`/approveHospitalById/${id}`)
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

  return (
    <div>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp "
            data-wow-delay="0.1s"
            id="blue_clr"
          >
            Hospital Requests
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
                          {a.name}{" "}
                        </h3>
                        <h6 class="mb-3 ">{a.email}</h6>
                        <h6 class="mb-3 ">{a.contact}</h6>
                        <div className="d-flex">
                          <Link class="btn btn-success py1 px3 mt-3 " onClick={() => handleApprove(a._id)}  >Approve</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 style={{ padding: "30px" }}>No Requests Found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminViewHospitalReq
