import React from 'react';
import Navbar from './navbar';
import Blogpost from './postblog';
import DisplayList from './displaytask';
function Home() {
  

  return (
    <div style={{
        backgroundImage: 'url("/Images/cloud1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat-y', // Repeat vertically
        width: '100%',
        minHeight: '100vh', // Use minHeight instead of height to ensure the background covers the entire viewport
      }}>
      <Navbar /> 
      <br />
      <DisplayList />
    </div>
  );
  
}

export default Home;
