import React, { useEffect, useState } from "react";
import "./DoctorViewPatientDetails.css";
import { Link, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrls";

function DoctorViewPatientDetails({ url }) {
  const { aid } = useParams();
  const { uid } = useParams();

  const [data, setData] = useState({ image: { filename: "" }, dob: "" });
  const [testReports, setTestReports] = useState([{ testid: {}, date: "" }]);
  const [prescription, setPrescription] = useState([
    { doctorid: {}, date: "" },
  ]);

  useEffect(() => {
    axiosInstance
      .post(`/viewUserById/${uid}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .post(`/viewMedicalhistory/${uid}`)
      .then((res) => {
        console.log(res);

        if (res.data.labreports == 0) {
          setTestReports([]);
        } else {
          setTestReports(res.data.labreports);
        }

        if (res.data.prescriptions.length == 0) {
          setPrescription([]);
        } else {
          setPrescription(res.data.prescriptions);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("arr", prescription);

  return (
    <div>
      <div className="patient_details">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 patient_details_profile">
              <div className="patient_details_profile_box1">
                <div className="patient_details_profile_box1_img">
                  <img
                    src={`${url}/${data.image.filename}`}
                    alt="profile_picture"
                  />
                </div>
                <div className="patient_details_profile_box1_content">
                  <p className="m-0">
                    {data.firstname} {data.lastname}
                  </p>
                  <p>{data.email}</p>
                </div>
              </div>
              <div className="patient_details_profile_box2">
                <div className="col-md-12 patient_details_profile_box2_title">
                  <p>Informations</p>
                </div>

                <div className="col-md-12 patient_details_profile_box2_content">
                  <p className="m-1">DOB : </p>
                  <p className="m-1">{data.dob.slice(0, 10)}</p>
                </div>
                <div className="col-md-12 patient_details_profile_box2_content">
                  <p className="m-1">Gender :</p>
                  <p className="m-1">{data.gender}</p>
                </div>
                <div className="col-md-12 patient_details_profile_box2_content">
                  <p className="m-1">Contact :</p>
                  <p className="m-1">{data.contact}</p>
                </div>
                <div className="col-md-12 patient_details_profile_box2_content">
                  <p className="m-1">City :</p>
                  <p className="m-1">{data.city}</p>
                </div>
                <div className="col-md-12 patient_details_profile_box2_content">
                  <p className="m-1">District :</p>
                  <p className="m-1">{data.district}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12 patient_details_report">
              <div className="patient_details_report_box1">
                {testReports.length == 0 ? (
                  ""
                ) : (
                  <p className="patient_details_report_box1_title">
                    Test Reports
                  </p>
                )}
                <div className="row row1">
                  {testReports.length ? (
                    testReports.map((e) => {
                      return (
                        <div className="col-lg-3 col-md-12 col-sm-12 patient_details_report_card ">
                          <p className="patient_details_report_card_title">
                            {e.testid.name}
                          </p>
                          <p className="m-0">{e.testid.condition}</p>
                          <p className="m-0">{e.date.slice(0, 10)}</p>
                          <p>{e.testid.duration}</p>
                          <Link
                            to={`/doctor_view_patient_test_result/${e.bookingid}`}
                          >
                            <button className="btn" id="btns_bg">
                              View
                            </button>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <p className="not_found">No Test Reports Found.</p>
                  )}
                </div>
              </div>
              <div className="patient_details_report_box1">
                {prescription.length == 0 ? (
                  ""
                ) : (
                  <p className="patient_details_report_box1_title">
                    Prescriptions
                  </p>
                )}
                <div className="row row1">
                  {prescription.length ? (
                    prescription.map((e) => {
                      return (
                        <div className="col-3 patient_details_report_card ">
                          <p className="patient_details_report_card_title">
                            {e.analysisreport}
                          </p>
                          <p className="m-0">
                            {e.doctorid.name ? `Dr. ${e.doctorid.name}` : ""}
                          </p>
                          <p className="m-0">{e.department}</p>
                          <p className="m-0">{e.date.slice(0, 10)}</p>
                          <Link
                            to={`/doctor_view_patient_prescription/${e._id}`}
                          >
                            <button className="btn mt-2" id="btns_bg">
                              View
                            </button>
                          </Link>
                        </div>
                      );
                    })
                  ) : (
                    <div>
                      <p className="not_found">
                        No Previous Prescriptions Reports.
                      </p>
                    </div>
                  )}
                  <Link to={`/doctor_add_prescription/${aid}/${uid}`}>
                    <div className="col-12 patient_details_add_prescription">
                      + Add Prescription
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorViewPatientDetails;
