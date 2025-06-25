import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import LoginPage from "../components/Login/LoginPage.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";
import RegistrationPage from "../components/Registration/RegistrationPage.tsx";
import Dashboard from "../components/Dashboard/Dashboard.tsx";
import AuthRedirect from "./AuthRedirect.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // Auth pages group - redirect if already logged in
      {
        element: <AuthRedirect />,
        children: [
          { index: true, element: <LoginPage /> },
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