import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma'; 
import logger from '../utils/logger';

const prisma = new PrismaClient();

// Get all notes
export const getAllNotes = async (req: Request, res: Response) => {
    try {
        logger.debug({ query: req.query, action: 'get_all_notes_request' }, 'Request received');
        logger.info({ action: 'get_all_notes_attempt' }, 'Fetching all notes');
        
        const { user_id, folder_id } = req.query;
        
        logger.debug({ user_id, folder_id, action: 'get_all_notes_params' }, 'Extracted parameters');
        
        if(!user_id|| !folder_id) {
            logger.warn({ user_id, folder_id, action: 'get_all_notes_validation_failed' }, 'Missing required parameters');
            return res.status(400).json({ message: "User ID and folder ID are required" });
        }
        
        const notes = await prisma.note.findMany({where: {
            //user should access only his own notes
            user_id: Number(user_id),
            folder_id: Number(folder_id),
            is_trashed: false
        },});
        
        if(!notes || notes.length === 0) {
            logger.info({ 
                user_id: Number(user_id), 
                folder_id: Number(folder_id), 
                action: 'get_all_notes_not_found' 
            }, 'No notes found for this user and folder');
            return res.status(404).json({ message: "No notes found for this user and folder" });
        }
        
        logger.info({ 
            user_id: Number(user_id), 
            folder_id: Number(folder_id), 
            notesCount: notes.length,
            action: 'get_all_notes_success' 
        }, 'Notes retrieved successfully');
        
        res.status(201).json(notes);

    } catch (error) {
        logger.error({ 
            error: (error as Error).message, 
            query: req.query,
            action: 'get_all_notes_error' 
        }, 'Error fetching notes');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get a specific note by ID
export const getNoteById = async (req: Request, res: Response) => {
     try {
        const note_id = req.params.id;
        logger.info({ note_id, action: 'get_note_by_id_attempt' }, 'Fetching specific note');
        
        const { user_id, folder_id } = req.body;
        
        if(!user_id|| !folder_id) {
            logger.warn({ 
                note_id, 
                user_id, 
                folder_id, 
                action: 'get_note_by_id_validation_failed' 
            }, 'Missing required parameters');
            return res.status(400).json({ message: "User ID and folder ID are required" });
        }
        
        const note = await prisma.note.findMany({where: {
            //user should access only his own notes
            user_id: Number(user_id),
            folder_id: Number(folder_id),
            id : Number(note_id),
            is_trashed: false
        },});
        
        if(!note || note.length === 0) {
            logger.info({ 
                note_id: Number(note_id), 
                user_id: Number(user_id), 
                folder_id: Number(folder_id),
                action: 'get_note_by_id_not_found' 
            }, 'No note found for this id');
            return res.status(404).json({ message: "No note found for this id" });
        }
        
        logger.info({ 
            note_id: Number(note_id), 
            user_id: Number(user_id), 
            folder_id: Number(folder_id),
            action: 'get_note_by_id_success' 
        }, 'Note retrieved successfully');
        
        res.status(201).json(note);

    } catch (error) {
        logger.error({ 
            note_id: req.params.id,
            body: req.body,
            error: (error as Error).message,
            action: 'get_note_by_id_error' 
        }, 'Error fetching note');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Create a new note
export const createNote = async (req: Request, res: Response) => {
    try {
        const { title, content, folder_id, user_id } = req.body;
        
        logger.info({ 
            title, 
            folder_id, 
            user_id, 
            contentLength: content?.length ?? 0,
            action: 'create_note_attempt' 
        }, 'Creating new note');
        
        if (!user_id || !folder_id) {
            logger.warn({ 
                title, 
                folder_id, 
                user_id, 
                action: 'create_note_validation_failed' 
            }, 'Missing required parameters');
            return res.status(400).json({ message: "User ID and folder ID are required" });
        }
        
        const note = await prisma.note.create({
            data: {
                title,
                content,
                folder_id: Number(folder_id),
                user_id: Number(user_id),
                is_pinned: false, // default value
                is_trashed: false,
                is_shared: false,
            },
        });
        
        logger.info({ 
            noteId: note.id,
            title, 
            folder_id: Number(folder_id), 
            user_id: Number(user_id),
            action: 'create_note_success' 
        }, 'Note created successfully');
        
        res.status(201).json(note);
    } catch (error) {
        logger.error({ 
            body: req.body,
            error: (error as Error).message,
            action: 'create_note_error' 
        }, 'Error creating note');
        res.status(500).json({ message: "Internal server error" });
    }
};

// Pin/unpin a note
export const pinNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { pin } = req.body; // expects { "pin": true } or { "pin": false }
        
        logger.info({ 
            noteId: id, 
            pin: !!pin, 
            action: 'pin_note_attempt' 
        }, 'Pinning/unpinning note');
        
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: { is_pinned: !!pin },
        });
        
        logger.info({ 
            noteId: note.id, 
            is_pinned: note.is_pinned,
            action: 'pin_note_success' 
        }, 'Note pin status updated successfully');
        
        res.json(note);
    } catch (error) {
        logger.error({ 
            noteId: req.params.id,
            pin: req.body.pin,
            error: (error as Error).message,
            action: 'pin_note_error' 
        }, 'Error pinning/unpinning note');
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update a specific note by ID
export const updateNote = async (req: Request, res: Response) => {
    try {
        logger.debug({ request: req.body, action: 'update_note_request' }, 'Update note request received');
        
        const { id } = req.params;
        const { title, content, folder_id, is_pinned, is_trashed, is_shared } = req.body;
        
        logger.info({ 
            noteId: id,
            title, 
            contentLength: content?.length ?? 0, 
            folder_id, 
            is_pinned, 
            is_trashed, 
            is_shared,
            action: 'update_note_attempt' 
        }, 'Updating note');
        
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: {
                ...(title !== undefined && { title }),
                ...(content !== undefined && { content }),
                ...(folder_id !== undefined && { folder_id: Number(folder_id) }),
                ...(is_pinned !== undefined && { is_pinned }),
                ...(is_trashed !== undefined && { is_trashed }),
                ...(is_shared !== undefined && { is_shared }),
            },
        });
        
        logger.info({ 
            noteId: note.id,
            updatedFields: Object.keys(req.body),
            action: 'update_note_success' 
        }, 'Note updated successfully');
        
        res.json(note);
    } catch (error) {
        logger.error({ 
            noteId: req.params.id,
            body: req.body,
            error: (error as Error).message,
            action: 'update_note_error' 
        }, 'Error updating note');
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a specific note by ID (soft delete: move to trash)
export const deleteNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        logger.info({ 
            noteId: id, 
            action: 'delete_note_attempt' 
        }, 'Moving note to trash');
        
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: { is_trashed: true, trashed_at: new Date() },
        });
        
        logger.info({ 
            noteId: note.id, 
            trashed_at: note.trashed_at,
            action: 'delete_note_success' 
        }, 'Note moved to trash successfully');
        
        res.json({ message: "Note moved to trash", note });
    } catch (error) {
        logger.error({ 
            noteId: req.params.id,
            error: (error as Error).message,
            action: 'delete_note_error' 
        }, 'Error deleting note');
        res.status(500).json({ message: "Internal server error" });
    }
};

