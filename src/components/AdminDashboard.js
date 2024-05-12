import React from 'react'
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import profile from './images/profile.png'
import { IoCloseCircleSharp } from "react-icons/io5";





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
            <div className='col'>
                <div className='row text-center my-3'><h3 style={{color:"black", backgroundColor:"gray",border:"2px solid gray", borderRadius:"10px", padding:"2px"}}>Admin Dashboard</h3></div>
            </div>

        </div>
     
    </div>
  )
}

export default AdminDashboard
