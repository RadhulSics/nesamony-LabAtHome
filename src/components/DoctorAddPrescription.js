import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../BaseUrls";


function DoctorAddPrescription() {
  const { id } = useParams();
  const { uid } = useParams();

  const navigate = useNavigate();
const location = useLocation();
    // const prevPage = new URLSearchParams(location.search).get('prevPage');

  const [add, setAdd] = useState({
    userid: uid,
    analysisreport: "",
    medications: [],
  });

  const [medicine, setMedicine] = useState({
    name: "",
    dosage: "",
    frequency: "",
    courseduration: "",
    comments: "",
  });

  const addValue = (e) => {
    e.preventDefault();
    setAdd((prevAdd) => ({
      ...prevAdd,
      medications: [...prevAdd.medications, medicine],
    }));
    setMedicine({
      name: "",
      dosage: "",
      frequency: "",
      courseduration: "",
      comments: "",
    });

    console.log(add);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine((prevMedicine) => ({
      ...prevMedicine,
      [name]: value,
    }));
  };

  const submitt = (e) => {
    e.preventDefault();
    console.log(add);
    axiosInstance
      .post(`/addPrescription/${id}`, add)
      .then((result) => {
        console.log("data entered", result);
        if (result.data.status == 200) {
          alert("Added Sucessfully");
          navigate('/doctor_view_appointment')
        // history.goBack();

        } else {
          alert("failed");
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("login failed");
      });
  };

  return (
    <div>
      <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title mb-5 mt-5">
              <h1>Add Prescription</h1>
            </div>

            <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                <form onSubmit={submitt}>
                  <div class="form-group mb-3 ">
                    <div className="row">
                      <div className="col-6">
                        <label>Medicine Name</label>
                        <input
                          name="name"
                          type="text"
                          className="form-control mb-2"
                          placeholder="Add values"
                          value={medicine.name}
                          onChange={handleChange}
                          required={add.medications.length === 0}
                        />
                      </div>
                      <div className="col-6">
                        <label>Dosage</label>
                        <input
                          name="dosage"
                          type="text"
                          className="form-control mb-2"
                          placeholder="Add values"
                          value={medicine.dosage}
                          onChange={handleChange}
                          required={add.medications.length === 0}
                        />
                      </div>
                      <div className="col-6">
                        <label>Frequency</label>
                        <input
                          name="frequency"
                          type="number"
                          className="form-control mb-2"
                          placeholder="Add values"
                          value={medicine.frequency}
                          onChange={handleChange}
                          required={add.medications.length === 0}
                        />
                      </div>
                      <div className="col-6">
                        <label>Course Duration</label>
                        <input
                          name="courseduration"
                          type="number"
                          className="form-control mb-2"
                          placeholder="Add values"
                          value={medicine.courseduration}
                          onChange={handleChange}
                          required={add.medications.length === 0}
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="comments"
                          type="text"
                          className="form-control mb-2"
                          placeholder="Comments"
                          value={medicine.comments}
                          onChange={handleChange}
                          required={add.medications.length === 0}
                        />
                      </div>
                    </div>

                    <div style={{ float: "right", margin: "10px 0" }}>
                      <button
                        class="btn btn-success"
                        type="button"
                        onClick={addValue}
                      >
                        Add
                      </button>
                    </div>
                  </div>

                  <div class="form-group mb-3 mt-5">
                    <label>Analysis Report</label>
                    <input
                      name="analysisreport"
                      type="text"
                      class="form-control mb-2"
                      placeholder="Add values"
                      onChange={(e) => {
                        setAdd({ ...add, analysisreport: e.target.value });
                      }}
                      required
                    />
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-12 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                        Add Result
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorAddPrescription;
