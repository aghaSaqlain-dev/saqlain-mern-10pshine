import React, { useState, useEffect } from 'react';
import { X, RefreshCw, Trash2, Calendar, Folder, FileText } from 'lucide-react';
import './TrashModal.css';
import { useNoteContext } from '../../context/noteContext';
import { Note } from '../../Models/note';
import { toast } from 'react-toastify';
import { getTextContent } from '../../Helpers/textContentExtractor';
import { formatDate } from '../../Helpers/dateFormat';

interface TrashModalProps {
    isOpen: boolean;
    onClose: () => void;
    onNoteClear?: () => void; 
}

const TrashModal: React.FC<TrashModalProps> = ({ isOpen, onClose, onNoteClear }) => {
    const [trashedNotes, setTrashedNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [confirmDelete, setConfirmDelete] = useState<{show: boolean, noteId: number | null}>({
        show: false,
        noteId: null
    });

    const { fetchTrashedNotes, recoverNote, forceDeleteNote } = useNoteContext();

    // Keyboard event handlers
    const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            action();
        }
    };

    const handleEscapeKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    };

    const handleConfirmEscapeKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
            hideDeleteConfirmation();
        }
    };

    // Fetch trashed notes function
    const loadTrashedNotes = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const notes = await fetchTrashedNotes();
            console.log('Fetched trashed notes:', notes);
            
            if (Array.isArray(notes)) {
                setTrashedNotes(notes);
            } else {
                console.error('Expected array but got:', typeof notes, notes);
                setTrashedNotes([]);
            }
        } catch (err) {
            console.error('Error fetching trashed notes:', err);
            setError('Failed to load trashed notes');
        } finally {
            setLoading(false);
        }
    };

    // Recover note from trash
    const handleRecover = async (noteId: number) => {
        try {
            console.log(noteId);
            await recoverNote(noteId);
            setTrashedNotes(prev => prev.filter(note => note.id !== noteId));
        } catch (err) {
            console.error('Error recovering note:', err);
        }
    };

    // Show confirmation dialog
    const showDeleteConfirmation = (noteId: number) => {
        setConfirmDelete({ show: true, noteId });
    };

    // Hide confirmation dialog
    const hideDeleteConfirmation = () => {
        setConfirmDelete({ show: false, noteId: null });
    };

    // Permanently delete note
    const handlePermanentDelete = async (noteId: number) => {
        if (!confirmDelete.noteId) return;
        try {
            await forceDeleteNote(noteId);
            setTrashedNotes(prev => prev.filter(note => note.id !== noteId));
            onNoteClear?.();
            setConfirmDelete({ show: false, noteId: null });
        } catch (error) {
            console.error('Error permanently deleting note:', error);
            toast.error('Failed to permanently delete note');
        }
    };

    // Load trashed notes when modal opens
    useEffect(() => {
        if (isOpen) {
            loadTrashedNotes();
        }
    }, [isOpen]);

    // Reset state when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTrashedNotes([]);
            setLoading(true);
            setError(null);
            hideDeleteConfirmation();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="trash-modal-overlay"
            aria-label="Close trash modal"
            onClick={onClose}
            style={{ all: 'unset', display: 'block', width: '100%', height: '100%' }}
        >
            <dialog 
                className="trash-modal" 
                aria-modal="true"
                onKeyDown={handleEscapeKey}
            >
                <div className="trash-modal-header">
                    <h2>
                        <Trash2 size={24} />
                        Trash
                    </h2>
                    <button 
                        className="close-button"
                        onClick={onClose}
                        onKeyDown={(e) => handleKeyDown(e, onClose)}
                        aria-label="Close trash modal"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="trash-modal-content">
                    {loading && (
                        <div className="loading-state">
                            <div className="spinner"></div>
                            <p>Loading trashed notes...</p>
                        </div>
                    )}

                    {error && (
                        <div className="error-state">
                            <p className="error-message">{error}</p>
                            <button 
                                onClick={loadTrashedNotes} 
                                onKeyDown={(e) => handleKeyDown(e, loadTrashedNotes)}
                                className="retry-button"
                            >
                                Try Again
                            </button>
                        </div>
                    )}

                    {!loading && !error && trashedNotes.length === 0 && (
                        <div className="empty-state">
                            <Trash2 size={48} />
                            <h3>No trashed notes</h3>
                            <p>Notes you delete will appear here</p>
                        </div>
                    )}

                    {!loading && !error && trashedNotes.length > 0 && (
                        <div className="trashed-notes-list">
                            <div className="trash-header-info">
                                <p>{trashedNotes.length} note{trashedNotes.length !== 1 ? 's' : ''} in trash</p>
                            </div>
                            
                            {trashedNotes.map((note) => (
                                <div key={note.id} className="trash-note-card">
                                    {/* Note Header */}
                                    <div className="note-header">
                                        <h4 className="note-title">{note.title || 'Untitled Note'}</h4>
                                        <div className="note-badges">
                                            {note.is_pinned && (
                                                <span className="badge badge-pinned" title="Was pinned">
                                                    📌
                                                </span>
                                            )}
                                            {note.is_shared && (
                                                <span className="badge badge-shared" title="Was shared">
                                                    🔗
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Note Content Preview */}
                                    <div className="note-content-preview">
                                        <div className="content-header">
                                            <FileText size={14} />
                                            <span>Content Preview</span>
                                        </div>
                                        <p className="content-text">
                                            {(() => {
                                                const text = getTextContent(note.content);
                                                return text.length > 150 ? text.substring(0, 150) + '...' : text;
                                            })()}
                                        </p>
                                    </div>

                                    {/* Note Metadata */}
                                    <div className="note-metadata">
                                        <div className="metadata-row">
                                            <div className="metadata-item">
                                                <Calendar size={14} />
                                                <span>
                                                    Trashed: {note.trashed_at 
                                                        ? formatDate(note.trashed_at)
                                                        : formatDate(note.updated_at)
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <div className="metadata-row">
                                            <div className="metadata-item">
                                                <Folder size={14} />
                                                <span>
                                                    {note.folder ? (
                                                        <span className="folder-info">
                                                            {note.folder.domain}
                                                        </span>
                                                    ) : (
                                                        <span className="no-folder">No Folder</span>
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Note Actions */}
                                    <div className="note-actions">
                                        <button
                                            className="action-btn recover-btn"
                                            onClick={() => handleRecover(note.id)}
                                            onKeyDown={(e) => handleKeyDown(e, () => handleRecover(note.id))}
                                            title="Recover this note"
                                        >
                                            <RefreshCw size={16} />
                                            Recover
                                        </button>
                                        <button
                                            className="action-btn delete-btn"
                                            onClick={() => showDeleteConfirmation(note.id)}
                                            onKeyDown={(e) => handleKeyDown(e, () => showDeleteConfirmation(note.id))}
                                            title="Delete permanently"
                                        >
                                            <Trash2 size={16} />
                                            Delete Forever
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Custom Confirmation Modal */}
                {confirmDelete.show && (
                    <div
                        className="confirm-modal-overlay"
                        aria-modal="true"
                        aria-labelledby="confirm-delete-title"
                        aria-describedby="confirm-delete-desc"
                        tabIndex={-1}
                        onClick={hideDeleteConfirmation}
                        onKeyDown={handleConfirmEscapeKey}
                    >
                        <div
                            className="confirm-modal"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h3 id="confirm-delete-title">Permanently Delete Note?</h3>
                            <p id="confirm-delete-desc">This action cannot be undone. The note will be permanently deleted from the database.</p>
                            <div className="confirm-modal-actions">
                                <button 
                                    className="confirm-delete-btn"
                                    onClick={() => {
                                        if (typeof confirmDelete.noteId === 'number') {
                                            handlePermanentDelete(confirmDelete.noteId);
                                        }
                                    }}
                                    onKeyDown={(e) => handleKeyDown(e, () => {
                                        if (typeof confirmDelete.noteId === 'number') {
                                            handlePermanentDelete(confirmDelete.noteId);
                                        }
                                    })}
                                    autoFocus
                                >
                                    Delete Forever
                                </button>
                                <button 
                                    className="cancel-btn"
                                    onClick={hideDeleteConfirmation}
                                    onKeyDown={(e) => handleKeyDown(e, hideDeleteConfirmation)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                </dialog>
        </div>
    );
};


export default TrashModal;