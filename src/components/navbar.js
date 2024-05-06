import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { UserAuth } from '../context/AuthContext';
import Signin from './login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const { user,userlogOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await userlogOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if(user===null){
        
    }
}, [user]);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
<div style={{
  background: 'rgba(0, 0, 0, 0)',padding:"0px",
}}>
    <nav className="navbar fixed-top">
      <div className="container-fluid">
      <Link style={{ margin: "5px",letterSpacing: '12px', margin: '2px', fontWeight: 'normal' }} className="navbar-brand" to="/"> T O D O</Link>
        
        <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h1 className="offcanvas-title" id="offcanvasNavbarLabel">T O D O</h1>
            <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" style={{ textDecoration: "none",padding:"6px",margin:"4px"}}>
              <hr></hr>
              <li className="nav-item">
                <Link to="/"  className="nav-link active" aria-current="page" >Home</Link>
              </li><hr></hr>
              <li className="nav-item">
                <Link to='/profile' className="nav-link">Profile</Link>
              </li><hr></hr>
              <li className="nav-item">
                <Link onClick={handleSignOut} style={{ textDecoration: "none" }} className="nav-link active" aria-current="page" >Logout</Link>
                
              </li><hr></hr>

            </ul>
          </div>
        </div>
      </div>
    </nav><br></br><br></br><br></br>
    
    </div>
  );
}

export default Navbar;
