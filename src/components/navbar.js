import React, { useState } from 'react';

function Navbar() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
<div style={{
  background: 'linear-gradient(135deg, #FCE4EC, #E0FFFF)',padding:"0px",
}}>
    <nav className="navbar fixed-top">
      <div className="container-fluid">
      <a className="navbar-brand" Link="#"></a>
        <h1 style={{ margin: "5px",letterSpacing: '12px', margin: '2px', fontWeight: 'normal' }}>T   O   D   O</h1>
        <button className="navbar-toggler" type="button" onClick={toggleOffcanvas} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`offcanvas offcanvas-end ${isOffcanvasOpen ? 'show' : ''}`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
            <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" Link="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" Link="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" Link="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" Link="#">Action</a></li>
                  <li><a className="dropdown-item" Link="#">Another action</a></li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li><a className="dropdown-item" Link="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </div>
    </nav><br></br><br></br><br></br>
    <hr style={{marginTop:"-2px"}}></hr>
    </div>
  );
}

export default Navbar;
