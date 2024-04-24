import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../BaseUrls";
import { useFormik } from "formik";
import { DocRegSchema } from "./Schema";

function HospitalAddDoctor() {
  const navigate = useNavigate();
  const id = localStorage.getItem("hospitalid");
  const [selectedDays, setSelectedDays] = useState([]);

  const onSubmit = (e) => {
    axiosInstance
      .post(`/addDoctor/${id}`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.status === 200) {
          alert("Registration Success");
          // navigate("/Doctorlogin");
          window.location.reload();
        } else if (response.data.status === 409) {
          alert(response.data.msg);
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Registration Failed");
      });
  };

  const specializationOptions = [
    "Surgeon",
    "Cardiologist",
    "Dermatologist",
    "Orthopedic Surgeon",
    "Neurologist",
    "Ophthalmologist",
    "ENT Specialist",
    "Gastroenterologist",
    "Pediatrician",
    "Urologist",
  ];

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      name: "",
      city: "",
      specialization: "",
      email: "",
      password: "",
      experience: "",
      contact: "",
      district: "",
      pincode: "",
      qualification: "",
      affiliationnumber: "",
      availabledays: [],
      image: null,
      fromtime: "",
      totime: "",
    },
    validationSchema: DocRegSchema,
    onSubmit,
  });

  const handleImageChange = (event) => {
    setFieldValue("image", event.currentTarget.files[0]);
  };

  const handleCheckboxChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedDays = checked
        ? [...values.availabledays, value]
        : values.availabledays.filter((day) => day !== value);

      setFieldValue("availabledays", updatedDays);
    } else {
      setFieldValue(name, value);
    }
  };

  console.log(values);

  return (
    <div>
      <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title ">
              <h1>Add Doctor</h1>
            </div>

            <div class="col-lg-12 login-form ">
              <div class="col-lg-12 login-form">
                <form className="mt-3" onSubmit={(e) => handleSubmit(e)}>
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      {/* <label class="form-control-label">USER EMAIL</label> */}
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value={values.name}
                        placeholder="Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <span className="err">{errors.name}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="e-mail"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <span className="err">{errors.email}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      {/* <input
                        name="specialization"
                        type="text"
                        class="form-control"
                        placeholder="Specialization"
                        value={values.specialization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      /> */}
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={values.specialization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="specialization"
                      >
                        <option value="" disabled>
                          Select Specialization
                        </option>
                        {specializationOptions.map((specialization, index) => (
                          <option key={index} value={specialization}>
                            {specialization}
                          </option>
                        ))}
                      </select>
                      {errors.specialization && touched.specialization && (
                        <span className="err">{errors.specialization}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        type="number"
                        class="form-control"
                        placeholder="Experience"
                        value={values.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.experience && touched.experience && (
                        <span className="err">{errors.experience}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="city"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.city && touched.city && (
                        <span className="err">{errors.city}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
                        type="number"
                        class="form-control"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.contact && touched.contact && (
                        <span className="err">{errors.contact}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="district"
                        type="text"
                        class="form-control"
                        placeholder="District"
                        value={values.district}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.district && touched.district && (
                        <span className="err">{errors.district}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="qualification"
                        type="text"
                        class="form-control"
                        placeholder="Qualification"
                        value={values.qualification}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.qualification && touched.qualification && (
                        <span className="err">{errors.qualification}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="affiliationnumber"
                        type="number"
                        class="form-control"
                        placeholder="Affiliation Number"
                        value={values.affiliationnumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.affiliationnumber &&
                        touched.affiliationnumber && (
                          <span className="err">
                            {errors.affiliationnumber}
                          </span>
                        )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="image"
                        type="file"
                        class="form-control"
                        onChange={handleImageChange}
                        onBlur={handleBlur}
                      />
                      {errors.image && touched.image && (
                        <span className="err">{errors.image}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="pincode"
                        type="number"
                        class="form-control"
                        placeholder="Pincode"
                        value={values.pincode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.pincode && touched.pincode && (
                        <span className="err">{errors.pincode}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <span className="err">{errors.password}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <div class="">Available Days</div>
                    </div>

                    <div class="col-6 form-group mb-2">
                      <div className="row">
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Sunday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Sunday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Sunday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Monday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Monday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Monday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Tuesday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Tuesday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Tuesday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Wednesday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Wednesday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Wednesday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Thursday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Thursday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Thursday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Friday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Friday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Friday
                          </label>
                        </div>
                        <div class="form-check col-4">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value="Saturday"
                            id="flexCheckDefault"
                            checked={values.availabledays.includes("Saturday")}
                            onChange={handleCheckboxChange}
                          />
                          <label
                            class="form-check-label"
                            for="flexCheckDefault"
                          >
                            Saturday
                          </label>
                        </div>
                        {errors.availabledays && touched.availabledays && (
                          <span className="err">{errors.availabledays}</span>
                        )}
                      </div>
                    </div>

                    <div class="col-6 form-group mb-2 mt-2">
                      <div class="">Available Time</div>
                    </div>
                    <div class="col-6 form-group mb-2 mt-2">
                      <div className="row">
                        <div className="col-6">From</div>
                        <div class="form-check col-6">
                          <input
                            type="time"
                            name="fromtime" // Replace with your desired field name
                            value={values.fromtime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="fromtime" // Replace with your desired field ID
                            step="1" // Step attribute to ensure time is in 1-second increments
                          />
                          {errors.fromtime && touched.fromtime && (
                            <span className="err">{errors.fromtime}</span>
                          )}
                        </div>
                        <div className="col-6 mt-3">To</div>
                        <div class="form-check col-6 mt-3">
                          <input
                            type="time"
                            name="totime" // Replace with your desired field name
                            value={values.totime}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="totime" // Replace with your desired field ID
                            step="1" // Step attribute to ensure time is in 1-second increments
                          />
                          {errors.totime && touched.totime && (
                            <span className="err">{errors.totime}</span>
                          )}
                        </div>
                      </div>

                      <div className="d-flex justify-content-between"></div>
                    </div>
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn " id="btns_bg">
                        Add
                      </button>
                      <div class="reg__link"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="col-lg-3 col-md-2"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalAddDoctor;
