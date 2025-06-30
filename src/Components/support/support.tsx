import React from 'react';
import './support.css';
import { FaTruck, FaBrain, FaChartLine } from 'react-icons/fa';

const support = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-left">
          <h2 className="support-title">How we support our users all over Algeria</h2>
          <p className="support-description">
            We support e-sellers across Algeria with tools to manage orders, track deliveries, 
            reduce returns, and automate messaging — no matter where they’re located. From 
            Algiers to Tamanrasset, our platform helps you run your shop smarter.
          </p>
        </div>

        <div className="support-right">
          <div className="support-feature">
            <div className="support-icon yellow"><FaTruck /></div>
            <div>
              <h3>Smart Order & Delivery Management</h3>
              <p>Easily track orders, assign delivery agencies, and manage employee roles — all in one place.</p>
            </div>
          </div>

          <div className="support-feature">
            <div className="support-icon grey"><FaBrain /></div>
            <div>
              <h3>AI-Powered Retour Prediction</h3>
              <p>Reduce return rates by identifying high-risk orders before they ship using built-in machine learning.</p>
            </div>
          </div>

          <div className="support-feature">
            <div className="support-icon peach"><FaChartLine /></div>
            <div>
              <h3>Real-Time Analytics & Messaging Tools</h3>
              <p>Monitor performance across regions and auto-confirm orders via email, WhatsApp, or SMS.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default support;
