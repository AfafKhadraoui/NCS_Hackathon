import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/Sidebar.tsx';
import Dah from '../Components/Dashboard/Dash.tsx';
import Section from '../Components/Section/Section.tsx'; // Import the renamed Section component
import './CSS/Dashboard.css';

interface DashboardProps {
  // Add any props you need for the dashboard
}

const Dashboard: React.FC<DashboardProps> = () => {
  const [activeSection, setActiveSection] = useState<string>('Dashboard');

  const handleSidebarItemClick = (itemName: string): void => {
    setActiveSection(itemName);
    console.log(`Navigating to: ${itemName}`);
    // Here you can add routing logic or state management
  };

  const renderContent = (): JSX.Element => {
    switch (activeSection) {
      case 'Dashboard':
        return (
          <div className="dashboard__content">
            {/* Render the Dah component for summary cards */}
            <Dah />
            {/* Render the new Section component (formerly DashboardCharts) */}
            <Section />
            {/* Original content, you might want to remove or integrate this */}
            {/* <h1>Dashboard Overview</h1>
            <p>Welcome to your main dashboard!</p> */}
          </div>
        );
      case 'Orders':
        return (
          <div className="dashboard__content">
            <h1>Orders Management</h1>
            <p>Manage your orders here</p>
          </div>
        );
      case 'Delivery Insights':
        return (
          <div className="dashboard__content">
            <h1>Delivery Insights</h1>
            <p>View delivery analytics and insights</p>
          </div>
        );
      case 'Products':
        return (
          <div className="dashboard__content">
            <h1>Products</h1>
            <p>Manage your products catalog</p>
          </div>
        );
      case 'Track Delivery':
        return (
          <div className="dashboard__content">
            <h1>Track Delivery</h1>
            <p>Track your deliveries in real-time</p>
          </div>
        );
      case 'Setting':
        return (
          <div className="dashboard__content">
            <h1>Settings</h1>
            <p>Configure your account settings</p>
          </div>
        );
      default:
        return (
          <div className="dashboard__content">
            <h1>Dashboard</h1>
            <p>Select a section from the sidebar</p>
          </div>
        );
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onItemClick={handleSidebarItemClick} />
      <main className="dashboard__main">
        <header className="dashboard__header">
          {/* Left side: Current Section Title */}
          <h2 className="dashboard__header-title">
            {activeSection === 'Dashboard' ? (
              <>
                <span className="dashboard-title-highlight">Dashboard</span>
              </>
            ) : (
              // Wrapped activeSection in a span for consistent styling
              <span>{activeSection}</span>
            )}
          </h2>

          {/* Right side: Search, Icons, Profile */}
          <div className="dashboard__header-right">
            <div className="search-bar">
              {/* Replaced emoji with an inline SVG for a yellow search icon */}
              <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Search for something" className="search-input" />
            </div>
            <div className="header-icons">
              <div className="icon-button">⚙️</div> {/* Settings icon */}
              <div className="icon-button">🔔</div> {/* Notification icon */}
            </div>
            <div className="user-profile">
              <img src="https://placehold.co/40x40/FFD700/FFFFFF?text=User" alt="User Profile" className="profile-picture" /> {/* Profile picture */}
            </div>
          </div>
        </header>
        <div className="dashboard__body">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
