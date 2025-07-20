import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from '../../front-end/src/context/useAuth';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {

  return (
    <>
    <UserProvider>
      <Outlet />
      <ToastContainer />
    </UserProvider>
    </>
  );
};

export default App;