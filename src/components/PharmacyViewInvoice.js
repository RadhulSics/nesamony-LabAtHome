import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';

function PharmacyViewInvoice() {

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

  return (
    <div>
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

export default PharmacyViewInvoice
