import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../context/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label htmlFor="userName">Username</label>
        <input
          id="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          autoComplete="username"
        />
        {errors.userName && <span>{errors.userName}</span>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/registration">Register</Link>
      </p>
    </form>
  );
};

export default LoginPage;