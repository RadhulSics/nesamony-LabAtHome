import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header";
import { useState } from "react";
import MyFile from "./components/myFile";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserRegistration from "./components/UserRegistration";
import EmptyNavbar from "./components/EmptyNavbar";
import UserLogin from "./components/UserLogin";
import UserForgotPassword from "./components/UserForgotPassword";
import LandingNavbar from "./components/LandingNavbar";
import UserNavbar from "./components/UserNavbar";
import UserProfile from "./components/UserProfile";
import HospitalRegistration from "./components/HospitalRegistration";
import HospitalLogin from "./components/HospitalLogin";
import HospitalNavbar from "./components/HospitalNavbar";
import HospitalProfile from "./components/HospitalProfile";
import HospitalForgotPassword from "./components/HospitalForgotPassword";
import UserEditProfile from "./components/UserEditProfile";
import HospitalEditProfile from "./components/HospitalEditProfile";
import LabLogin from "./components/LabLogin";
import LabNavbar from "./components/LabNavbar";
import LabAddTest from "./components/LabAddTest";
import LabViewTests from "./components/LabViewTests";
import LabEditTest from "./components/LabEditTest";

import Footer from "./components/Footer";

import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import AdminNavbar from "./components/AdminNavbar";
import AdminViewDoctors from "./components/AdminViewDoctors";
import AdminViewTests from "./components/AdminViewTests";
import UserHome from "./components/UserHome";
import HospitalHome from "./components/HospitalHome";
import Labhome from "./components/Labhome";

import PharmacyLogin from "./components/PharmacyLogin";
import PharmacyNavbar from "./components/PharmacyNavbar";
import PharmacyHome from "./components/PharmacyHome";
import PharmacyAddMedicine from "./components/PharmacyAddMedicine";
import PharmacyViewMedicines from "./components/PharmacyViewMwdicines";
import DoctorLogin from "./components/DoctorLogin";
import DoctorNavbar from "./components/DoctorNavbar";
import DoctorHome from "./components/DoctorHome";
import DoctorProfile from "./components/DoctorProfile";

import AdminViewHospitals from "./components/AdminViewHospitals";
import AdminDashboard from "./components/AdminDashboard";
import AdminViewHospitalReq from "./components/AdminViewHospitalReq";


function App() {

  //image_url_local
  const url='http://localhost:4005' 

  //image_url_server
  // const url='http://hybrid.srishticampus.in:4005/'

  return (
    <BrowserRouter basename="emedicals" >
    <div>
      <Routes>
        <Route path="/" element={[<LandingNavbar/>,<MyFile/>]} />
        <Route path="/user_registration" element={[<UserRegistration />]} />
        <Route path="/user_login" element={[<UserLogin />]} />
        <Route path="/user_forgot_password" element={[<UserForgotPassword />]} />
        <Route path="/user_home" element={[<UserNavbar/>,<UserHome />]} />
        <Route path="/user_profile" element={[<UserNavbar/>,<UserProfile url={url} />]} />
        <Route path="/user_edit_profile" element={[<UserNavbar/>,<UserEditProfile />]} />
        


        <Route path="/hospital_registration" element={[<HospitalRegistration />]} />
        <Route path="/hospital_login" element={[<HospitalLogin />]} />
        <Route path="/hospital_home" element={[<HospitalNavbar/>,<HospitalHome />]} />
        <Route path="/hospital_profile" element={[<HospitalNavbar/>,<HospitalProfile url={url} />]} />
        <Route path="/hospital_edit_profile" element={[<HospitalNavbar/>,<HospitalEditProfile />]} />
        <Route path="/hospital_forgot_password" element={[<HospitalForgotPassword />]} />
        


        <Route path="/lab_login" element={[<LabLogin />]} />
        <Route path="/lab_home" element={[<LabNavbar/>,<Labhome />]} />
        <Route path="/lab_add_test" element={[<LabNavbar/>,<LabAddTest />]} />
        <Route path="/lab_view_tests" element={[<LabNavbar/>,<LabViewTests />]} />
        <Route path="/lab_edit_test/:id" element={[<LabNavbar/>,<LabEditTest />]} />
        


        <Route path="/admin" element={[<AdminLogin />]} />
        <Route path="/admin_dashboard" element={[<AdminNavbar/>,<AdminDashboard />]} />
        <Route path="/admin_home" element={[<AdminNavbar/>,<AdminHome url={url} />]} />            
        <Route path="/admin_view_doctors" element={[<AdminNavbar/>,<AdminViewDoctors url={url} />]} />
        <Route path="/admin_view_tests" element={[<AdminNavbar/>,<AdminViewTests  />]} />
        <Route path="/admin_view_hospitals" element={[<AdminNavbar/>,<AdminViewHospitals url={url} />]} />
        <Route path="/admin_view_hospitals_req" element={[<AdminNavbar/>,<AdminViewHospitalReq url={url} />]} />


        <Route path="/pharmacy_login" element={[<PharmacyLogin />]} />
        <Route path="/pharmacy_home" element={[<PharmacyNavbar/>,<PharmacyHome />]} />
        <Route path="/pharmacy_add_medicine" element={[<PharmacyNavbar/>,<PharmacyAddMedicine />]} />
        <Route path="/pharmacy_view_medicine" element={[<PharmacyNavbar/>,<PharmacyViewMedicines url={url} />]} />
        


        <Route path="/doctor_login" element={[<DoctorLogin />]} />
        <Route path="/doctor_home" element={[<DoctorNavbar />,<DoctorHome/>]} />
        <Route path="/doctor_profile" element={[<DoctorNavbar/>,<DoctorProfile url={url} />]} />
       

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
