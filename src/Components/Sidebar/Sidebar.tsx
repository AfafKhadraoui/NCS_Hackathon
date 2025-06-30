import React, { useState } from 'react';
import { 
  Home, 
  ShoppingBag, 
  BarChart3, 
  Package, 
  Truck, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

interface MenuItem {
  name: string;
  icon: React.ComponentType<any>;
  path?: string;
}

interface SidebarProps {
  onItemClick?: (itemName: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onItemClick }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  const menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'Orders', icon: ShoppingBag, path: '/orders' },
    { name: 'Delivery Insights', icon: BarChart3, path: '/insights' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Track Delivery', icon: Truck, path: '/track' },
    { name: 'Setting', icon: Settings, path: '/settings' },
  ];

  const handleItemClick = (itemName: string): void => {
    setActiveItem(itemName);
    if (onItemClick) {
      onItemClick(itemName);
    }
  };

  const toggleCollapse = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
      
      {/* Collapse Toggle Button */}
      <button
        onClick={toggleCollapse}
        className="sidebar__toggle"
        type="button"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? (
          <ChevronRight className="sidebar__toggle-icon" />
        ) : (
          <ChevronLeft className="sidebar__toggle-icon" />
        )}
      </button>

      {/* Corner Indicators */}
      <div className="sidebar__corner sidebar__corner--top-left"></div>
      <div className="sidebar__corner sidebar__corner--top-right"></div>
      <div className="sidebar__corner sidebar__corner--bottom-left"></div>
      <div className="sidebar__corner sidebar__corner--bottom-right"></div>

      {/* Sidebar Content */}
      <div className="sidebar__content">
        <nav className="sidebar__nav">
          {menuItems.map((item: MenuItem) => {
            const Icon = item.icon;
            const isActive = activeItem === item.name;
            
            return (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`sidebar__item ${isActive ? 'sidebar__item--active' : ''}`}
                type="button"
              >
                <Icon className="sidebar__item-icon" />
                {!isCollapsed && (
                  <span className="sidebar__item-text">
                    {item.name}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="sidebar__footer">
        {!isCollapsed && (
          <div className="sidebar__version">
            <p>v1.0.0</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;