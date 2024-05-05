/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from './navbar';
import DisplayList from './displaytask';

function Home() {
  return (
    <div style={{
        backgroundImage: 'url("/Images/cloud1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', // Set the width to 100%
        /* You can add more CSS properties here */
      }}>
      <Navbar />
      <br />
      <DisplayList />
    </div>
  );
}

export default Home;
