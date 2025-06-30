import React from 'react';
import './Navbar.css';
import { useScroll } from '../Context/ScrollContext.tsx';
const Navbar: React.FC = () => {
  const { scrollTo } = useScroll();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <button onClick={() => scrollTo('home')} className="navbar-link">Home</button>
          <button onClick={() => scrollTo('support')} className="navbar-link">Support</button>
          <button onClick={() => scrollTo('Testimonials')} className="navbar-link">Testimonials</button>
          <button onClick={() => scrollTo('BenefitsSection')} className="navbar-link">Benefits</button>
          <button onClick={() => scrollTo('about')} className="navbar-link">About Us</button>
        </div>

        <div className="navbar-actions">
          <button className="navbar-login">Login</button>
          <button className="navbar-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
