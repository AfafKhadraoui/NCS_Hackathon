import React, { useState } from 'react';
import { Check, Database } from 'lucide-react';
import edahabyaCard from '../Components/assets/edahabya.png';
import './CSS/signup.css'; // Using same CSS file
import { useNavigate } from 'react-router-dom';

interface SignupFormData {
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

interface ValidationErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  agreeToTerms?: string;
  general?: string;
}

interface SignupResponse {
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

const Signup: React.FC = () => {
  const navigate = useNavigate();
  
  // Form state
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
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

  const validateConfirmPassword = (confirmPassword: string, password: string): string | undefined => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    }
    if (confirmPassword !== password) {
      return 'Passwords do not match';
    }
    return undefined;
  };

  const validateAgreeToTerms = (agreeToTerms: boolean): string | undefined => {
    if (!agreeToTerms) {
      return 'You must agree to the terms and conditions';
    }
    return undefined;
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    const emailError = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    const confirmPasswordError = validateConfirmPassword(formData.confirmPassword, formData.password);
    const agreeToTermsError = validateAgreeToTerms(formData.agreeToTerms);
    
    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;
    if (confirmPasswordError) newErrors.confirmPassword = confirmPasswordError;
    if (agreeToTermsError) newErrors.agreeToTerms = agreeToTermsError;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear errors when user types/clicks
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: undefined }));
    }
  };

  // Simulate API call - replace with your actual backend endpoint
  const signupAPI = async (email: string, password: string): Promise<SignupResponse> => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock response - replace with actual API call
    // Check if email already exists
    if (email === 'existing@example.com') {
      return {
        success: false,
        message: 'Email already exists'
      };
    }
    
    // Successful signup
    return {
      success: true,
      message: 'Account created successfully',
      user: {
        id: Date.now().toString(),
        email: email,
        role: 'MANAGER', // Default role for new users
        name: 'New User'
      },
      token: 'mock_jwt_token_new_user'
    };
  };

  // Handle form submission
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await signupAPI(formData.email, formData.password);
      
      if (response.success && response.user && response.token) {
        // Store user data and token (Note: In production, consider more secure storage)
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
        setErrors({ general: response.message || 'Signup failed' });
      }
    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ 
        general: 'Unable to connect to server. Please try again.' 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = () => {
    navigate('/login');
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

      {/* Signup Card */}
      <div className="login-card">
        <h2>Sign Up</h2>
        <p className="subtext">to get started</p>

        <form onSubmit={handleSignup}>
          {/* Email Field */}
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          
          {/* Password Field */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </div>
          
          {/* Confirm Password Field */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
          </div>
          
          {/* Terms and Conditions */}
          <div className="terms-container">
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <span className="terms-text">
              I agree to the <span className="terms-link">Terms and Conditions</span>
            </span>
          </div>
          {errors.agreeToTerms && <div className="error-message">{errors.agreeToTerms}</div>}
          
          {/* General Error */}
          {errors.general && <div className="general-error">{errors.general}</div>}
          
          {/* Submit Button */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="register-text">
          Already have an account? <span onClick={handleLogin}>Log In</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;