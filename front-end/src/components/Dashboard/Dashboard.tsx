import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { useAuth } from "../../context/useAuth";


type Props = {}

const Dashboard = (props: Props) => {

const {logout} = useAuth();
  return (
    <>
    <Sidebar />
    <div style={{ position: 'absolute', top: 16, right: 24 }}>
      <button
        style={{
          padding: '8px 16px',
          background: '#f44336',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
    </div>
    </>
  )
}

export default Dashboard