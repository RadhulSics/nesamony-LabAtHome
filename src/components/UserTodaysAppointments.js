import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../BaseUrls';

function UserTodaysAppointments() {

    const [appointments, setAppointments] = useState([{hospitalid:{},doctorid:{fromtime:'',totime:''}}]);
  const id = localStorage.getItem('userid');
  const today = new Date().toISOString().split('T')[0]; 

  useEffect(() => {
    axiosInstance
      .post(`/viewAppointmentByUserId/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.msg === 'No Data obtained ') {
          setAppointments([]);
        } else if (response.data.status === 200) {
          
          const todayAppointments = response.data.data.filter(
            (appointment) => appointment.date.split('T')[0] === today
          );
          setAppointments(todayAppointments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, today]);
  console.log(appointments);

  return (
    <div>
      <div className="user_appointment mb-4" >
            <Link to={'/user_view_appointment/today'} className="fw-bold" id="blue_clr" >Todays</Link>
            <Link to={'/user_view_appointment/upcoming'} >Upcoming</Link>
            <Link to={'/user_view_appointment/dateover'} >Date Over</Link>
          </div>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">

              <div id="tab-1" class="tab-pane fade show p-0 active">

            {appointments.length?appointments.map((e)=>{
                return(
                   <div class="job-item cat-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <div class="text-start ps-4">
                        <h5 class="mb-3">{e.hospitalid.name}</h5>
                        <span class="text-truncate  border-end  px-2">
                          <i class="fa fa-map-marker-alt text-primary "></i>
                          <b>Dr. {e.doctorid.name}</b>
                        </span>
                        <span class="text-truncate me-3 ">
                          <i class="far fa-clock text-primary me-2"></i>Available Time : {e.doctorid.fromtime.slice(0,5)} - {e.doctorid.totime.slice(0,5)}
                        </span>
                        {/* <span class="text-truncate me-0">
                          <i class="far fa-money-bill-alt text-primary me-2"></i>
                          h hg iuh iuh hu
                        </span> */}
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        {
                          e.drvisited==true?<Link to={`/user_view_prescription/${e._id}`} class="btn " id="btns_bg">
                          View Prescription
                        </Link>:''

                        }
                        
                      </div>
                    </div>
                  </div>
                </div> 
                )
            }):<h1 style={{padding:'30px',textAlign:'center'}}>No Bookings For Today</h1>
        }

                


              </div>
            </div>
          </div>
    </div>
  )
}

export default UserTodaysAppointments
