import React, { useState, useEffect, useRef } from 'react';
import './Sidebar.css';
import { useFolderContext } from '../../context/folderContext';
import { useNoteContext } from '../../context/noteContext';
import folderLogo from '../../variables/Varibles'; 
import { LogoutButton } from './LogoutButton';
import { Note } from '../../Models/note';
import { Trash2 } from 'lucide-react';
import TrashModal from '../modal/TrashModal';


type SidebarProps = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNote: React.Dispatch<React.SetStateAction<Note | null>>;
};

const Sidebar: React.FC<SidebarProps> = ({collapsed, setCollapsed, setSelectedNote}) => {
  const { notes, getUserNotes, createNote, deleteNote, forceDeleteNote } = useNoteContext();
  const { folders, getUserFolders, createFolder, setFolders, updateFolder, deleteFolder } = useFolderContext();
  
  const [creating, setCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [isCreatingLoading, setIsCreatingLoading] = useState(false);
  const [renamingId, setRenamingId] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<number[]>([]);
  const [currentNote, setCurrentNote] = useState<Note | null>(null);
  const [creatingNoteFolderId, setCreatingNoteFolderId] = useState<number | null>(null);
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [isCreatingNoteLoading, setIsCreatingNoteLoading] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{type: 'folder' | 'note', id: number} | null>(null);
  const [deleteTimer, setDeleteTimer] = useState(0);
  const [isTrashModalOpen, setIsTrashModalOpen] = useState(false);


  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getUserFolders();
  }, []);

  useEffect(() => {
    if (creating && inputRef.current) {
      inputRef.current.focus();
    }
  }, [creating]);
  useEffect(() => {
  if (deleteTarget?.type === 'folder') {
    setDeleteTimer(5);
    const interval = setInterval(() => {
      setDeleteTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  } else {
    setDeleteTimer(0);
  }
}, [deleteTarget]);

  const handleTrashClick = () => {
    setIsTrashModalOpen(true);
};
  const clearCurrentNote = () => {
  setCurrentNote(null);
  setSelectedNote(null);
};
  const handleDelete = async (action: 'forceDelete' | 'moveToTrash') => {
  if (!deleteTarget) return;
  
  if (deleteTarget.type === 'folder') {
    await deleteFolder(deleteTarget.id); 
    getUserFolders();
  } else if (deleteTarget.type === 'note') {
    // Clear current note if it's the one being deleted
    if (currentNote && currentNote.id === deleteTarget.id) {
      setCurrentNote(null);
      setSelectedNote(null); // This will clear the dashboard
    }
    
    if (action === 'moveToTrash') {
      await deleteNote(deleteTarget.id);
    } else if (action === 'forceDelete') {
      await forceDeleteNote(deleteTarget.id);
    }
    
    const deletedNote = notes.find(note => note.id === deleteTarget.id);
    if (deletedNote) {
      getUserNotes(deletedNote.folder_id);
    }
  }
  setDeleteTarget(null);
};

  const handleCreateNote = async (folderId: number) => {
  if (!newNoteTitle.trim()) return;
  setIsCreatingNoteLoading(true);
  try {
    // Replace with your actual createNote API
    await createNote( newNoteTitle, folderId);
    await getUserNotes(folderId);
    setCreatingNoteFolderId(null);
    setNewNoteTitle('');
  } catch (error) {
    // Optionally handle error
  } finally {
    setIsCreatingNoteLoading(false);
  }
};
 
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
                title="Delete folder"
                style={{ cursor: 'pointer', fontSize: '1.1em', color: '#e74c3c', marginLeft: 8 }}
                onClick={e => {
                  e.stopPropagation();
                  setDeleteTarget({ type: 'folder', id: folder.id });
                }}
              >🗑️</span>
              <span
              title="Create new note"
              style={{ cursor: 'pointer', fontSize: '1.1em' }}
             onClick={e => {
              e.stopPropagation();
              setCreatingNoteFolderId(folder.id);
              setNewNoteTitle('');
              setExpandedFolders(prev =>
                prev.includes(folder.id)
                  ? prev
                  : [...prev, folder.id]
              );
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
        {creatingNoteFolderId === folder.id && (
  <input
    type="text"
    value={newNoteTitle}
    autoFocus
    onChange={e => setNewNoteTitle(e.target.value)}
    onKeyDown={e => {
      if (e.key === 'Enter') handleCreateNote(folder.id);
      if (e.key === 'Escape') setCreatingNoteFolderId(null);
    }}
    placeholder="Enter note title"
    disabled={isCreatingNoteLoading}
    style={{
      width: '90%',
      margin: '4px 0',
      borderRadius: '6px',
      border: '1px solid #ccc',
      padding: '6px 10px',
      fontSize: '1em',
      background: '#f5f6fa'
    }}
  />
)}
        {notes
  .filter(note => note.folder_id === folder.id)
  .map(note => (
    <div
  key={note.id}
  className="sidebar-note-item"
  onClick={() => { setSelectedNote(note); setCurrentNote(note); }}
  style={currentNote != null && note.id == currentNote?.id ? { background: '#f0f0f0' } : undefined}
>
  🗒️ {note.title}
  <span
    title="Delete note"
    style={{ float: 'right', cursor: 'pointer', color: '#e74c3c', marginLeft: 8 }}
    onClick={e => {
      e.stopPropagation();
      setDeleteTarget({ type: 'note', id: note.id });
    }}
  >🗑️</span>
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
<div className="sidebar-bottom-section">
  <div 
    className="sidebar-item trash-item"
    onClick={() => setIsTrashModalOpen(true)}
  >
    <Trash2 size={20} />
    {!collapsed && <span>Trash</span>}
  </div>
  
  {/* Your existing logout button */}
  <LogoutButton />
</div>

{/* Keep the TrashModal outside */}
{isTrashModalOpen && (
  <TrashModal 
    isOpen={isTrashModalOpen}
    onClose={() => setIsTrashModalOpen(false)}
    onNoteClear={clearCurrentNote} // Add this prop
  />
)}
        {deleteTarget && (
  <div className="modal-backdrop">
    <div className="modal">
      <p>
        Are you sure you want to delete this {deleteTarget.type}? All your {deleteTarget.type === 'folder' ? 'notes in this folder' : 'content in this note'} will be deleted!
      </p>
      {deleteTarget.type === 'folder' && deleteTimer > 0 && (
        <p style={{ color: '#e74c3c', fontWeight: 'bold' }}>
          Please wait {deleteTimer} second{deleteTimer !== 1 ? 's' : ''} before confirming.
        </p>
      )}
      <button
        onClick={() => handleDelete('forceDelete')}
        style={{ color: 'black', background: '#e74c3c', marginRight: 8 }}
        disabled={deleteTarget.type === 'folder' && deleteTimer > 0}
      >
        Delete permanently
      </button>
      {deleteTarget.type === 'note' && (
        <button
          onClick={() => handleDelete('moveToTrash')}
          style={{ color: 'white', background: '#636e72', marginRight: 8 }}
        >
          Move to Trash
        </button>
      )}
      <button
        onClick={() => setDeleteTarget(null)}
        disabled={deleteTarget.type === 'folder' && deleteTimer > 0}
      >
        Cancel
      </button>
    </div>
  </div>
)}
      </>
    )}
    
  </aside>
  
);
};

export default Sidebar;