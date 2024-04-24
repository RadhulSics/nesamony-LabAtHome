import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';
import { Link } from 'react-router-dom';

function UserViewTests() {

    const [array,setArray]= useState([]);


    useEffect(()=>{
        axiosInstance.post(`/viewAllTests`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                setArray(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    // useEffect(()=>{
    //     console.log(array);

    // })

  return (
    <div>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s" id='blue_clr'>Tests</h1>
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
                                            <h5 class="mb-3">{a.name}</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>Duration: {a.duration}</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{a.condition?`Condition: ${a.condition}`:''}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{a.condition?`Comments: ${a.comments}`:''}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <Link class="btn" id='btns_bg' to={`/user_book_test/${a._id}`}>Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                        )
                                    }) : <h1 style={{padding:'30px',textAlign:'center'}}>No Tests Found</h1>
                                }
                                
                            </div>
                        {/* <div id="tab-1" class="tab-pane fade show p-0 active">
                            
                                
                                            <div class="job-item cat-item p-4 mb-4">
                                            <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3">Sugar</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>Duration: 1 hrs</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Fasting</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>h hg iuh iuh hu</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <Link class="btn " id='btns_bg' >Book Now</Link>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                   
                                
                            </div> */}
                            
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserViewTests
