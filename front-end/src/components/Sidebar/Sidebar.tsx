import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import { useAuth } from '../../context/useAuth';
import { useFolderContext } from '../../context/folderContext';
import folderLogo from '../../variables/Varibles'; 

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({collapsed, setCollapsed}) => {
  const { logout } = useAuth();
  const { folders, getUserFolders, createFolder, setFolders, updateFolder } = useFolderContext();
  const [creating, setCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingLoading, setIsCreatingLoading] = useState(false);
  const [renamingId, setRenamingId] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getUserFolders();
  }, []);

  useEffect(() => {
    if (creating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [creating]);

  const handleRenameFolder = async (folderId: number) => {
  // TODO: Call your API to rename folder here
  await updateFolder(folderId, renameValue);
  setRenamingId(null);
  setRenameValue('');
  getUserFolders();
};
const handleRenameInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, folderId: number) => {
  if (e.key === 'Enter') {
    handleRenameFolder(folderId);
  }
  if (e.key === 'Escape') {
    setRenamingId(null);
    setRenameValue('');
  }
};

  const handleCreateFolder = async () => {
    if (!newFolderName.trim()) return;
    setIsCreatingLoading(true);
  

    // Optimistically add folder to local state
    const tempId = Date.now();
    const optimisticFolder = {
      id: tempId,
      domain: newFolderName,
      name: newFolderName,
      user_id: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setFolders((prev: any) => [...prev, optimisticFolder]);
    setCreating(false);
    setNewFolderName('');

    try {
      await createFolder(newFolderName);
      getUserFolders(); // Sync with backend
    } catch (error) {
      // Remove optimistic folder if API fails
      setFolders((prev: any[]) => prev.filter(f => f.id !== tempId));
      // Optionally show error message
    } finally {
      setIsCreatingLoading(false);
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCreateFolder();
    }
    if (e.key === 'Escape') {
      setCreating(false);
      setNewFolderName('');
    }
  };
  //console.log(localStorage.getItem("user"))
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
            <button
              className="sidebar-add-btn"
              onClick={() => setCreating(true)}
              title="Add Folder"
              disabled={creating}
            >+</button>
          </div>
          <ul className="sidebar-folder-list">
           {folders && folders.map(folder => (
    <li
      key={folder.id}
      className="sidebar-folder-item"
      onMouseEnter={() => setHoveredId(folder.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{ position: 'relative' }}
    >
      {folderLogo()}
      {renamingId === folder.id ? (
        <input
          type="text"
          value={renameValue}
          autoFocus
          onChange={e => setRenameValue(e.target.value)}
          onKeyDown={e => handleRenameInputKeyDown(e, folder.id)}
          onBlur={() => { setRenamingId(null); setRenameValue(''); }}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: '1em',
            padding: '4px 0'
          }}
        />
      ) : (
        <>
          <span className="sidebar-folder-name">{folder.domain}</span>
          {hoveredId === folder.id && (
            <span style={{ position: 'absolute', right: 8, display: 'flex', gap: '8px' }}>
              {/* Create new note icon */}
              <span
                title="Create new note"
                style={{ cursor: 'pointer', fontSize: '1.1em' }}
                onClick={() => {/* TODO: handle create note for folder.id */}}
              >📝</span>
              {/* Rename icon */}
              <span
                title="Rename folder"
                style={{ cursor: 'pointer', fontSize: '1.1em' }}
                onClick={() => { setRenamingId(folder.id); setRenameValue(folder.domain); }}
              >✏️</span>
            </span>
          )}
        </>
      )}
    </li>
  ))}
            {creating && (
              <li className="sidebar-folder-item" style={{ background: isCreatingLoading ? '#fff' : '#f5f6fa' }}>
                {folderLogo()}
                <input
                  ref={inputRef}
                  type="text"
                  value={newFolderName}
                  onChange={e => setNewFolderName(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Enter folder name"
                  disabled={isCreatingLoading}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    background: 'transparent',
                    fontSize: '1em',
                    padding: '4px 0',
                    color: isCreatingLoading ? '#aaa' : undefined,
                    cursor: isCreatingLoading ? 'not-allowed' : 'text'
                  }}
                />
              </li>
            )}
          </ul>
          <div
            style={{
              marginTop: 'auto',
              padding: '24px 0 8px 0',
              textAlign: 'center',
              borderTop: '1px solid #eee',
              background: 'rgba(255,255,255,0.95)'
            }}
          >
           <button
              style={{
                padding: '10px 28px',
                background: 'linear-gradient(90deg, #f44336 60%, #e57373 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '24px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem',
                boxShadow: '0 2px 8px rgba(244,67,54,0.08)',
                transition: 'background 0.2s, box-shadow 0.2s, transform 0.1s',
                letterSpacing: '1px',
                outline: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onClick={logout}
              onMouseOver={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #d32f2f 60%, #e57373 100%)';
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.01)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(244,67,54,0.18)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.background = 'linear-gradient(90deg, #f44336 60%, #e57373 100%)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(244,67,54,0.08)';
              }}
              onMouseDown={e => {
                e.currentTarget.style.transform = 'scale(0.9)';
              }}
              onMouseUp={e => {
                e.currentTarget.style.transform = 'translateY(-1px) scale(1.04)';
              }}
            >
              <span style={{ fontSize: '1.2em', verticalAlign: 'middle' }}>🚪</span>
              Logout
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;