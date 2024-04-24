import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import img from "../Assets/img/doc_logo.png";
import './UserViewAvailableMedByPharmacy.css'
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import axiosInstance from '../BaseUrls';


function UserViewAvailableMedByPharmacy() {

    const location = useLocation();
    const navigate=useNavigate()
  const { availableMedicines, pharmacyPrice, data } = location.state;

  console.log('med',availableMedicines);
  console.log('price',pharmacyPrice);
  console.log('user',data);

  const handleDownloadClick = () => {
    const divToDownload = document.getElementById("divToDownload");

    html2canvas(divToDownload).then((canvas) => {
      canvas.toBlob((blob) => {
        saveAs(blob, "invoice.png");
      });
    });
  };

  const confirmBill = () => {
    axiosInstance
      .post(`/confirmMedBill`,{pid:data._id,userid:data.userid._id,medications:availableMedicines,price:pharmacyPrice})
      .then((res) => {
        console.log(res);
        if (res.data.status == 200) {
          navigate(-1)
          alert('Your order will be delivered within 24 hours.')
        } else {
          alert("Data not Updated");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container mt-5 w-75">
          <div className="user_prescription_link">
            
            <button
              className="btn btn-success mx-2"
              onClick={handleDownloadClick}
            >
              Download
            </button>
            <button
              className="btn mx-2" id='btns_bg'
              onClick={confirmBill}
            >
              Confirm
            </button>
          </div>
       
      </div>
      <div class="container prescription_invoice w-75" id="divToDownload">
        <div class="brand-section">
            <div class="row">
                <div class="col-6 prescription_invoice_title">
                    <h1 class="text-white">Pharmacy</h1>
                </div>
                
            </div>
        </div>

        <div class="body-section">
            <div class="row">
                <div class="col-6">
                    {/* <h2 class="heading">Invoice No.: {data._id.slice(20,24)}</h2> */}
                    <p class="sub-heading">Date: {data.date.slice(0,10)} </p>
                </div>
                <div class="col-6">
                    <p class="sub-heading">Patient Name: {data.userid.firstname} {data.userid.lastname} </p>
                    <p class="sub-heading">E-mail: {data.userid.email} </p>
                    <p class="sub-heading">Contact: {data.userid.contact} </p>
                    {/* <p class="sub-heading">City,State,Pincode:  </p> */}
                </div>
            </div>
        </div>

        <div class="body-section">
            <h3 class="heading">Medicines</h3>
            <br/>
            <div className='invoice_table' >
              <table class="table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th class="w-20">Price</th>
                        <th class="w-20">Count</th>
                        <th class="w-20">Availability</th>
                        <th class="w-20">Grandtotal</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    availableMedicines.length?availableMedicines.map((a)=>{
                      return(
                        <tr className='text-capitalize' >
                        <td>{a.name}</td>
                        <td>{a.price}</td>
                        <td>{a.count}</td>
                        <td>{a.available}</td>
                        <td>{a.price}</td>
                    </tr>
                      )
                    }):''
                  }
                    
                    <tr>
                        <td colspan="4" class="text-right">Sub Total</td>
                        <td>₹ {pharmacyPrice}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-right">Discount</td>
                        <td>0 %</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-right">Grand Total</td>
                        <td>₹ {pharmacyPrice}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <br/>
            <h3 class="heading">Payment Mode: Cash on Delivery</h3>
        </div>

        {/* <div class="body-section">
            <p>&copy; Copyright 2021 - Fabcart. All rights reserved. 
                <a href="https://www.fundaofwebit.com/" class="float-right">www.fundaofwebit.com</a>
            </p>
        </div>       */}
    </div>  
    </div>
  )
}

export default UserViewAvailableMedByPharmacy
