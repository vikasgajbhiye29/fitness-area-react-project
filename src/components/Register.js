import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'


export default function Register() {

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
    <div className="container mt-2">
    <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">User Registration</h2>
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

  )
}
