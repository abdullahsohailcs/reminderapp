import React, { useState } from 'react';
import Navbar from './navbar';

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: 'John Deer',
    email: 'john@deer.com',
    phone: '+123456789',
    address: '1008 New York, USA'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const saveChanges = () => {
    toggleEditMode();
    // Here you can send the updated user data to the server if needed
  };

  return (
    <div style={{
        backgroundImage: 'url("/Images/cloud.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%', // Set the width to 100%
        /* You can add more CSS properties here */
      }}>
      <Navbar />
      <div className="max-w-md mx-auto mt-8 p-6 rounded-md shadow-lg" style={{background: 'linear-gradient(135deg, rgba(252, 228, 236, 0.6), rgba(224, 255, 255, 0.6))'}}>
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-25 h-25 rounded-full object-cover"
            src="/Images/harvy.jpg"
            alt="User Profile "
          />
        </div>
        {editMode ? (
          <div>
            <label className="block mb-2" style="margin-right: 10px;">
                Name:
            <input
            className="w-full border p-2"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            />
            </label>

            <label className="block mb-2">
              Email:
              <input
                className="w-full border p-2"
                type="text"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </label>
            <label className="block mb-2">
              Phone:
              <input
                className="w-full border p-2"
                type="text"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
              />
            </label>
            <label className="block mb-2">
              Address:
              <input
                className="w-full border p-2"
                type="text"
                name="address"
                value={userData.address}
                onChange={handleInputChange}
              />
            </label>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={saveChanges}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-2">
              <strong>Name:</strong> {userData.username}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {userData.email}
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> {userData.phone}
            </p>
            <p className="mb-4">
              <strong>Address:</strong> {userData.address}
            </p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              onClick={toggleEditMode}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default UserProfile;
