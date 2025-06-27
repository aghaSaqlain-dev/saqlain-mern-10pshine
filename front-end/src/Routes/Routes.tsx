import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginPage from "../components/Login/LoginPage";
import ProtectedRoute from "./ProtectedRoute";
import RegistrationPage from "../components/Registration/RegistrationPage";
import Dashboard from "../components/Dashboard/Dashboard";
import AuthRedirect from "./AuthRedirect";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Auth pages group - redirect if already logged in
      {
        element: <AuthRedirect />,
        children: [
          // { index: true, element: <LoginPage /> },
          { index: true, element: <Dashboard /> },
          { path: "login", element: <LoginPage /> },
          { path: "registration", element: <RegistrationPage /> },
        ]
      },
      
      // Protected routes group - require authentication
      { 
        element: <ProtectedRoute />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          // Other protected routes
        ] 
      },
    ],
  },
]);