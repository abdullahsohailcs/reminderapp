import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Profile from './components/profile';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
