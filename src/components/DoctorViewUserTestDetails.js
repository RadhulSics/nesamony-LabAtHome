import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrls";
import img from '../Assets/verified.jpg'

function DoctorViewUserTestDetails() {
  const { id } = useParams();
  const [data, setData] = useState({ userid: { dob: "" }, testid: {} });
  const [testDetails, setTestDetails] = useState([]);
  const [resultDetails, setResultDetails] = useState([]); 

  const navigate=useNavigate();

  useEffect(() => {
    axiosInstance
      .post(`/viewResultByBookingId/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        setTestDetails(response.data.data.testid.details);
        setResultDetails(response.data.data.resultdata);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let combinedArray;

  const handleApprove = (id) => {
    axiosInstance
      .post(`/reviewResultByDr/${data._id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          alert("Approved");
          navigate(-1)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container lab_view_result">
      <div className="lab_view_result_patient_title">
        <p>Patient Details</p>
      </div>
      <div className="table-responsive">
        <table className="table table-striped">
          <tbody>
            <tr>
              <th scope="col" id="btns_bg">
                Name
              </th>
              <td>
                {data.userid.firstname} {data.userid.lastname}
              </td>
              <th scope="col" id="btns_bg">
                Dob
              </th>
              <td>{data.userid.dob.slice(0, 10)}</td>
              <th scope="col" id="btns_bg">
                City
              </th>
              <td>{data.userid.city}</td>
            </tr>
            <tr>
              <th scope="col" id="btns_bg">
                E-mail
              </th>
              <td>{data.userid.email}</td>
              <th scope="col" id="btns_bg">
                Gender
              </th>
              <td>{data.userid.gender}</td>
              <th scope="col" id="btns_bg">
                District
              </th>
              <td>{data.userid.district}</td>
            </tr>
            <tr>
              <th scope="col" id="btns_bg">
                Contact
              </th>
              <td>{data.userid.contact}</td>
              <th scope="col" id="btns_bg">
                House name
              </th>
              <td>{data.userid.housename}</td>
              <th scope="col" id="btns_bg">
                Pincode
              </th>
              <td>{data.userid.pincode}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="lab_view_result_patient_title">
        <p>{data.testid.name} Details</p>
      </div>

      <div>
        <table border="1" class="table table-striped ">
          {
            (combinedArray = testDetails.map((item1, index) => {
              const item2 = resultDetails[index];
              console.log(item1);
              console.log(item2);
              return (
                <tbody>
                  <tr className="container">
                    <td className="">{item1.description}</td>
                    <td className="">
                      {item1.minrange} - {item1.maxrange}
                    </td>
                    <td
                      className={
                        item2.deviation == 1 ? "text-danger fw-bold" : ""
                      }
                    >
                      {item2.value}
                    </td>
                  </tr>
                </tbody>
              );
            }))
          }
        </table>
      </div>
      <div className="lab_view_result_variations">
        {data.drReviwed == false ? (
          <div className="text-center">
            {" "}
            <button className="btn btn-info" onClick={()=>{handleApprove()}} >Verify now</button>
          </div>
        ) : (

          <div className="verified_img">
            <img src={img}/><p>Verified by Doctor</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DoctorViewUserTestDetails;
