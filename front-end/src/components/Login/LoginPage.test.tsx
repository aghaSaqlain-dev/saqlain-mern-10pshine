// Mock useAuth
const mockLoginUser = jest.fn();
jest.mock('../../context/useAuth', () => ({
  useAuth: () => ({
    loginUser: mockLoginUser,
  }),
}));

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form', () => {
    render(<LoginPage />);
    
    expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByText('LOGIN')).toBeInTheDocument();
  });

  it('shows validation errors', async () => {
    render(<LoginPage />);
    
    fireEvent.click(screen.getByText('LOGIN'));
    
    await waitFor(() => {
      expect(screen.getByText('Username is required')).toBeInTheDocument();
      expect(screen.getByText('Password is required')).toBeInTheDocument();
    });
  });

  it('calls loginUser on valid form', async () => {
    render(<LoginPage />);
    
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByText('LOGIN'));
    
    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledWith('test@test.com', 'password123');
    });
  });

  it('shows remember me checkbox', () => {
    render(<LoginPage />);
    
    expect(screen.getByText('Remember me')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('shows forgot password link', () => {
    render(<LoginPage />);
    
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('shows register link', () => {
    render(<LoginPage />);
    
    expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
  });

  it('updates input values', () => {
    render(<LoginPage />);
    
    const emailInput = screen.getByPlaceholderText('Email ID') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
    
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'mypassword' } });
    
    expect(emailInput.value).toBe('user@example.com');
    expect(passwordInput.value).toBe('mypassword');
  });
});