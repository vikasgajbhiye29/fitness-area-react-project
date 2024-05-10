import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import '../custom-css/footer.css'

function Footer(props) {
  return (
    <div>
        <div className='footer'>
            <div className='container'>
                <div className='container row'>
                    <div className='col-md-6 col-lg-5 col-12 footer-custom-1'>
                        <div className='container'>
                            <h4><strong>Fitness</strong><span>_Area</span></h4>
                            <p className='col-6'> Live Long With Your Bold Fitness</p>
                            <div className='footer-icon' style={{marginBottom:'2rem'}}>
                                <div className='row'>
                                    <div className='col-2'><a href='https://www.instagram.com/vikasgajbhiye29/' target='blank'> <GrInstagram /> </a></div>
                                    <div className='col-2'><a href='https://www.facebook.com' target='blank'> <GrFacebookOption /></a></div>
                                    <div className='col-2'><a  href='https://www.linkedin.com/in/vikas-gajbhiye-b8b5a1246/' target='blank'><GrLinkedinOption /></a></div>
                                    <div className='col-2'><a  href='https://twitter.com/GajbhiyeVikas29' target='blank'> <GrTwitter /></a></div>
                                    <div className='col-2 footer-youtube'> <a  href='https://www.youtube.com' target='blank'> <GrYoutube /></a>  </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 col-12 footer-custom-2'>
                        <div className='container' >
                            <h4>Regarding_Us</h4>
                            <ul>
                                <li className="nav-item">
                                    <Link className="footer-link-decoration" aria-current="page" to="/">{props.home}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="footer-link-decoration" to="/about">{props.about}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="footer-link-decoration" to="/register">{props.sign_up}</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="dropdown-toggle footer-link-decoration" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                         {props.service} </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><Link className="dropdown-item" to="/">Option 1</Link></li>
                                            <li><Link className="dropdown-item" to="/">Option 2</Link></li>
                                            <li><Link className="dropdown-item" to="/">Option 3</Link></li>
                                        </ul>
                                 </li>

                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-4 col-12 footer-custom-3 '>
                        <div className='container'>
                            <h4>Contact_Info</h4>
                            <p> <strong className='footer-location'> <MdOutlineEmail /></strong> <span>{props.email}</span></p>
                            <p> <strong className='footer-location'> <CiMobile4 /> </strong><span> {props.mobile} </span></p>
                            <p> <strong className='footer-location'> <SlLocationPin /></strong>  <span>{props.address}</span></p>
                        </div>
                    </div>
                
                </div> 
            </div>
            <div className='container-fluid text-center my-3' style={{backgroundColor:'gray', color:'black'}}>
                <span>2024 All @CopyRight Reserved By "vikasgajbhiye29"</span>

            </div>
        </div>
    </div>
  )
}

export default Footer
