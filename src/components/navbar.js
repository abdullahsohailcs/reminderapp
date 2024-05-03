import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="menu-icon">
      <i class="gg-menu-left-alt"></i>
      </div>
      <div className="logo">
      <h1 style={{ padding: 0,letterSpacing: '12px', margin: '2px', fontWeight: 'normal' }}>L   O   G   O</h1>

      </div>
      <div className="search-icon">
      <i class="gg-search" style={{top:'-3px'}}></i>
      <img width="25px" height="25px" src="https://img.icons8.com/cotton/64/gender-neutral-user--v2.png" alt="gender-neutral-user--v2"/>
        <img src="/Images/cart.png" title="market icons" height='25px' width="25px"></img>
      </div>
    </div>
  );
}

export default Navbar;
