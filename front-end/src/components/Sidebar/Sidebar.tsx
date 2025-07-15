import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import { useFolderContext } from '../../context/folderContext';
import { useNoteContext } from '../../context/noteContext';
import folderLogo from '../../variables/Varibles'; 
import { LogoutButton } from '../Dashboard/LogoutButton';
import { Note } from '../../Models/note';

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | null>>;
};

const Sidebar: React.FC<SidebarProps> = ({collapsed, setCollapsed, setSelectedNote}) => {
  const { notes, getUserNotes } = useNoteContext();
  const { folders, getUserFolders, createFolder, setFolders, updateFolder } = useFolderContext();
  
  const [creating, setCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingLoading, setIsCreatingLoading] = useState(false);
  const [renamingId, setRenamingId] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<number[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);


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
      {/*ADD FOLDER */}
        <div className="sidebar-header">
          <h2>Folders</h2>
          <button
            className="sidebar-add-btn"
            onClick={() => setCreating(true)}
            title="Add Folder"
            disabled={creating}
          >+</button>
        </div>
        {/*ADD FOLDER END */}
        {/* OPENED SIDEBAR */}
        <ul className="sidebar-folder-list">
 {folders && folders.map(folder => (
  <div key={folder.id} style={{ width: '100%' }}>
    {/* Folder row: logo, name, actions */}
    <div
      className={`sidebar-folder-item${expandedFolders.includes(folder.id) ? ' selected' : ''}`}
      onClick={() => {
        setExpandedFolders(prev =>
          prev.includes(folder.id)
            ? prev.filter(id => id !== folder.id) // contract
            : [...prev, folder.id] // expand
        );
        if (!expandedFolders.includes(folder.id)) {
          getUserNotes(folder.id); // fetch notes only when expanding
        }
      }}
      onMouseEnter={() => setHoveredId(folder.id)}
      onMouseLeave={() => setHoveredId(null)}
      style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
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
            <span className="sidebar-folder-actions" style={{ display: 'flex', gap: '8px', marginLeft: '8px' }}>
              <span
                title="Create new note"
                style={{ cursor: 'pointer', fontSize: '1.1em' }}
                onClick={e => {
                  e.stopPropagation();
                  // TODO: handle create note for folder.id
                }}
              >📝</span>
              <span
                title="Rename folder"
                style={{ cursor: 'pointer', fontSize: '1.1em' }}
                onClick={e => {
                  e.stopPropagation();
                  setRenamingId(folder.id);
                  setRenameValue(folder.domain);
                }}
              >✏️</span>
            </span>
          )}
        </>
      )}
    </div>
    {/* Notes dropdown */}
    {expandedFolders.includes(folder.id) && (
      <div className="sidebar-note-list" >
        {notes
  .filter(note => note.folder_id === folder.id)
  .map(note => (
    <div
      key={note.id}
      className="sidebar-note-item"
      onClick={() => {setSelectedNote(note); setCurrentNote(note)}}
      style={
      currentNote != null && note.id == currentNote?.id
        ? { background: '#f0f0f0' } 
        : undefined
      }
    >
      🗒️ {note.title}
    </div>
          ))}
      </div>
    )}
  </div>
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
        {/* logout button */}
        <LogoutButton />
      </>
    )}
  </aside>
);
};

export default Sidebar;