import React from 'react';

// Static data for Orders Over Time
export const ordersData = [
  { name: '06/05', orders: 15 },
  { name: '06/07', orders: 70 },
  { name: '06/10', orders: 50 },
  { name: '06/14', orders: 110 },
  { name: '06/20', orders: 60 },
  { name: '06/24', orders: 85 },
];

// Static data for Return Rate by Delivery Agency
export const returnRateData = [
  { agency: 'Yalidine', rate: 70, highlight: false, value: '' },
  { agency: 'Yalidine', rate: 90, highlight: false, value: '' },
  { agency: 'Yalidine', rate: 60, highlight: false, value: '' },
  { agency: 'Yalidine', rate: 40, highlight: false, value: '' },
  { agency: 'Yalidine', rate: 80, highlight: true, value: '50%' }, // Highlighted bar with specific value
  { agency: 'Yalidine', rate: 50, highlight: false, value: '' },
];

// This component is not strictly necessary if you only need to export data,
// but it's included for consistency if you prefer to have a component file.
const ChartData: React.FC = () => {
  return (
    <div>
      {/* This component itself doesn't render the data, it just holds it.
          You would import `ordersData` and `returnRateData` directly into other components. */}
    </div>
  );
};

export default ChartData;
