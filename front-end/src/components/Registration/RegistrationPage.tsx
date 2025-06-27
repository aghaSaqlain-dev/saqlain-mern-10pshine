import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';
import { useAuth } from '../../context/useAuth';

type Props = {};

const RegistrationPage = (props: Props) => {
  const { registerUser } = useAuth();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<{userName?: string, email?: string, password?: string, confirmPassword?: string}>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!userName) newErrors.userName = 'Username is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    registerUser(email, userName, password);
  };

  return (
    <div className="login-bg">
      <form onSubmit={handleSubmit} className="login-form-card">
        <div className="login-avatar">
          <span className="login-avatar-icon">&#128100;</span>
        </div>
        <div className="login-input-group">
          <span className="login-input-icon">&#128100;</span>
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={e => setUserName(e.target.value)}
            className="login-input"
          />
        </div>
        {errors.userName && <span className="login-error">{errors.userName}</span>}
        <div className="login-input-group">
          <span className="login-input-icon">&#9993;</span>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="login-input"
          />
        </div>
        {errors.email && <span className="login-error">{errors.email}</span>}
        <div className="login-input-group">
          <span className="login-input-icon">&#128274;</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="login-input"
          />
        </div>
        {errors.password && <span className="login-error">{errors.password}</span>}
        <div className="login-input-group">
          <span className="login-input-icon">&#128274;</span>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="login-input"
          />
        </div>
        {errors.confirmPassword && <span className="login-error">{errors.confirmPassword}</span>}
        <button type="submit" className="login-btn">REGISTER</button>
        <p className="login-register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default RegistrationPage;