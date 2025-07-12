import { createContext, useEffect, useState } from "react";
import { UserProfile, UserContextType } from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI, verifyOTPAPI } from "../services/AuthServices";
import { toast } from "react-toastify";
import * as React from "react";
import axios from "axios";

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  // Step 1: Send registration data and request OTP
  const requestOtp = async (email: string, username: string, password: string) => {
    return registerAPI(email, username, password)
      .then((res) => {
        if (res) {
          toast.success("OTP sent to your email!");
          // You should set a state here to show the OTP input in your UI
        }
      })
      .catch(() => toast.warning("Server error occurred"));
  };

  // Step 2: Verify OTP and complete registration
  const verifyOtpAndRegister = async (email: string, otp: string) => {
  return verifyOTPAPI(email, otp)
    .then((res) => {
      if (res) {
        toast.success("Registered successfully!");
        navigate("/login");
      }
    })
    .catch(() => toast.warning("OTP verification failed"));
};

  const loginUser = async (username: string, password: string) => {
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userId: res?.data.user.id,
            userName: res?.data.user.name,
            email: res?.data.user.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          console.log(localStorage.getItem("user"));
          navigate("/dashboard");
        }
      })
      .catch(() => toast.warning("Server error occured"));
  };

  const isLoggedIn = (): boolean => {
    return !!token && !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
    // Optionally, reset OTP UI state here if you have one
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        token,
        logout,
        isLoggedIn,
        requestOtp,
        verifyOtpAndRegister,
      } as UserContextType}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);