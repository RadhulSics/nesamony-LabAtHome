import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../BaseUrls';

function UserUpcomingAppointments() {

    const [appointments, setAppointments] = useState([{date:'',hospitalid:{},doctorid:{fromtime:'',totime:''}}]);
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
            (appointment) => appointment.date.split('T')[0] > today
          );
          setAppointments(todayAppointments);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, today]);
  console.log(appointments);

  const handleRemove = (id) => {
    axiosInstance.post(`/cancelAppointment/${id}`)
      .then((res) => {
        console.log(res);
        if(res.data.status==200){
            alert('Removed')
            setAppointments(prevArray => prevArray.filter(item => item._id !== id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="user_appointment mb-4" >
            <Link to={'/user_view_appointment/today'} >Todays</Link>
            <Link to={'/user_view_appointment/upcoming'} className="fw-bold" id="blue_clr" >Upcoming</Link>
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
                        <span class="text-truncate  border-end  px-2">
                          <i class="fa fa-map-marker-alt text-primary "></i>
                          Date : {e.date.slice(0,10)}
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
                        <Link class="btn btn-danger" onClick={()=>{handleRemove(e._id)}} >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> 
                )
            }):<h1 style={{padding:'30px',textAlign:'center'}}>No Upcoming Bookings</h1>
        }
              </div>
            </div>
          </div>
    </div>
  )
}

export default UserUpcomingAppointments
