import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import './LoginPage.css';

type Props = {};

type LoginFormsInputs = {
  userName: string;
  password: string;
};

const validation = Yup.object().shape({
  userName: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const LoginPage = (props: Props) => {
  const { loginUser } = useAuth();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{userName?: string, password?: string}>({});

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<LoginFormsInputs>({ resolver: yupResolver(validation) });

  // const handleLogin = (form: LoginFormsInputs) => {
  //   loginUser(form.userName, form.password);
  // };
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    const newErrors: {userName?: string, password?: string} = {};
    if (!userName) newErrors.userName = "Username is required";
    if (!password) newErrors.password = "Password is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    loginUser(userName, password);
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
            id="userName"
            type="text"
            placeholder="Email ID"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            autoComplete="username"
            className="login-input"
          />
        </div>
        {errors.userName && <span className="login-error">{errors.userName}</span>}
        <div className="login-input-group">
          <span className="login-input-icon">&#128274;</span>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="login-input"
          />
        </div>
        {errors.password && <span className="login-error">{errors.password}</span>}
        <div className="login-options">
          <label className="login-remember">
            <input type="checkbox" /> Remember me
          </label>
          <span className="login-forgot">Forgot Password?</span>
        </div>
        <button type="submit" className="login-btn">LOGIN</button>
        <p className="login-register-link">
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;