import React from 'react';
import './Dash.css'; // Import the CSS for this component

const Dash: React.FC = () => {
  return (
    <div className="summary-cards-container">
      {/* Card 1: Total Revenue Collected */}
      <div className="summary-card">
        <div className="icon-circle green-light">
          {/* SVG for money bag icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M12 20v-6M12 10V4M18 6H6M21 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
          </svg>
        </div>
        <div className="card-details">
          <span className="card-label">Total Revenue Collected</span>
          <span className="card-value">2,530,000 DZD</span>
        </div>
      </div>

      {/* Card 2: Total Orders */}
      <div className="summary-card">
        <div className="icon-circle blue-light">
          {/* SVG for shopping bag icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
        <div className="card-details">
          <span className="card-label">Total Orders</span>
          <span className="card-value">1,250</span>
        </div>
      </div>

      {/* Card 3: Predicted High-Risk Orders */}
      <div className="summary-card">
        <div className="icon-circle pink-light">
          {/* SVG for repeat/exchange icon */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
            <polyline points="17 1 21 5 17 9"></polyline>
            <path d="M21 5H3a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"></path>
          </svg>
        </div>
        <div className="card-details">
          <span className="card-label">Predicted High-Risk Orders</span>
          <span className="card-value">76 Orders</span>
        </div>
      </div>
    </div>
  );
};

export default Dash;
