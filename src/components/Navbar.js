import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
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
              <li className="nav-item">
                <Link className="nav-link" to="/login">{props.login}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">{props.register}</Link>
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
      
            <div className='conatiner'>
              {/* <!-- Button trigger for login modal --> */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Login">Login</button>
              {/* <!-- Button trigger for Registration modal --> */}
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Registration">Login</button>
            </div>
            <form className="d-flex">
              <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode {props.button}</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
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
