import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import Navbar from './navbar';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPassword = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      console.log('User logged in successfully');
      // Redirect user to the homepage after successful login
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing in:', error);
      setError('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div style={{
      backgroundImage: 'url("/Images/cloud.jpeg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
    }}>
      <Navbar />
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <div style={{ maxWidth: '300px', margin: '0 auto', background: 'rgba(255, 255, 255, 0.5)', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ marginBottom: '20px' }}>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}
          />
          <button onClick={signInWithEmailAndPassword} style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', cursor: 'pointer' }}>Sign In</button>
          {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
          <p style={{ marginTop: '10px' }}>Do not have an account? <Link to="/signup" style={{ color: '#007bff', textDecoration: 'none' }}>Signup Here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
