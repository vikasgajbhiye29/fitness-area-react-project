import React from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import profile from './images/profile.png'
import user from './images/user.png'
import employee from './images/employee.png'
import product from './images/product.png'
import category from './images/categories.png'
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdOutlineAutoDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FcApproval } from "react-icons/fc";









function AdminDashboard() {
  return (
    <div className='container my-2 '>
        <div className='row'>
            {/* column first for Admin Menu */}
            <div className='col-sm-2'>
                <div className='container row align-items-center' style={{borderRadius:"10px", height:"80px",backgroundColor:"lightslategray"}}>
                   <div className='col-sm'>
                   <a style={{textDecoration:"none", width:"50px", height:"50px",color:"white"}} data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample">
                    <BsFillMenuButtonWideFill /> Admin Menu
                    </a>  
                   </div>
                </div>
                <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title " id="offcanvasExampleLabel"> Admin Profile </h5>
                        <h4 data-bs-dismiss="offcanvas" aria-label="Close"><IoCloseCircleSharp /></h4>
            
                    </div>
                    <div className="offcanvas-body">
                        <div className="container my-3">
                            <div className="row my-2">
                                <div className="col align-self-center" >
                                   <div className='container'>
                                        <div className='container text-center'  ><img style={{width:"100px",height:"100px", border:"2px solid green", borderRadius:"50%"}} src={profile} alt='network error'/></div>
                                        <hr></hr>
                                        <p><strong>Name : </strong>Vikas Gajbhiye</p>
                                        <p><strong>Email : </strong> gajbhiye.vikas29@gmail.com</p>
                                        <p><strong>Gender</strong> Male</p>
                                        <p><strong>Mobile : </strong> 770908992</p>
                                        <p> <strong>Address :</strong>Gautam Nagar Amravati</p>
                                        <p><strong>PIN : </strong>444606</p>
                                        <hr></hr>
                                      
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* column secound for Admin Panel */}
            <div className='col' style={{backgroundColor:"whitesmoke", borderRadius:"20px"}}>
                <div className='row my-3'><h3 style={{fontFamily:"", marginLeft:"20px", borderRadius:"10px", padding:"2px"}}>Admin Dashboard <FaArrowRight /></h3></div>
                    { /* 1 */}
                <div className='row'>
                    <div className='col-sm-3'>
                        <div className='row align-items-center' style={{borderLeft:"10px solid green", borderRadius:"10px", height:"80px",backgroundColor:"white", marginLeft:"4px" }}>
                            <div className='col-sm'>
                                
                                <a href="/" style={{textDecoration:"none", width:"50px", height:"50px",color:"black"}} >
                                    <img style={{width:"50px",height:"50px", margin:"20px"}} src={user} alt='Network Error'/>
                                    <strong>User's (10)</strong>
                                </a>  
                            </div>
                        </div>
                    </div>
                
                    {/* 2 */}

                    <div className='col-sm-3'>
                        <div className='row align-items-center' style={{borderLeft:"10px solid green",borderRadius:"10px", height:"80px",backgroundColor:"white",marginLeft:"4px"}}>
                            <div className='col-sm'>
                                
                                <a href="/" style={{textDecoration:"none", width:"50px", height:"50px",color:"black"}} >
                                    <img style={{width:"50px",height:"50px", margin:"20px"}} src={employee} alt='Network Error'/>
                                    <strong>Employee's (10)</strong>
                                </a>  
                            </div>
                        </div>
                    </div>
               
                    {/* 3 */}
                
                    <div className='col-sm-3'>
                        <div className='row align-items-center' style={{borderLeft:"10px solid green",borderRadius:"10px", height:"80px",backgroundColor:"white", marginLeft:"4px"}}>
                            <div className='col-sm'>
                                
                                <a href="/" style={{textDecoration:"none", width:"50px", height:"50px",color:"black"}} >
                                    <img style={{width:"50px",height:"50px", margin:"20px"}} src={product} alt='Network Error'/>
                                    <strong>Product's (10)</strong>
                                </a>  
                            </div>
                        </div>
                    </div>
            
                    {/* 4 */}
                
                    <div className='col-sm-3'>
                        <div className='row align-items-center' style={{borderLeft:"10px solid green",borderRadius:"10px", height:"80px",backgroundColor:"white", marginLeft:"4px"}}>
                            <div className='col-sm'>
                                
                                <a href="/" style={{textDecoration:"none", width:"50px", height:"50px",color:"black"}} >
                                    <img style={{width:"50px",height:"50px", margin:"20px"}} src={category} alt='Network Error'/>
                                    <strong>Category's(10)</strong>
                                </a>  
                            </div>
                        </div>
                    </div>
               
                </div>
                {/* Active users */}
                <div className='row my-3' style={{}}>
                    <div className='container text-center col'>
                    <h5 className='my-2' style={{padding:"10px",borderRadius:'10px', fontFamily:"cursive", color:"black" , backgroundColor:"darkgrey"}}> <FaArrowLeft /> List Of Active User <FaArrowRight /> </h5>
                        <div className='container' >
                            <div className='row'>
                            <table style={{border:'2px solid black',fontFamily:"cursive"}} class="table table-secondary table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Expiry_Date</th>
                                        <th scope="col">Edit/Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                     <tr>
                                        <th scope="row">1</th>
                                        <td>Vikas Gajbhiye</td>
                                        <td><button className='btn btn-primary' style={{borderRadius:"50px"}}>Active <FcApproval /></button></td>
                                        <td>20/10/2024</td>
                                        <td><button className='btn btn-success'  data-bs-toggle="tooltip" data-bs-placement="right" title="Edit"><CiEdit /></button>
                                        <button style={{marginLeft:"2px"}} className='btn btn-danger'  data-bs-toggle="tooltip" data-bs-placement="right" title="Delete"><MdOutlineAutoDelete /></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Sahil Meshram</td>
                                        <td><button className='btn btn-primary' style={{borderRadius:"50px"}}>Active <FcApproval /></button></td>
                                        <td>20/10/2024</td>
                                        <td><button className='btn btn-success'  data-bs-toggle="tooltip" data-bs-placement="right" title="Edit"><CiEdit /></button>
                                        <button style={{marginLeft:"2px"}} className='btn btn-danger'  data-bs-toggle="tooltip" data-bs-placement="right" title="Delete"><MdOutlineAutoDelete /></button>
                                        </td>
                                     </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Shubham Jadhav</td>
                                        <td><button className='btn btn-primary' style={{borderRadius:"50px"}}>Active <FcApproval /></button></td>
                                        <td>20/10/2024</td>
                                        <td><button className='btn btn-success'  data-bs-toggle="tooltip" data-bs-placement="right" title="Edit"><CiEdit /></button>
                                        <button style={{marginLeft:"2px"}} className='btn btn-danger'  data-bs-toggle="tooltip" data-bs-placement="right" title="Delete"><MdOutlineAutoDelete /></button>
                                        </td>
                                    </tr>
    
                                </tbody>
                            </table>
                                
                            </div>
                            
                        </div>
                       
                    
                    </div>
                    {/* add another activity */}
                   


                </div>

            </div>

        </div>
     
    </div>
  )
}

export default AdminDashboard
