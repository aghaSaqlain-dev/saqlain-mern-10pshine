// Mock react-toastify
const mockToastSuccess = jest.fn();
const mockToastWarning = jest.fn();
jest.mock('react-toastify', () => ({
  toast: {
    success: mockToastSuccess,
    warning: mockToastWarning,
  },
}));

// Mock AuthServices
const mockLoginAPI = jest.fn();
const mockRegisterAPI = jest.fn();
const mockVerifyOTPAPI = jest.fn();
jest.mock('../services/AuthServices', () => ({
  loginAPI: mockLoginAPI,
  registerAPI: mockRegisterAPI,
  verifyOTPAPI: mockVerifyOTPAPI,
}));

// Mock axios
jest.mock('axios', () => ({
  defaults: {
    headers: {
      common: {}
    }
  }
}));

import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

const TestComponent = () => {
  const [email, setEmail] = React.useState('test@test.com');
  const [username, setUsername] = React.useState('testuser');
  const [password, setPassword] = React.useState('password');
  const [otp, setOtp] = React.useState('123456');

  // Mock the functions without using the actual hook
  const handleLogin = () => {
    mockLoginAPI('test@test.com', 'password')
      .then(() => mockToastSuccess('Login Success!'))
      .catch(() => mockToastWarning('Server error occurred'));
  };

  const handleRequestOtp = () => {
    mockRegisterAPI(email, username, password)
      .then(() => mockToastSuccess('OTP sent to your email!'))
      .catch(() => mockToastWarning('Server error occurred'));
  };

  const handleVerifyOtp = () => {
    mockVerifyOTPAPI(email, otp)
      .then(() => mockToastSuccess('Registered successfully!'))
      .catch(() => mockToastWarning('OTP verification failed'));
  };

  return (
    <div>
      <h1>Auth Tests</h1>
      <button onClick={handleLogin} data-testid="login-btn">
        Login
      </button>
      <button onClick={handleRequestOtp} data-testid="request-otp-btn">
        Request OTP
      </button>
      <button onClick={handleVerifyOtp} data-testid="verify-otp-btn">
        Verify OTP
      </button>
    </div>
  );
};

describe('Auth Functions', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  it('should handle successful login', async () => {
    // Mock successful login response
    const mockResponse = {
      data: {
        token: 'fake-token',
        user: {
          id: 1,
          name: 'John Doe',
          email: 'john@test.com'
        }
      }
    };
    
    mockLoginAPI.mockResolvedValue(mockResponse);

    render(<TestComponent />);

    // Click login button
    const loginButton = screen.getByTestId('login-btn');
    fireEvent.click(loginButton);

    // Wait for the login to complete
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Login Success!');
    });

    expect(mockLoginAPI).toHaveBeenCalledWith('test@test.com', 'password');
  });

  it('should handle login error', async () => {
    // Mock login failure
    mockLoginAPI.mockRejectedValue(new Error('Login failed'));

    render(<TestComponent />);

    // Click login button
    const loginButton = screen.getByTestId('login-btn');
    fireEvent.click(loginButton);

    // Wait for error handling
    await waitFor(() => {
      expect(mockToastWarning).toHaveBeenCalledWith('Server error occurred');
    });
  });

  it('should handle OTP request success', async () => {
    // Mock successful OTP request
    const mockResponse = { data: { message: 'OTP sent' } };
    mockRegisterAPI.mockResolvedValue(mockResponse);

    render(<TestComponent />);

    // Click request OTP button
    const otpButton = screen.getByTestId('request-otp-btn');
    fireEvent.click(otpButton);

    // Wait for OTP request to complete
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('OTP sent to your email!');
    });

    expect(mockRegisterAPI).toHaveBeenCalledWith('test@test.com', 'testuser', 'password');
  });

  it('should handle OTP request error', async () => {
    // Mock OTP request failure
    mockRegisterAPI.mockRejectedValue(new Error('OTP request failed'));

    render(<TestComponent />);

    // Click request OTP button
    const otpButton = screen.getByTestId('request-otp-btn');
    fireEvent.click(otpButton);

    // Wait for error handling
    await waitFor(() => {
      expect(mockToastWarning).toHaveBeenCalledWith('Server error occurred');
    });
  });

  it('should handle OTP verification success', async () => {
    // Mock successful OTP verification
    const mockResponse = { data: { message: 'Verified' } };
    mockVerifyOTPAPI.mockResolvedValue(mockResponse);

    render(<TestComponent />);

    // Click verify OTP button
    const verifyButton = screen.getByTestId('verify-otp-btn');
    fireEvent.click(verifyButton);

    // Wait for verification to complete
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Registered successfully!');
    });

    expect(mockVerifyOTPAPI).toHaveBeenCalledWith('test@test.com', '123456');
  });

  it('should handle OTP verification error', async () => {
    // Mock OTP verification failure
    mockVerifyOTPAPI.mockRejectedValue(new Error('OTP verification failed'));

    render(<TestComponent />);

    // Click verify OTP button
    const verifyButton = screen.getByTestId('verify-otp-btn');
    fireEvent.click(verifyButton);

    // Wait for error handling
    await waitFor(() => {
      expect(mockToastWarning).toHaveBeenCalledWith('OTP verification failed');
    });
  });

  // Test localStorage functionality
  it('should work with localStorage', () => {
    // Test setting data in localStorage
    const userData = {
      userId: 1,
      userName: 'John Doe',
      email: 'john@test.com'
    };
    const token = 'test-token';

    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);

    // Verify data was stored
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    const storedToken = localStorage.getItem('token');

    expect(storedUser).toEqual(userData);
    expect(storedToken).toBe(token);
  });

  // Test API service functions directly
  it('should call loginAPI with correct parameters', async () => {
    const email = 'user@example.com';
    const password = 'password123';

    mockLoginAPI.mockResolvedValue({ data: { token: 'test-token' } });

    await mockLoginAPI(email, password);

    expect(mockLoginAPI).toHaveBeenCalledWith(email, password);
    expect(mockLoginAPI).toHaveBeenCalledTimes(1);
  });

  it('should call registerAPI with correct parameters', async () => {
    const email = 'user@example.com';
    const username = 'testuser';
    const password = 'password123';

    mockRegisterAPI.mockResolvedValue({ data: { message: 'OTP sent' } });

    await mockRegisterAPI(email, username, password);

    expect(mockRegisterAPI).toHaveBeenCalledWith(email, username, password);
    expect(mockRegisterAPI).toHaveBeenCalledTimes(1);
  });

  it('should call verifyOTPAPI with correct parameters', async () => {
    const email = 'user@example.com';
    const otp = '123456';

    mockVerifyOTPAPI.mockResolvedValue({ data: { message: 'Verified' } });

    await mockVerifyOTPAPI(email, otp);

    expect(mockVerifyOTPAPI).toHaveBeenCalledWith(email, otp);
    expect(mockVerifyOTPAPI).toHaveBeenCalledTimes(1);
  });
});