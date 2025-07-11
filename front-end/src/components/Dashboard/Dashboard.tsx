import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { EditorProvider, useEditorContext } from '../../context/editorContext';
import TiptapEditor from '../../services/TiptapEditor';
import MenuBar from '../editorMenuBar/menuBar';

const DashboardContent = () => {
  const { wordCount, pageCount } = useEditorContext();
  return (
    <>
      <MenuBar pageCount={pageCount} wordCount={wordCount} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <TiptapEditor />
      </div>
    </>
  );
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f0f0f0' }}>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <EditorProvider>
          <DashboardContent />
        </EditorProvider>
      </div>
    </div>
  );
};

export default Dashboard;