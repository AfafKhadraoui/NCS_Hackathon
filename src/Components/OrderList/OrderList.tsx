import React from "react";
import { orders } from "./orders.tsx"; // CORRECTED: Use named import for 'orders'
import "./OrderList.css"; // Import the CSS for this component

const LastOrders: React.FC = () => {
  // Static data for the list of last orders is now imported.

  return (
    <div className="last-orders-container">
      <h3 className="last-orders-title">List of last orders</h3>
      <div className="orders-list">
        {orders?.map((order) => ( // Optional chaining is good practice here
          <div key={order.id} className="order-item">
            <div className="customer-info">
              <img
                src={order.customerImage}
                alt={order.customerName}
                className="customer-image"
              />
              <span className="customer-name">{order.customerName}</span>
            </div>
            <span className="order-product">{order.product}</span>
            <span className="order-date">{order.date}</span>
            <span className="order-delivery-agency">
              {order.deliveryAgency}
            </span>
            <span className="order-payment-status status-paid">
              {order.paymentStatus}
            </span>{" "}
            {/* Add status class */}
            <a href="#" className="order-contact-method contact-whatsapp">
              {order.contactMethod}
            </a>{" "}
            {/* Add contact class */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastOrders;
