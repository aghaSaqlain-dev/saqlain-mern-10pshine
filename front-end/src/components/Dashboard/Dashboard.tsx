import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

type Props = {}

const Dashboard = (props: Props) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      background: '#f7f7f7'
    }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'padding-left 0.3s cubic-bezier(.4,2,.6,1), background 0.3s',
          paddingLeft: collapsed ? 0 : 50, 
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: 1100, 
            height: '90vh', 
            margin: '0 auto',
            background: '#fff',
            borderRadius: 16,
            minHeight: 600,
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            padding: 40,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            transition: 'box-shadow 0.3s, border-radius 0.3s',
          }}
        >
          {/* Place your Tiptap editor here */}
          <h2>Your Tiptap Editor Goes Here</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;