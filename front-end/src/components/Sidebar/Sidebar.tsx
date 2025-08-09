import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Sidebar.css';
import { useFolderContext } from '../../context/folderContext';
import { useNoteContext } from '../../context/noteContext';
import folderLogo from '../../variables/Varibles'; 
import { LogoutButton } from './LogoutButton';
import { Note } from '../../Models/note';
import { Trash2 } from 'lucide-react';
import TrashModal from '../modal/TrashModal';
import { handleRenameInputKeyDown, handleInputKeyDown, handleNoteKeyDown } from '../../Helpers/sidebarHelper';

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

  // Extracted helper functions to reduce nesting
  const handleCollapseToggle = useCallback(() => {
    setCollapsed((c) => !c);
  }, [setCollapsed]);

  const handleFolderToggle = useCallback((folderId: number) => {
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
    if (!expandedFolders.includes(folderId)) {
      getUserNotes(folderId);
    }
  }, [expandedFolders, getUserNotes]);

  const handleDeleteFolderClick = useCallback((e: React.MouseEvent, folderId: number) => {
    e.stopPropagation();
    setDeleteTarget({ type: 'folder', id: folderId });
  }, []);

  const handleCreateNoteClick = useCallback((e: React.MouseEvent, folderId: number) => {
    e.stopPropagation();
    setCreatingNoteFolderId(folderId);
    setNewNoteTitle('');
    setExpandedFolders(prev =>
      prev.includes(folderId)
        ? prev
        : [...prev, folderId]
    );
  }, []);

  const handleRenameFolderClick = useCallback((e: React.MouseEvent, folderId: number, folderDomain: string) => {
    e.stopPropagation();
    setRenamingId(folderId);
    setRenameValue(folderDomain);
  }, []);

  const handleNoteSelect = useCallback((note: Note) => {
    setSelectedNote(note);
    setCurrentNote(note);
  }, [setSelectedNote]);

  const handleDeleteNoteClick = useCallback((e: React.MouseEvent, noteId: number) => {
    e.stopPropagation();
    setDeleteTarget({ type: 'note', id: noteId });
  }, []);

  const handleStartCreating = useCallback(() => {
    setCreating(true);
  }, []);

  const handleOpenTrashModal = useCallback(() => {
    setIsTrashModalOpen(true);
  }, []);

  const handleCloseTrashModal = useCallback(() => {
    setIsTrashModalOpen(false);
  }, []);

  const handleCancelDelete = useCallback(() => {
    setDeleteTarget(null);
  }, []);

  const handleForcDeleteAction = useCallback(() => {
    handleDelete('forceDelete');
  }, []);

  const handleMoveToTrashAction = useCallback(() => {
    handleDelete('moveToTrash');
  }, []);

  const handleRenameBlur = useCallback(() => {
    setRenamingId(null);
    setRenameValue('');
  }, []);

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
      if (currentNote && currentNote.id === deleteTarget.id) {
        setCurrentNote(null);
        setSelectedNote(null);
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

  const handleCreateNote = useCallback(async (folderId: number) => {
    if (!newNoteTitle.trim()) return;
    setIsCreatingNoteLoading(true);
    try {
      await createNote(newNoteTitle, folderId);
      await getUserNotes(folderId);
      setCreatingNoteFolderId(null);
      setNewNoteTitle('');
    } catch (error) {
      console.log("failed to create note", error);
    } finally {
      setIsCreatingNoteLoading(false);
    }
  }, [newNoteTitle, createNote, getUserNotes]);
 
  const handleRenameFolder = async (folderId: number) => {
    await updateFolder(folderId, renameValue);
    setRenamingId(null);
    setRenameValue('');
    getUserFolders();
  };

  const handleCreateFolder = useCallback(async () => {
    if (!newFolderName.trim()) return;
    setIsCreatingLoading(true);
    
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
      getUserFolders();
    } catch (error) {
      setFolders((prev: any[]) => prev.filter(f => f.id !== tempId));
      alert("Failed to create folder. Please try again.");
      console.log("failed to create folder", error);
    } finally {
      setIsCreatingLoading(false);
    }
  }, [newFolderName, createFolder, getUserFolders, setFolders]);

  return (
    <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>
      <button
        className="sidebar-collapse-btn"
        onClick={handleCollapseToggle}
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
              onClick={handleStartCreating}
              title="Add Folder"
              disabled={creating}
            >+</button>
          </div>
          
          <ul className="sidebar-folder-list">
            {folders?.map(folder => (
              <div key={folder.id} style={{ width: '100%' }}>
                <button
                  type="button"
                  className={`sidebar-folder-item${expandedFolders.includes(folder.id) ? ' selected' : ''}`}
                  aria-pressed={expandedFolders.includes(folder.id)}
                  onClick={() => handleFolderToggle(folder.id)}
                  onMouseEnter={() => setHoveredId(folder.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', border: 'none', background: 'transparent', width: '100%', textAlign: 'left', padding: '8px' }}
                >
                  {folderLogo()}
                  {renamingId === folder.id ? (
                    <input
                      type="text"
                      value={renameValue}
                      autoFocus
                      onChange={e => setRenameValue(e.target.value)}
                      onKeyDown={e => handleRenameInputKeyDown(e, folder.id, handleRenameFolder, setRenamingId, setRenameValue)}
                      onBlur={handleRenameBlur}
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
                      <span 
                        className="sidebar-folder-name" 
                        title={folder.domain}
                        style={{
                          flex: 1,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          marginRight: '8px'
                        }}
                      >
                        {folder.domain}
                      </span>
                      {hoveredId === folder.id && (
                        <span className="sidebar-folder-actions" style={{ display: 'flex', gap: '4px', marginLeft: '8px' }}>
                          <button
                            type="button"
                            title="Delete folder"
                            style={{ cursor: 'pointer', fontSize: '1em', color: '#e74c3c', background: 'none', border: 'none', padding: '2px' }}
                            onClick={(e) => handleDeleteFolderClick(e, folder.id)}
                          >🗑️</button>
                          <button
                            type="button"
                            title="Create new note"
                            style={{ cursor: 'pointer', fontSize: '1em', background: 'none', border: 'none', padding: '2px' }}
                            onClick={(e) => handleCreateNoteClick(e, folder.id)}
                          >📝</button>
                          <button
                            type="button"
                            title="Rename folder"
                            style={{ cursor: 'pointer', fontSize: '1em', background: 'none', border: 'none', padding: '2px' }}
                            onClick={(e) => handleRenameFolderClick(e, folder.id, folder.domain)}
                          >✏️</button>
                        </span>
                      )}
                    </>
                  )}
                </button>
                
                {expandedFolders.includes(folder.id) && (
                  <div className="sidebar-note-list">
                    {creatingNoteFolderId === folder.id && (
                      <input
                        type="text"
                        value={newNoteTitle}
                        autoFocus
                        onChange={e => setNewNoteTitle(e.target.value)}
                        onKeyDown={e => handleNoteKeyDown(e, folder.id, handleCreateNote, setCreatingNoteFolderId)}
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
                        <button
                          key={note.id}
                          type="button"
                          className="sidebar-note-item"
                          onClick={() => handleNoteSelect(note)}
                          style={{
                            ...(currentNote != null && note.id == currentNote?.id ? { background: '#f0f0f0' } : {}),
                            border: 'none',
                            width: '100%',
                            textAlign: 'left',
                            padding: '8px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                          }}
                        >
                          <span>🗒️ {note.title}</span>
                          <button
                            type="button"
                            title="Delete note"
                            style={{ cursor: 'pointer', color: '#e74c3c', background: 'none', border: 'none' }}
                            onClick={(e) => handleDeleteNoteClick(e, note.id)}
                          >🗑️</button>
                        </button>
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
                  onKeyDown={e => handleInputKeyDown(e, handleCreateFolder, setCreating, setNewFolderName)}
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
            <button
              type="button"
              className="sidebar-item trash-item"
              onClick={handleOpenTrashModal}
              style={{ border: 'none', background: 'transparent', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <Trash2 size={20} />
              {!collapsed && <span>Trash</span>}
            </button>
            
            <LogoutButton />
          </div>

          {isTrashModalOpen && (
            <TrashModal 
              isOpen={isTrashModalOpen}
              onClose={handleCloseTrashModal}
              onNoteClear={clearCurrentNote}
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
                  onClick={handleForcDeleteAction}
                  style={{ color: 'black', background: '#e74c3c', marginRight: 8 }}
                  disabled={deleteTarget.type === 'folder' && deleteTimer > 0}
                >
                  Delete permanently
                </button>
                {deleteTarget.type === 'note' && (
                  <button
                    onClick={handleMoveToTrashAction}
                    style={{ color: 'white', background: '#636e72', marginRight: 8 }}
                  >
                    Move to Trash
                  </button>
                )}
                <button
                  onClick={handleCancelDelete}
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