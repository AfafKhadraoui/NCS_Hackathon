import React from 'react';
import image from '../assets/orders.png'; // Assuming this path is correct for your image asset

// Static data for the list of last orders - now in its own file
export const orders = [
  {
    id: 1,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
  {
    id: 2,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
  {
    id: 3,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
  {
    id: 4,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
  {
    id: 5,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
  {
    id: 6,
    customerImage: image,
    customerName: 'Benammour Rihab Meriem',
    product: 'Smartwatch DZ+',
    date: 'June 28',
    deliveryAgency: 'Yalidine',
    paymentStatus: 'Paid',
    contactMethod: 'WhatsApp'
  },
];

// This component is not strictly necessary if you only need to export data,
// but it's included for consistency if you prefer to have a component file.
const OrderData: React.FC = () => {
  return (
    <div>
      {/* This component itself doesn't render the data, it just holds it.
          You would import `orders` directly into other components. */}
    </div>
  );
};

export default OrderData;
