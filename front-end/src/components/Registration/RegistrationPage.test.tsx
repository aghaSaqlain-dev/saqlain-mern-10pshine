const mockRequestOtp = jest.fn();
const mockVerifyOtpAndRegister = jest.fn();
jest.mock('../../context/useAuth', () => ({
  useAuth: () => ({
    requestOtp: mockRequestOtp,
    verifyOtpAndRegister: mockVerifyOtpAndRegister,
  }),
}));

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RegistrationPage from './RegistrationPage';

describe('RegistrationPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders registration form', () => {
    render(<RegistrationPage />);
    
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('REGISTER')).toBeInTheDocument();
  });

  it('shows validation errors', async () => {
    render(<RegistrationPage />);
    
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('shows password mismatch error', async () => {
    render(<RegistrationPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'different' } });
    
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
    });
  });

  it('requests OTP on valid form', async () => {
    render(<RegistrationPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(mockRequestOtp).toHaveBeenCalledWith('test@test.com', 'testuser', 'password123');
    });
  });

  it('shows OTP input after registration', async () => {
    render(<RegistrationPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Enter OTP')).toBeInTheDocument();
      expect(screen.getByText('VERIFY OTP')).toBeInTheDocument();
    });
  });

  it('verifies OTP', async () => {
    render(<RegistrationPage />);
    
    // Complete registration first
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Enter OTP')).toBeInTheDocument();
    });
    
    // Enter and verify OTP
    fireEvent.change(screen.getByPlaceholderText('Enter OTP'), { target: { value: '123456' } });
    fireEvent.click(screen.getByText('VERIFY OTP'));
    
    await waitFor(() => {
      expect(mockVerifyOtpAndRegister).toHaveBeenCalledWith('test@test.com', '123456');
    });
  });

  it('shows OTP required error', async () => {
    render(<RegistrationPage />);
    
    // Complete registration first
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByText('REGISTER'));
    
    await waitFor(() => {
      expect(screen.getByText('VERIFY OTP')).toBeInTheDocument();
    });
    
    // Submit without OTP
    fireEvent.click(screen.getByText('VERIFY OTP'));
    
    await waitFor(() => {
      expect(screen.getByText('OTP is required')).toBeInTheDocument();
    });
  });
});