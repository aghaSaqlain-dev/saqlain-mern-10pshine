import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { EditorProvider } from '../../context/editorContext';
import TiptapEditor from '../../services/TiptapEditor';
import MenuBar from '../editorMenuBar/menuBar';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f0f0f0' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <EditorProvider>
          <MenuBar />
          <div style={{ flex: 1, overflow: 'auto' }}>
            <TiptapEditor />
          </div>
        </EditorProvider>
      </div>
    </div>
  );
};

export default Dashboard;