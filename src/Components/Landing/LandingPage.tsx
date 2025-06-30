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
              <div className="fix">

             {/* "Total Income" Card - bottom-payment in your example */}
<div className="payment-card floating-element bottom-payment" style={{ bottom: '15%', left: '10%' /* Adjust as needed */ }}>
    <span className="payment-label">Total Income</span>
    <div className="payment-amount">
        2450.00 DA
        <span className="graph-icon"></span> {/* This span will get the SVG background */}
    </div>
</div>
              </div>

{/* "Enter amount / Send" Card - top-payment in your example */}
<div className="payment-card floating-element top-payment" style={{ top: '20%', right: '15%' /* Adjust as needed */ }}>
    <span className="payment-label">Enter amount</span>
    <div className="input-and-button">
        <input type="text" value="45000.00 DA" readOnly className="payment-amount-input" />
        <button className="send-button">Send</button>
    </div>
</div>

// ... 
              {/* <div className="edahabya-card">
                <img src={edahabya} alt="Edahabya Card" className="card-image" />
              </div> */}
              <div className="static-icon icon-1">
                <div className="icon-circle blue"><span>✓</span></div>
              </div>
              <div className="static-icon icon-2">
                <div className="icon-circle yellow"><span>€</span></div>
              </div>
              {/* <div className="static-icon icon-3">
                <div className="icon-circle peach"><span>$</span></div>
              </div> */}
              {/* <div className="static-icon icon-4">
                <div className="icon-circle blue-dark"><span>📊</span></div>
              </div> */}
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
