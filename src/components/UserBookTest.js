import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import abimg from '../Assets/img/gallery-05.jpg'
import abimg1 from '../Assets/img/gallery-08.jpg'
import abimg2 from '../Assets/img/img-3.jpg'
import abimg3 from '../Assets/img/gallery-05.jpg'



function UserBookTest() {

    const id=useParams();
    const uid=localStorage.getItem('userid')
    console.log(id);
    const [labid,setlid]=useState('')
    const [price,setprice]=useState({})
    const [cardNumber, setCardNumber] = useState("");

    const [values,setValues]=useState({

        userid:uid,
        testid:id.id,
        comments:'',
        time:'',
        date:'',
    })

    useEffect(()=>{
        axiosInstance
        .post(`/viewTestById/${id.id}`)
        .then((response) => {
          console.log(response);
            setValues({...values,labId:response.data.data.labId})
            setprice(response.data.data)
          
        })
        .catch((err) => {
          console.log("error", err);
          alert("Failed");
        });
    },[])
  

    const changefn=(a)=>{
        setValues({...values,[a.target.name]:a.target.value})
    }
  
    useEffect(()=>{
        console.log(values);
    })

  return (
    <div>
      <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 " >
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="row g-0 about-bg rounded overflow-hidden">
                            <div class="col-6 text-start">
                                <img class="img-fluid w-100" src={abimg}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid" src={abimg1} style={{width: "85%",marginTop: "15%"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid" src={abimg2} style={{width:" 85%;"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid w-100" src={abimg3}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{marginTop:'10rem'}}>
                    <h1 class="mb-4">Book Now</h1>

                    <form  >
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                    <label class="form-control-label mb-2">Date</label>

                      <input
                        name="date"
                        id="date"
                        type="date"
                        class="form-control"
                        value={values.date}
                        onChange={changefn}
                        min={new Date().toISOString().split('T')[0]}
                        max={new Date(new Date().setDate(new Date().getDate() + 9)).toISOString().split('T')[0]}
                        required
                      />
                      
                    </div>

                    <div class="col-6 form-group mb-2">
                    <label class="form-control-label mb-2">Time</label>

                      <input
                        name="time"
                        id="time"
                        type="time"
                        class="form-control"
                        value={values.time}
                        onChange={changefn}
                        required
                      />
                      
                    </div>
                    
                    <div class="col-12 form-group mb-2">
                    <textarea name="comments" id="comments"
                        type="text"
                        value={values.comments} onChange={changefn}

                         class="form-control" placeholder='Comments' rows="3"/>
                    </div>
                    
                   
                   
                    
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      {
                        (values.date=='' ||  values.time=='')?'':<Link to={`/user_payment/${id.id}/${JSON.stringify({values})}/${JSON.stringify({price})}`} ><button type="submit" class="btn btn-success">
                        Book
                      </button></Link>
                      }
                      
                      <div class="reg__link"></div>
                    </div>
                  </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserBookTest
