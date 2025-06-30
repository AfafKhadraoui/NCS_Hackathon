import React from 'react';
import './Navbar.css';
import { useScroll } from '../Context/ScrollContext.tsx';
import { Link } from 'react-router-dom'; // Keep Link for Login/Signup

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
          {/* Corrected the key to 'AboutUs' to match the SectionKey type */}
          <button onClick={() => scrollTo('AboutUs')} className="navbar-link">About Us</button>
        </div>

        <div className="navbar-actions">
          <Link to="/login">
            <button className="navbar-login">Login</button>
          </Link>

          <Link to="/signup">
            <button className="navbar-signup">Sign Up</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
