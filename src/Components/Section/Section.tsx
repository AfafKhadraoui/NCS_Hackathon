import React from 'react';
import './Section.css'; // Import the external CSS file
import { sampleData } from './Sampledata.tsx'; // CORRECTED: Use named import for sampleData

const Section: React.FC = () => { // Changed to React.FC for consistency
  // The sampleData is now imported correctly.

  return (
    <div className="dashboard-container">
      {/* Most Returned Product Section */}
      <div className="returned-product-section">
        <div className="returned-product-header">
          Most Returned Product
        </div>
        
        <div className="returned-product-content">
          {/* Added optional chaining for robustness, though with correct import it's less critical */}
          {sampleData?.returnedProducts.map((product) => (
            <div key={product.id} className="product-item">
              {/* Product Icon */}
              <div className="product-icon">
                {product.icon}
              </div>
              
              {/* Product Details */}
              <div className="product-details">
                <div className="product-name">
                  {product.name}
                </div>
                <div className="product-issue">
                  {product.issue}
                </div>
              </div>
              
              {/* Stats */}
              <div className="product-stats">
                <div className="stat-group">
                  <div className="returns-count">
                    {product.returns}
                  </div>
                  <div className="returns-label">
                    Number of returns
                  </div>
                </div>
                <div className="stat-group">
                  <div className="return-value">
                    {product.returnValue}%
                  </div>
                  <div className="return-value-label">
                    Return Value
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Most Active Employee Section */}
      <div className="active-employee-section">
        <div className="active-employee-header">
          <h3 className="active-employee-title">
            Most Active Employee
          </h3>
          <div className="table-header">
            <div className="header-number"></div>
            <div className="header-name">Name</div>
            <div className="header-orders">Orders</div>
            <div className="header-return">Return</div>
          </div>
        </div>
        
        {/* Employee List */}
        <div className="employee-list">
          {/* Added optional chaining for robustness */}
          {sampleData?.activeEmployees.map((employee) => (
            <div key={employee.id} className="employee-item">
              {/* Employee Number */}
              <div className="employee-number">
                {employee.id}
              </div>
              
              {/* Employee Name */}
              <div className="employee-name">
                {employee.name}
              </div>
              
              {/* Orders Count */}
              <div className="employee-orders">
                {employee.orders}
              </div>
              
              {/* Return Percentage */}
              <div className={`employee-return ${employee.returnPercentage > 0 ? 'positive' : 'negative'}`}>
                {employee.returnPercentage > 0 ? '+' : ''}{employee.returnPercentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section;