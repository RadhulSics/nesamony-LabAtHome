import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import img from "../Assets/img/doc_logo.png";


function DoctorViewPatientPrescription() {

  const { id } = useParams();
  const [data, setData] = useState({ doctorid: {}, userid: {}, date: "" });
  const [medications, setMedications] = useState([]);
  const [hospital, setDoctor] = useState({});

  useEffect(() => {
    axiosInstance
      .post(`/viewPrescriptionById/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.status === 200) {
          setData(response.data.data);
          setMedications(response.data.data.medications);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axiosInstance
      .post(`/viewDoctorById/${data.doctorid._id}`)
      .then((response) => {
        // console.log(response);
        if (response.data.status === 200) {
          setDoctor(response.data.data.hospitalid);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [data]);
  
  return (
    <div>
       <div className="user_prescription">
        <div className="container">
          <div className="user_prescription_head">
            <div className="user_prescription_head_left">
              <img src={img} alt="doc_icon" />
              <div>
                <h4>{hospital.name}</h4>
                <p className="mx-2">
                  <small>{hospital.contact}</small>
                </p>
              </div>
            </div>
            <div className="user_prescription_head_right ">
              <p className="user_prescription_head_right_title m-0">
                Dr. {data.doctorid.name}
              </p>
              <p className="m-0">
                <small>{data.doctorid.specialization}</small>
              </p>
              <p>
                <small>{data.doctorid.contact}</small>
              </p>
            </div>
          </div>
          <hr className="m-0" />
          <div className="user_prescription_body">
            <div className="user_prescription_body_head">
              <div>
                <small>Name : </small>
                <span className="user_prescription_body_title">
                  {data.userid.firstname} {data.userid.lastname}
                </span>
              </div>
              <div>
                <small>Date : </small>
                <span className="user_prescription_body_title">
                  {data.date.slice(0, 10)}
                </span>
              </div>
            </div>
            <div className="user_prescription_body_content">
              <table>
                <tr>
                  <th>Medicine Name</th>
                  <th>Dosage</th>
                  <th>Frequency</th>
                  <th>Course Duration</th>
                  <th>Comments</th>
                </tr>
                {medications.map((a) => {
                  return (
                    <tr>
                      <td>{a.name}</td>
                      <td>{a.dosage}</td>
                      <td>{a.frequency}</td>
                      <td>{a.courseduration}</td>
                      <td>{a.comments}</td>
                    </tr>
                  );
                })}
              </table>
              <hr className="m-0" />
              <div className="user_prescription_body_footer" >
                <p className="user_prescription_head_right_title" >{hospital.name}</p>
                <p className="mx-2">
                  <small>Ph : {hospital.contact}</small>
                </p>
                <p className="mx-2">
                  <small>{hospital.city}, {hospital.district}, {hospital.pincode}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorViewPatientPrescription
