import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrls";

function DoctorProfile({ url }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("doctorid") == null) {
      navigate("/");
    }
  });

  const [data, setData] = useState({
    image: { filename: "" },
    fromtime: "",
    totime: "",
    days:[]
  });
  const id = localStorage.getItem("doctorid");
  console.log(id);

  useEffect(() => {
    axiosInstance
      .post(`/viewDoctorById/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className=" user_profile mt-5">
        <div className="user_log_box mt-2 row ">
          <div className="col-6 user_profile_left_col">
            <img src={`${url}/${data.image.filename}`} alt="profile_picture" />
          </div>
          <div className="col-6 user_profile_right_col">
            <div className="row w-75">
              <div className="col-12 d-flex justify-content-between">
                <p>Name</p>
                <p>Dr. {data.name}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>E-mail</p>
                <p>{data.email}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Qualification</p>
                <p>{data.qualification}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Affiliation Number</p>
                <p>{data.affiliationnumber}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Specialization</p>
                <p>{data.specialization}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Experience</p>
                <p>{data.experience} Years</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Contact</p>
                <p>{data.contact}</p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Time</p>
                <p>
                  {data.fromtime.slice(0, 5)} - {data.totime.slice(0, 5)}
                </p>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <p>Working Days</p>
                <p>
                  {data.days.map((e) => {
                    return <span>{e.slice(0, 3) + " "}</span>;
                  })}
                </p>
              </div>

              <div className="col-12 d-flex justify-content-around">
                {/* <Link to='/user_edit_profile' ><button className='btn btn-success' >Edit</button></Link> */}
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    localStorage.clear();
                    window.location.reload(false);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
