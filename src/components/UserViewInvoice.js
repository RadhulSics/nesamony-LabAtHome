import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';
import { useParams } from 'react-router-dom';
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function UserViewInvoice() {

    const {id}=useParams();
    const [data,setData]=useState({date:'',userid:{},_id:'',medications:[]})

    useEffect(() => {
        axiosInstance
          .post(`/viewmedBillbyPid/${id}`)
          .then((response) => {
            console.log(response);
            if (response.data.status === 200) {
             setData(response.data.data)
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

      const handleDownloadClick = () => {
        const divToDownload = document.getElementById("divToDownload");
    
        html2canvas(divToDownload).then((canvas) => {
          canvas.toBlob((blob) => {
            saveAs(blob, "invoice.png");
          });
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
                    data.medications.length?data.medications.map((a)=>{
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
                        <td>₹ {data.price}</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-right">Discount</td>
                        <td>0 %</td>
                    </tr>
                    <tr>
                        <td colspan="4" class="text-right">Grand Total</td>
                        <td>₹ {data.price}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            
            <br/>
            <h3 class="heading">Payment Mode: Cash on Delivery</h3>
        </div>

        
    </div>  
    </div>
  )
}

export default UserViewInvoice
