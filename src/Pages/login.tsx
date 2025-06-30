import React from 'react';
import { Check, Receipt, BarChart2, Database } from 'lucide-react';
import edahabyaCard from '../Components/assets/edahabya.png';
import './CSS/Login.css';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };
const navigate = useNavigate();

  const handleRegister = () => {
    navigate('/signup');
  };
  return (
    <div className="login-page">
      {/* Floating icons with different types */}
      <div className="floating-icon top-left orange">
        <Database size={20} />
      </div>

      <div className="floating-icon top-right orange">
        <Database size={20} />
      </div>

      <div className="floating-icon bottom-left blue">
        <Check size={12} />
      </div>

      <div className="floating-icon bottom-right blue">
        <Check size={12} />
      </div>

      {/* Money amount elements with income info */}
      {/* <div className="money-element money-top">
        <div className="money-content">
          <span className="money-label">Total Income</span>
          <span className="money-amount">2450.00 DA</span>
          <BarChart2 size={20} className="money-icon" />
        </div>
      </div> */}
      
      {/* <div className="money-element money-bottom">
        <div className="money-content">
          <span className="money-label">Total Income</span>
          <span className="money-amount">2450.00 DA</span>
          <BarChart2 size={20} className="money-icon" />
        </div>
      </div> */}

      {/* Edahabya Card */}
      <img src={edahabyaCard} className="edahabya-card" alt="Edahabya Card" />

      {/* Login Card */}
      <div className="login-card">
        <h2>Login</h2>
        <p className="subtext">to get started</p>
        
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="KhadraouiAfaf@gmail.com" 
            defaultValue="KhadraouiAfaf@gmail.com"
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
          <div className="forgot">
            Forgot Password?
          </div>
          <button type="submit">Continue</button>
        </form>

        <p className="register-text">
      New User? <span onClick={handleRegister}>Register</span>
    </p>
      </div>
    </div>
  );
};

export default Login;