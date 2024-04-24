import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../BaseUrls';
import abimg from '../Assets/img/gallery-05.jpg'
import abimg1 from '../Assets/img/gallery-08.jpg'
import abimg2 from '../Assets/img/img-3.jpg'
import abimg3 from '../Assets/img/gallery-05.jpg'

function LabEditTest() {

  const navigate=useNavigate()
  useEffect(() => {
    if(localStorage.getItem('labid')==null){
      navigate('/')
    }
  });

    const [values,setValue] = useState({});
  
  
    const id=useParams();
  
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewTestById/${id.id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editTestById/${id.id}`,values)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Test Updated')
          navigate('/lab_view_tests')
        }else{
          alert('Test Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...values, [e.target.name]:e.target.value})
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
                    <h1 class="mb-4">Add test</h1>

                    <form onSubmit={updatefcn} >
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Test Name"
                        value={values.name}
                        onChange={changefn}

                      />
                      
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="condition"
                        id="condition"
                        type="text"
                        class="form-control"
                        placeholder="Condition"
                        value={values.condition}
                        onChange={changefn}

                      />
                      
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="duration"
                        id="duration"
                        type="text"
                        class="form-control"
                        placeholder="Duration"
                        value={values.duration}
                        onChange={changefn}

                      />
                      
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="price"
                        id="price"
                        type="number"
                        class="form-control"
                        placeholder="Price"
                        value={values.price}
                        onChange={changefn}

                      />
                     
                    </div>
                    <div class="col-12 form-group mb-2">
                    <textarea name="comments" id="comments"
                        type="text"
                        value={values.comments}
                        onChange={changefn}

                         class="form-control" placeholder='Comments' rows="3"/>
                     
                    </div>
                    
                    
                   
                    
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                        Update
                      </button>
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

export default LabEditTest
