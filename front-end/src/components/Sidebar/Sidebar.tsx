import React, { useState } from 'react';
import './Sidebar.css';

// Example folder data (replace with props or context as needed)
const folders = [
  { id: 1, name: 'Personal' },
  { id: 2, name: 'Work' },
  { id: 3, name: 'Projects' },
  { id: 4, name: 'Archive' },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <button
        className="sidebar-collapse-btn"
        onClick={() => setCollapsed((c) => !c)}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? '»' : '«'}
      </button>
      {!collapsed && (
        <>
          <div className="sidebar-header">
            <h2>Folders</h2>
            <button className="sidebar-add-btn" title="Add Folder">+</button>
          </div>
          <ul className="sidebar-folder-list">
            {folders.map(folder => (
              <li key={folder.id} className="sidebar-folder-item">
                <span className="sidebar-folder-icon">📁</span>
                <span className="sidebar-folder-name">{folder.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
