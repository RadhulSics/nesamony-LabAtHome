import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MedicineAddSchema } from "./Schema";
import axiosInstance from "../BaseUrls";
import { useFormik } from "formik";

function PharmacyAddMedicine() {
  useEffect(() => {
    if (localStorage.getItem("pharmacyid") == null) {
      navigate("/");
    }
  });

  const navigate = useNavigate();

  const onSubmit = (e) => {
    axiosInstance
      .post(`/addMedicine`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);

        if (response.data.status === 200) {
          alert("Added");
          // navigate("/Doctorlogin");
          window.location.reload();
        } else if (response.data.status == 409) {
          alert(response.data.msg);
        } else {
          alert("Failed");
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Registration Failed");
      });

    console.log(values);
  };

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
      manufacturer: "",
      description: "",
      price: "",
      expiryDate: "",
      dosage: "",
      comments: "",
      image: null,
      count: "",
      type: "",
    },
    validationSchema: MedicineAddSchema,
    onSubmit,
  });

  const handleImageChange = (event) => {
    setFieldValue("image", event.currentTarget.files[0]);
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
            <div class="col-lg-12 login-title ">
              <h1>Add Medicne</h1>
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
                        name="manufacturer"
                        type="text"
                        class="form-control"
                        placeholder="Manufacturer"
                        value={values.manufacturer}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.manufacturer && touched.manufacturer && (
                        <span className="err">{errors.manufacturer}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="description"
                        type="text"
                        class="form-control"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.description && touched.description && (
                        <span className="err">{errors.description}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="price"
                        type="number"
                        class="form-control"
                        placeholder="Price"
                        value={values.price}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.price && touched.price && (
                        <span className="err">{errors.price}</span>
                      )}
                    </div>
                    <div class="col-2 form-group mb-2">Expiry</div>

                    <div class="col-4 form-group mb-2">
                      <input
                        name="expiryDate"
                        type="date"
                        class="form-control"
                        placeholder="Contact"
                        value={values.expiryDate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.expiryDate && touched.expiryDate && (
                        <span className="err">{errors.expiryDate}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="dosage"
                        type="number"
                        class="form-control"
                        placeholder="Dosage"
                        value={values.dosage}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.dosage && touched.dosage && (
                        <span className="err">{errors.dosage}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="count"
                        type="number"
                        class="form-control"
                        placeholder="Count"
                        value={values.count}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.count && touched.count && (
                        <span className="err">{errors.count}</span>
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
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name="type"
                      >
                        <option disabled selected>Type</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Syrup">Syrup</option>
                      </select>
                      {errors.type && touched.type && (
                        <span className="err">{errors.type}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <div class="form-floating">
                        <textarea
                          class="form-control"
                          placeholder="Leave a comment here"
                          id="floatingTextarea2"
                          value={values.comments}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="comments"
                        ></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
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

export default PharmacyAddMedicine;
