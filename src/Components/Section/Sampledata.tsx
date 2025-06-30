import React from 'react';

// Sample data to demonstrate the design - now in its own file
export const sampleData = { // Export the constant
  returnedProducts: [
    {
      id: 1,
      name: "Wireless Earbuds - Gen 2",
      issue: "Quality Problems",
      returns: 40,
      returnValue: -4,
      icon: "🎧"
    },
    {
      id: 2,
      name: "Smart Watch Pro",
      issue: "Battery Issues",
      returns: 25,
      returnValue: -7,
      icon: "⌚"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      issue: "Connection Problems",
      returns: 14,
      returnValue: -2,
      icon: "🔊"
    }
  ],
  activeEmployees: [
    {
      id: "01.",
      name: "Nesrine B",
      orders: 75,
      returnPercentage: 5
    },
    {
      id: "02.",
      name: "Ahmed K",
      orders: 60,
      returnPercentage: 10
    },
    {
      id: "03.",
      name: "Sara M",
      orders: 55,
      returnPercentage: -3
    },
    {
      id: "04.",
      name: "Omar L",
      orders: 40,
      returnPercentage: 2
    },
    {
      id: "05.",
      name: "Lina R",
      orders: 30,
      returnPercentage: -12
    }
  ]
};

// This component can be used if you need to render something from this file,
// but for just exporting data, it's not strictly necessary to render anything.
const Sampledata: React.FC = () => {
  return (
    <div>
      {/* This component itself doesn't render the data, it just holds it.
          You would import `sampleData` directly into other components. */}
    </div>
  );
};

export default Sampledata;
