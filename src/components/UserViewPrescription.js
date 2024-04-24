import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrls";
import "./UserViewPrescription.css";
import img from "../Assets/img/doc_logo.png";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function UserViewPrescription() {
  const { id } = useParams();
  const navigate=useNavigate();
  const [data, setData] = useState({ doctorid: {}, userid: {}, date: "" });
  const [medications, setMedications] = useState([]);
  const [hospital, setDoctor] = useState({});
  const [availableMedicines, setAvailableMedicines] = useState([]);
  const [pharmacyPrice, setPharmacyPrice] = useState(0);

  useEffect(() => {
    axiosInstance
      .post(`/viewPrescriptionByAppointId/${id}`)
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

  console.log(hospital);

  // const sendPrescription = () => {
  //   axiosInstance
  //     .post(`/sharePrescriptionTionToPharmacy/${data._id}`)
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.status == 200) {
  //         setAvailableMedicines(res.data.medicationAvailability)
  //         setPharmacyPrice(res.data.price)
  //         navigate('/user_view_available_med_by_pharmacy')
  //         alert("Shared to Pharmacy");
  //       } else {
  //         alert("Data not Updated");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const sendPrescription = () => {
    axiosInstance
      .post(`/sharePrescriptionTionToPharmacy/${data._id}`)
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          setAvailableMedicines(res.data.medicationAvailability)
          setPharmacyPrice(res.data.price)
          navigate('/user_view_available_med_by_pharmacy', { state: { availableMedicines: res.data.medicationAvailability, pharmacyPrice: res.data.price,data:data } });
        } else {
          alert("Data not Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

  const handleDownloadClick = () => {
    const divToDownload = document.getElementById("divToDownload");

    html2canvas(divToDownload).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "Prescription.png");
      });
    });
  };

  return (
    <div>
      <div className="container mt-5">
        {data.pharmacyNeeded == false ? (
          <div className="user_prescription_link">
            <button
              className="btn"
              id="btns_bg"
              onClick={() => {
                sendPrescription();
              }}
            >
              Send to Pharmacy
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>
        ) : (
          <div className="user_prescription_link">
            <Link to={`/user_view_invoice/${data._id}`} >
              <button className="btn" id="btns_bg">
                View Invoice
              </button>
            </Link>
            <button
              className="btn btn-success mx-2"
              onClick={handleDownloadClick}
            >
              Download
            </button>
          </div>
        )}
      </div>
      <div className="user_prescription" id="divToDownload">
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
              <div className="user_prescription_body_footer">
                <p className="user_prescription_head_right_title">
                  {hospital.name}
                </p>
                <p className="mx-2">
                  <small>Ph : {hospital.contact}</small>
                </p>
                <p className="mx-2">
                  <small>
                    {hospital.city}, {hospital.district}, {hospital.pincode}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserViewPrescription;
