import React, { useEffect, useState } from 'react'
import axiosInstance from '../BaseUrls';
import { useNavigate } from 'react-router-dom';

function AdminViewTests() {

    const navigate=useNavigate()
    useEffect(() => {
      if(localStorage.getItem('adminid')==null){
        navigate('/')
      }
    });
    const [array,setArray]= useState([]);

    useEffect(()=>{
        axiosInstance.post(`viewAllTests`)
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

    useEffect(()=>{
        console.log(array);

    })

  return (
    <div>
      <div class="container-fluid pt-4 px-4 p-5" >
                <div class="bg-light text-center rounded p-5">
                    <div class="d-flex align-items-center justify-content-between mb-5">
                        <h6 class="mb-0">Test Details</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Name</th>
                                    <th scope="col">Duration</th>
                                    <th scope="col">Condition</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Comments</th>
                                    {/* <th scope="col">Pincode</th>
                                    <th scope="col">Contact</th> */}
                                    {/* <th scope="col">Action</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array.length?array.map((a)=>{
                                        return(
                                            <tr>
                                            <td>{a.name}</td>
                                            <td>{a.duration}</td>
                                            <td>{a.condition?a.condition:'no condition'}</td>
                                            <td>{a.price}</td>

                                            <td>{a.comments?a.comments:'no comments'}</td>
                                            {/* <td>{a.pincode}</td>
                                            <td>{a.contact}</td> */}
                                            
                                            {/* <td><Link to={`/admin_testView/${a._id}`} ><button style={{marginRight:'3px'}} class="btn btn-sm btn-primary"  >View</button></Link><button class="btn btn-sm btn-danger" onClick={() => handleRemove(a._id)} >Remove</button></td> */}
                                        </tr>

                                        )
                                       

                                    }):<td>No Test found</td>
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminViewTests
