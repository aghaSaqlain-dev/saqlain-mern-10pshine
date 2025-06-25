import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth.tsx";

const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();
  
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;