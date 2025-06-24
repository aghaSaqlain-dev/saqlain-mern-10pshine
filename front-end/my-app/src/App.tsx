import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './context/useAuth';

const App: React.FC = () => {

  return (
    <>
    <UserProvider> 
      <ToastContainer />
    </UserProvider>  
    </>
  );
};

export default App;