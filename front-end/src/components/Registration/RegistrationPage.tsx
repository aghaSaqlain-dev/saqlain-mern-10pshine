import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css';
import { useAuth } from '../../context/useAuth';

type Props = {};

const RegistrationPage = (props: Props) => {
  const { requestOtp, verifyOtpAndRegister } = useAuth();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState<{userName?: string, email?: string, password?: string, confirmPassword?: string, otp?: string}>({});
  const [otpTimer, setOtpTimer] = useState(60);
  const [otpExpired, setOtpExpired] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);


  let timerRef = React.useRef<NodeJS.Timeout | null>(null);
   React.useEffect(() => {
  return () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
}, []);
const handleResendOtp = async () => {
  setOtpExpired(false);
  setOtp('');
  setErrors(prev => ({ ...prev, otp: undefined }));
  await requestOtp(email, userName, password);
  setOtpTimer(60);
  if (timerRef.current) clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    setOtpTimer(prev => {
      if (prev <= 1) {
        clearInterval(timerRef.current!);
        setOtpExpired(true);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (isRegistering) return; // Prevent double submit
  setIsRegistering(true);

  const newErrors: typeof errors = {};
  if (!userName) newErrors.userName = 'Username is required';
  if (!email) newErrors.email = 'Email is required';
  if (!password) newErrors.password = 'Password is required';
  if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    setIsRegistering(false);
    return;
  }

  await requestOtp(email, userName, password);
  setShowOtpInput(true);
  setOtpTimer(60);
  setOtpExpired(false);
  if (timerRef.current) clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    setOtpTimer(prev => {
      if (prev <= 1) {
        clearInterval(timerRef.current!);
        setOtpExpired(true);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  setIsRegistering(false);
};

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerifyingOtp) return; 
    setIsVerifyingOtp(true);

    if (!otp) {
      setErrors(prev => ({ ...prev, otp: 'OTP is required' }));
      setIsVerifyingOtp(false);
      return;
    }
    if (otpExpired) {
      setOtp('');
      setErrors(prev => ({ ...prev, otp: undefined }));
      setIsVerifyingOtp(false);
      return;
    }
    await verifyOtpAndRegister(email, otp);
    setIsVerifyingOtp(false);
  };

  return (
    <div className="login-bg">
      <form onSubmit={showOtpInput ? handleOtpSubmit : handleSubmit} className="login-form-card">
        <div className="login-avatar">
          <span className="login-avatar-icon">&#128100;</span>
        </div>
        {!showOtpInput && (
          <>
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
              <span className="login-input-icon" role="img" aria-label="email">📧</span>
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
            <button type="submit" className="login-btn" disabled={isRegistering}>
          {isRegistering ? "Processing..." : "REGISTER"}
        </button>
          </>
        )}
        {showOtpInput && (
  <>
    <div className="login-input-group">
      <span className="login-input-icon">&#128273;</span>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={e => setOtp(e.target.value)}
        className="login-input"
        disabled={otpExpired}
      />
    </div>
    <div>
      {otpExpired ? (
  <span className="login-error">
    OTP expired. <button type="button" onClick={handleResendOtp}>Resend OTP</button>
  </span>
) : (
  <span>OTP expires in: {otpTimer}s</span>
)}
    </div>
    {errors.otp && <span className="login-error">{errors.otp}</span>}
 <button
              type="submit"
              className="login-btn"
              disabled={otpExpired || isVerifyingOtp}
            >
              {isVerifyingOtp ? "Verifying..." : "VERIFY OTP"}
            </button>  </>
)}
        <p className="login-register-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};
export default RegistrationPage;