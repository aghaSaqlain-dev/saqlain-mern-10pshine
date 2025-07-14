import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma'; 
const prisma = new PrismaClient();

// Get all notes
export const getAllNotes = async (req: Request, res: Response) => {
    try {
        console.log(req.query)
        console.log("here")
        const { user_id, folder_id } = req.query;
        console.log(req)
        console.log(user_id)
        console.log(folder_id)
        if(!user_id|| !folder_id) {
            return res.status(400).json({ message: "User ID and folder ID are required" });
        }
        const notes = await prisma.note.findMany({where: {
            //user should access only his own notes
            user_id: Number(user_id),
            folder_id: Number(folder_id)
        },});
        if(!notes || notes.length === 0) {
            return res.status(404).json({ message: "No notes found for this user and folder" });
        }
        res.status(201).json(notes);

    } catch (error) {
        console.error("Error fetching notes:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get a specific note by ID
export const getNoteById = async (req: Request, res: Response) => {
     try {
        const note_id = req.params.id;
        console.log(note_id)
        const { user_id, folder_id } = req.body;
        if(!user_id|| !folder_id) {
            return res.status(400).json({ message: "User ID and folder ID are required" });
        }
        const note = await prisma.note.findMany({where: {
            //user should access only his own notes
            user_id: Number(user_id),
            folder_id: Number(folder_id),
            id : Number(note_id)
        },});
        if(!note || note.length === 0) {
            return res.status(404).json({ message: "No note found for this id" });
        }
        res.status(201).json(note);

    } catch (error) {
        console.error("Error fetching notes:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Create a new note
export const createNote = async (req: Request, res: Response) => {
    try {
        const { title, content, folder_id, user_id } = req.body;
        if (!user_id || !folder_id) {
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
        res.status(201).json(note);
    } catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Pin/unpin a note
export const pinNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { pin } = req.body; // expects { "pin": true } or { "pin": false }
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: { is_pinned: !!pin },
        });
        res.json(note);
    } catch (error) {
        console.error("Error pinning/unpinning note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Restore a note from trash
export const restoreNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: { is_trashed: false },
        });
        res.json(note);
    } catch (error) {
        console.error("Error restoring note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Update a specific note by ID
export const updateNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, content, folder_id, is_pinned, is_trashed, is_shared } = req.body;
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
        res.json(note);
    } catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a specific note by ID (soft delete: move to trash)
export const deleteNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const note = await prisma.note.update({
            where: { id: Number(id) },
            data: { is_trashed: true },
        });
        res.json({ message: "Note moved to trash", note });
    } catch (error) {
        console.error("Error deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Permanently delete a specific note by ID
export const forceDeleteNote = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.note.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Note permanently deleted" });
    } catch (error) {
        console.error("Error force deleting note:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};