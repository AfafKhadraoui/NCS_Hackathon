import React, { useState } from 'react';
import './Preferences.css'; // Import the CSS file

const Preferences: React.FC = () => {
  const [currency, setCurrency] = useState<string>('DA');
  const [mode, setMode] = useState<string>('Light Mode');
  const [sendNotifications, setSendNotifications] = useState<boolean>(true);
  const [receiveOrderNotifications, setReceiveOrderNotifications] = useState<boolean>(false);

  const handleSave = () => {
    console.log('Preferences Saved:', {
      currency,
      mode,
      sendNotifications,
      receiveOrderNotifications,
    });
    // Here you would typically send this data to a backend
    // Removed alert('Preferences saved successfully!'); as per instructions
  };

  return (
    <div className="preferences-container">
      
      
      <div className="preferences-card">
        {/* Currency and Mode Inputs */}
        <div className="input-group-row">
          <div className="input-field-wrapper">
            <label htmlFor="currency" className="input-label">
              Currency
            </label>
            <input
              type="text"
              id="currency"
              className="text-input"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              onFocus={(e) => e.currentTarget.classList.add('focused')}
              onBlur={(e) => e.currentTarget.classList.remove('focused')}
            />
          </div>
          
          <div className="input-field-wrapper">
            <label htmlFor="mode" className="input-label">
              Mode
            </label>
            <input
              type="text"
              id="mode"
              className="text-input"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              onFocus={(e) => e.currentTarget.classList.add('focused')}
              onBlur={(e) => e.currentTarget.classList.remove('focused')}
            />
          </div>
        </div>

        {/* Notification Section */}
        <div className="notification-section">
          <h3 className="notification-title">
            Notifications
          </h3>
          
          <div className="toggle-item">
            <span className="toggle-label">
              Send Notifications
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={sendNotifications}
                onChange={(e) => setSendNotifications(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          
          <div className="toggle-item">
            <span className="toggle-label">
              Receive Order Notifications
            </span>
            <label className="switch">
              <input
                type="checkbox"
                checked={receiveOrderNotifications}
                onChange={(e) => setReceiveOrderNotifications(e.target.checked)}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-button-wrapper">
          <button
            onClick={handleSave}
            className="save-button"
          >
            Save 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