// Permanently delete a specific note by ID
export const forceDeleteNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        
        logger.warn({ 
            noteId: id, 
            action: 'force_delete_note_attempt' 
        }, 'Permanently deleting note');
        
        await prisma.note.delete({
            where: { id: Number(id) },
        });
        
        logger.warn({ 
            noteId: id, 
            action: 'force_delete_note_success' 
        }, 'Note permanently deleted');
        
        res.json({ message: "Note permanently deleted" });
    } catch (error) {
        logger.error({ 
            noteId: req.params.id,
            error: (error as Error).message,
            action: 'force_delete_note_error' 
        }, 'Error force deleting note');
        res.status(500).json({ message: "Internal server error" });
    }
};

export const trashedNotes = async(req: Request, res: Response) => {
    try {
        const { uid } = req.body;
        
        logger.info({ 
            uid, 
            action: 'get_trashed_notes_attempt' 
        }, 'Fetching trashed notes');
        
        if (!uid) {
            logger.warn({ 
                uid, 
                action: 'get_trashed_notes_validation_failed' 
            }, 'Missing user ID');
            return res.status(400).json({ message: "User ID is required" });
        }
        
        const trashedNotes = await prisma.note.findMany({
            where: {
                user_id: Number(uid),
                is_trashed: true
            },
            include: {
                folder: {  // Include folder information
                    select: {
                        id: true,
                        domain: true,
                       
                    }
                }
            },
            orderBy: {
                updated_at: 'desc'
            }
        });
        
        logger.info({ 
            uid: Number(uid), 
            trashedNotesCount: trashedNotes.length,
            action: 'get_trashed_notes_success' 
        }, 'Trashed notes retrieved successfully');
        
        res.json(trashedNotes);
    } catch (error) {
        logger.error({ 
            uid: req.body.uid,
            error: (error as Error).message,
            action: 'get_trashed_notes_error' 
        }, 'Error fetching trashed notes');
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const recoverNote = async(req: Request, res: Response) => {
    try {
        const { id } = req.params; 
        logger.info({ 
            noteId: id, 
            action: 'recover_note_attempt' 
        }, 'Recovering note from trash');
        
        if (!id) {
            logger.warn({ 
                noteId: id, 
                action: 'recover_note_validation_failed' 
            }, 'Missing note ID');
            return res.status(400).json({ message: "Note ID is required" });
        }
        
        const recoveredNote = await prisma.note.update({
            where: { id: Number(id) },
            data: { 
                is_trashed: false,
                trashed_at: null 
            }
        });
        
        logger.info({ 
            noteId: recoveredNote.id, 
            action: 'recover_note_success' 
        }, 'Note recovered successfully');
        
        res.json(recoveredNote);
    } catch (error) {
        logger.error({ 
            noteId: req.params.id,
            error: (error as Error).message,
            action: 'recover_note_error' 
        }, 'Error recovering note');
        res.status(500).json({ message: 'Internal server error' });
    }
}