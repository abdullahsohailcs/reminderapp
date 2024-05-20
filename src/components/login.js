import React, { useEffect } from 'react';
import GoogleButton from 'react-google-button';
import {UserAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

    const {googleSignIn,user} = UserAuth();
    const navigate = useNavigate();
    console.log(user);

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        if(user!==null){
            navigate("/homepage");
        }
    }, [user]);

  

  return (
    <div style={{
        backgroundImage: 'url("/Images/cloud.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', // Set the width to 100%
        height: '100vh', // Set the height to 100vh
        /* You can add more CSS properties here */
      }}>
    <center><h1 style={{padding:"8px",fontSize:"50px",letterSpacing: '12px', margin: '0px', fontWeight: 'normal'}}>T O D O</h1> </center>
      <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-lg" style={{background: 'linear-gradient(135deg, rgba(252, 228, 236, 0.6), rgba(224, 255, 255, 0.6))'}}>
        <center><h1 className="text-2xl mb-4">Signup / Login</h1>
        <GoogleButton onClick={handleGoogleSignIn}/>
        </center>
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default Signin;
