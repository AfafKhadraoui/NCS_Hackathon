import React, { useState } from 'react';
import './UserProfile.css'; // Import the CSS for this component
import image from '../assets/Profile.png'; // Your original image import

const UserProfile: React.FC = () => {
  // State for user data as JSON object
  const [userData, setUserData] = useState({
    firstName: 'Benammour',
    lastName: 'Rihab Meriem',
    email: 'Benammour@gmail.com',
    password: '********', // Placeholder for password
    dateOfBirth: '25 January 1990',
    presentAddress: 'Tipaza, Tipaza, Algeria',
    permanentAddress: 'Tipaza, Tipaza, Algeria',
    city: 'Tipaza',
    postalCode: '42000',
    country: 'Algeria'
  });

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('User Profile Saved:', userData);
    // Here you would typically send this data to a backend
    // Example: await api.updateUserProfile(userData);
  };

  return (
    <div className="user-profile-container">
      <div className="profile-card">
        {/* Avatar Section */}
        <div className="avatar-section">
          <div className="avatar-wrapper">
            {/* Temporarily use a placeholder to test if CSS is working:
            <img src="https://placehold.co/120x120/FFC0CB/FFFFFF?text=👩" alt="User Avatar" className="user-avatar" />
            Then switch back to your image: */}
            <img src={image} alt="User Avatar" className="user-avatar" />
            {/* Removed edit button for now to focus on image fitting issue */}
          </div>
        </div>

        {/* Form Fields */}
        <div className="form-fields-grid">
          {/* Your Name */}
          <div className="input-group">
            <label htmlFor="firstName" className="input-label">Your Name</label>
            <input
              type="text"
              id="firstName"
              className="text-input"
              value={userData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          {/* User Name */}
          <div className="input-group">
            <label htmlFor="lastName" className="input-label">User Name</label>
            <input
              type="text"
              id="lastName"
              className="text-input"
              value={userData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
          {/* Email */}
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email</label>
            <input
              type="email"
              id="email"
              className="text-input"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input
              type="password"
              id="password"
              className="text-input"
              value={userData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
            />
          </div>
          {/* Date of Birth */}
          <div className="input-group">
            <label htmlFor="dob" className="input-label">Date of Birth</label>
            <input
              type="text" // Could be type="date" for a date picker
              id="dob"
              className="text-input"
              value={userData.dateOfBirth}
              onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
            />
          </div>
          {/* Present Address */}
          <div className="input-group">
            <label htmlFor="presentAddress" className="input-label">Present Address</label>
            <input
              type="text"
              id="presentAddress"
              className="text-input"
              value={userData.presentAddress}
              onChange={(e) => handleInputChange('presentAddress', e.target.value)}
            />
          </div>
          {/* Permanent Address */}
          <div className="input-group">
            <label htmlFor="permanentAddress" className="input-label">Permanent Address</label>
            <input
              type="text"
              id="permanentAddress"
              className="text-input"
              value={userData.permanentAddress}
              onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
            />
          </div>
          {/* City */}
          <div className="input-group">
            <label htmlFor="city" className="input-label">City</label>
            <input
              type="text"
              id="city"
              className="text-input"
              value={userData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
            />
          </div>
          {/* Postal Code */}
          <div className="input-group">
            <label htmlFor="postalCode" className="input-label">Postal Code</label>
            <input
              type="text"
              id="postalCode"
              className="text-input"
              value={userData.postalCode}
              onChange={(e) => handleInputChange('postalCode', e.target.value)}
            />
          </div>
          {/* Country */}
          <div className="input-group">
            <label htmlFor="country" className="input-label">Country</label>
            <input
              type="text"
              id="country"
              className="text-input"
              value={userData.country}
              onChange={(e) => handleInputChange('country', e.target.value)}
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="save-button-wrapper">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
