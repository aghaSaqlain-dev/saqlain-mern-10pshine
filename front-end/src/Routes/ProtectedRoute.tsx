import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;