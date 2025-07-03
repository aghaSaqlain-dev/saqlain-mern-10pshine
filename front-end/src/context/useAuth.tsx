import { createContext, useEffect, useState } from "react";
import { UserProfile , UserContextType} from "../Models/User";
import { useNavigate } from "react-router-dom";
import { loginAPI, registerAPI } from "../services/AuthServices";
import { toast } from "react-toastify";
import * as React from "react";
import axios from "axios";



type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null); //jwt
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false); //for loading state 

  useEffect(() => {
    const user = localStorage.getItem("user"); //initially null
    const token = localStorage.getItem("token"); //initially null
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);

      //sets a default HTTP header for all future Axios requests
      axios.defaults.headers.common["Authorization"] = "Bearer " + token; 
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    username: string,
    password: string
  ) => {
    await registerAPI(email, username, password)
      .then((res) => {
        // if (res) {
        //   localStorage.setItem("token", res?.data.token);
        //   const userObj = {
        //     userName: res?.data.userName,
        //     email: res?.data.email,
        //   };
        //   localStorage.setItem("user", JSON.stringify(userObj));
        //   setToken(res?.data.token!);
        //   setUser(userObj!);
        //   toast.success("registered Successfully!");
        //   navigate("/login");
        // }
      })
      .catch((e) => toast.warning("Server error occured"));
  };

  const loginUser = async (username: string, password: string) => {
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token); //jwt 
          const userObj = {
            userId: res?.data.user.id,
            userName: res?.data.user.name,
            email: res?.data.user.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/dashboard");
        }
      })
      .catch((e) => toast.warning("Server error occured"));
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
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);