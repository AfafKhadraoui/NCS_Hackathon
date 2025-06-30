import React from 'react';
import './BenefitsSection.css';
import benefit from '../assets/benefit.png';

const BenefitsSection = () => {
  return (
    <div className="benefits-container">
      <div className="benefits-content">
        <div className="benefits-left">
          <h1 className="benefits-title">
            What Benefit Will You Get
          </h1>
          
          <div className="benefits-list">
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>✓</span>
              </div>
              <span className="benefit-text">Predict Return Risks</span>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>✓</span>
              </div>
              <span className="benefit-text">Optimize Deliveries</span>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>✓</span>
              </div>
              <span className="benefit-text">Manage Your Team</span>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>✓</span>
              </div>
              <span className="benefit-text">Automate Order Confirmations</span>
            </div>
            
            <div className="benefit-item">
              <div className="benefit-icon">
                <span>✓</span>
              </div>
              <span className="benefit-text">Track Sales & Performance</span>
            </div>
          </div>
        </div>
        
        <div className="benefits-right">
          <div className="workspace-photo">
            <img 
              src={benefit}
              alt="Workspace with laptop"
              className="workspace-img"
            />
          </div>
          
          <div className="user-card">
            <div className="user-avatar">
              <div className="avatar-image"></div>
            </div>
            <div className="user-info">
              <h3 className="user-name">Khadraoui Afaf</h3>
              <p className="user-role">Expert Saving Money</p>
            </div>
            <div className="user-badge">
              <span>D</span>
            </div>
          </div>
          
          <div className="income-card">
            <span className="income-label">Total Income</span>
            <span className="income-amount">2450.00DA</span>
            <div className="income-trend">📈</div>
          </div>
          
          {/* <div className="chat-bubble">
            <div className="chat-icon">💬</div>
          </div> */}
          
          <div className="success-notification">
            <div className="success-icon">✓</div>
            <span className="success-text">Money Transfer Successful</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;