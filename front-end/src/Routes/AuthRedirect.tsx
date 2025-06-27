import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const AuthRedirect = () => {
  const { isLoggedIn } = useAuth();
    //redirects to dashboard if user is already logged in
    if (isLoggedIn()) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default AuthRedirect;