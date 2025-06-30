import React from 'react';
import './LandingPage.css';
import edahabya from '../assets/edahabya.png';
import main from '../assets/main.png';
import TrustedBySection from '../TrustedBySection/TrustedBySection.tsx';
interface LandingPageProps {
  onNavigate?: (path: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const handleStartClick = () => {
    if (onNavigate) {
      onNavigate('/signup');
    }
  };

  return (
    <section className="landing-section">
      <div className="landing-container">
        {/* HERO SECTION */}
        <div className="landing-content">
          <div className="landing-left">
            <h1 className="landing-title">
              Smarter
              <br />
              E-Commerce
              <br />
              for Algeria
            </h1>
            <div className="landing-underline"></div>
            <p className="landing-description">
              From smart order tracking to AI-powered return prediction, manage 
              your entire e-commerce business from one intuitive 
              dashboard designed for Algerian sellers
            </p>
            <button onClick={handleStartClick} className="landing-cta-button">
              Start Right Now !
            </button>
          </div>

          <div className="landing-right">
            <div className="hero-visual">
              <div className="yellow-background-shape"></div>
              <div className="hero-woman">
                <img src={main} alt="Professional woman" className="woman-image" />
              </div>
              <div className="payment-card top-payment">
                <span className="payment-amount">45000.00 DA</span>
              </div>
              <div className="payment-card bottom-payment">
                <span className="payment-amount">2450.00 DA</span>
              </div>
              <div className="edahabya-card">
                <img src={edahabya} alt="Edahabya Card" className="card-image" />
              </div>
              <div className="static-icon icon-1">
                <div className="icon-circle blue"><span>✓</span></div>
              </div>
              <div className="static-icon icon-2">
                <div className="icon-circle yellow"><span>€</span></div>
              </div>
              <div className="static-icon icon-3">
                <div className="icon-circle peach"><span>$</span></div>
              </div>
              <div className="static-icon icon-4">
                <div className="icon-circle blue-dark"><span>📊</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* LOGOS SECTION INSIDE SAME PAGE */}
        <TrustedBySection />
      </div>
    </section>
  );
};

export default LandingPage;
