
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'


export default function Navbar(props) {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  
  const navigator = useNavigate();
  const saveUser = (e) => {
      e.preventDefault();
          navigator('/');
          
  
  
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   {props.help}
                  </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/">Option 1</Link></li>
                  <li><Link className="dropdown-item" to="/">Option 2</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/">Option 3</Link></li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  {/* <!-- Button trigger for login modal --> */}
                  <button style={{marginLeft:'40rem'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Login">Sign In</button>
              </li>
              <li className="nav-item">
              {/* <!-- Button trigger for Registration modal --> */}
              <button style={{marginLeft:'1rem'}} type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#Registration">Sign Up</button>
              </li>
            </ul>
            <form className="d-flex">
              <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode {props.button}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* <!-- LogIn Modal --> */}
      <div class="modal fade" id="Login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">LogIn</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Add Login placeHolder 
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

       {/* <!-- Registration Modal --> */}
       <div class="modal fade" id="Registration" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Registration</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div className="card-body">
                        <form>
                            <div className="from-group mb-2">
                              <label className="form-label">First Name :</label>
                              <input className="form-control"
                                  type="text"
                                  placeholder="Enter First Name"
                                  name="fname"
                                  value={fname} 
                                  onChange={(e) => setFname(e.target.value)} ></input>
                            </div>
                            <div className="from-group mb-2">
                              <label className="form-label">Last Name :</label>
                              <input className="form-control"
                                type="text"
                                placeholder="Enter Last Name"
                                name="lname"
                                value={lname} 
                                onChange={(e) => setLname(e.target.value)} ></input>
                            </div>
                            <div className="from-group mb-2">
                              <label className="form-label">Username :</label>
                              <input className="form-control"
                                type="text"
                                placeholder="Enter Username Name"
                                name="username"
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} ></input>
                            </div>
                            <div className="from-group mb-2">
                              <label className="form-label">Email :</label>
                              <input className="form-control"
                                type="email"
                                placeholder="Enter Your Email"
                                name="email"
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} ></input>
                            </div>
                            <div className="from-group mb-2">
                              <label className="form-label">Password :</label>
                              <input className="form-control"
                                type="password"
                                placeholder="Enter Your Password"
                                name="password"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} ></input>
                            </div>
                            <div className="container d-grid gap-2 col-3 mx-auto">
                            <button className="btn btn-success" type="submit" onClick={saveUser}>Submit</button>
                            </div>
                        </form>
                      </div>
            </div>
          </div>
        </div>
      </div>




    </div>



  );
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  register: PropTypes.string.isRequired,
  help: PropTypes.string.isRequired,

}

// How To Set Default Props For Field
// Navbar.defaultProps={
//   title: "setTitleText",
//   home: "setHomeText",
//   about: "setAboutText",
//   login: "setLoginText",
//   register: "setRegisterText",
//   help: "setRequiredText"

// }
