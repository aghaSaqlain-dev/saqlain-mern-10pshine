import { render, screen, fireEvent } from '@testing-library/react';
import RegistrationPage from './RegistrationPage';
import { MemoryRouter } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';
import '@testing-library/jest-dom';

jest.mock('../../context/useAuth', () => ({
  useAuth: () => ({
    registerUser: jest.fn(),
  }),
}));

describe('RegistrationPage', () => {
  it('renders all input fields and button', () => {
    render(
      
        <RegistrationPage />
      
    );
    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email ID')).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('Password')[0]).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument();
  });

  it('shows validation errors for empty fields', () => {
    render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(screen.getByText('Username is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  it('shows error if passwords do not match', () => {
    render(
      <MemoryRouter>
        <RegistrationPage />
      </MemoryRouter>
    );
    fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'user' } });
    fireEvent.change(screen.getByPlaceholderText('Email ID'), { target: { value: 'user@email.com' } });
    fireEvent.change(screen.getAllByPlaceholderText('Password')[0], { target: { value: 'pass1' } });
    fireEvent.change(screen.getByPlaceholderText('Confirm Password'), { target: { value: 'pass2' } });
    fireEvent.click(screen.getByRole('button', { name: /register/i }));
    expect(screen.getByText('Passwords do not match')).toBeInTheDocument();
  });
});
