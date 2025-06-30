import React, { useState } from 'react';
import { Check, Database } from 'lucide-react';
import edahabyaCard from '../Components/assets/edahabya.png';
import './CSS/Login.css';
import { useNavigate } from 'react-router-dom';

interface LoginFormData {
  email: string;
  password: string;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  general?: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  user?: {
    id: string;
    email: string;
    role: 'MANAGER' | 'ADMIN';
    name: string;
  };
  token?: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState<LoginFormData>({
    email: 'KhadraouiAfaf@gmail.com',
    password: ''
  });
  
  // Validation state
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation functions
  const validateEmail = (email: string): string | undefined => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  };

  const validatePassword = (password: string): string | undefined => {
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear errors when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }));
    }
  };

  // Simulate API call - replace with your actual backend endpoint
  const loginAPI = async (email: string, password: string): Promise<LoginResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response - replace with actual API call
    if (email === 'admin@example.com' && password === 'admin123') {
      return {
        success: true,
        message: 'Login successful',
        user: {
          id: '1',
          email: email,
          role: 'ADMIN',
          name: 'Admin User'
        },
        token: 'mock_jwt_token_admin'
      };
    } else if (email === 'manager@example.com' && password === 'manager123') {
      return {
        success: true,
        message: 'Login successful',
        user: {
          id: '2',
          email: email,
          role: 'MANAGER',
          name: 'Manager User'
        },
        token: 'mock_jwt_token_manager'
      };
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }
  };

  // Handle form submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await loginAPI(formData.email, formData.password);
      
      if (response.success && response.user && response.token) {
        // Store user data and token
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('userData', JSON.stringify(response.user));
        
        // Navigate based on user role
        if (response.user.role === 'ADMIN') {
          navigate('/admin-dashboard');
        } else if (response.user.role === 'MANAGER') {
          navigate('/manager-dashboard');
        } else {
          navigate('/dashboard');
        }
      } else {
        setErrors({ general: response.message || 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ 
        general: 'Unable to connect to server. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

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

      {/* Edahabya Card */}
      <img src={edahabyaCard} className="edahabya-card" alt="Edahabya Card" />

      {/* Login Card */}
      <div className="login-card">
        <h2>Login</h2>
        <p className="subtext">to get started</p>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="KhadraouiAfaf@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          {errors.email && <div style={{color: '#e74c3c', fontSize: '13px', marginTop: '5px'}}>{errors.email}</div>}
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            disabled={isLoading}
          />
          {errors.password && <div style={{color: '#e74c3c', fontSize: '13px', marginTop: '5px'}}>{errors.password}</div>}
          
          {errors.general && <div style={{color: '#e74c3c', fontSize: '14px', textAlign: 'center', margin: '10px 0'}}>{errors.general}</div>}
          
          <div className="forgot">
            Forgot Password?
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Continue'}
          </button>
        </form>
        
        <p className="register-text">
          New User? <span onClick={handleRegister}>Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;