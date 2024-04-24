import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';
import { Link } from 'react-router-dom';

function DoctorViewPriscriptions() {

    const [array,setArray]= useState([{userid:{},date:''}]);
    const id=localStorage.getItem('doctorid')

    useEffect(()=>{
        axiosInstance.post(`/viewPrescriptionByDrId/${id}`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                const reversedArray = response.data.data.reverse();
        setArray(reversedArray);

            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

  return (
    <div>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" id='blue_clr'>Prescriptions</h1>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            
                                {
                                    array.length?array.map((a)=>{
                                        return(
                                            <div class="job-item cat-item p-4 mb-4">
                                            <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">{a.userid.firstname} {a.userid.lastname}</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>{a.analysisreport}</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{a.date.slice(0,10)}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <Link class="btn" id='btns_bg' to={`/doctor_view_patient_prescription/${a._id}`}>View Details</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                        )
                                    }) : <h1 style={{padding:'30px',textAlign:'center'}}>No Prescriptions Added</h1>
                                }
                                
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorViewPriscriptions
