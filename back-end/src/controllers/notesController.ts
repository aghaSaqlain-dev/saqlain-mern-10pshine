import { Request, Response } from 'express';
import { PrismaClient } from '../../generated/prisma';    

const prisma = new PrismaClient();

// Get all notes
export const getAllNotes = async (req: Request, res: Response) => {
    try {
        const { user_id, folder_id } = req.body;
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

        res.status(201).json(notes);

    } catch (error) {
        console.error("Error fetching notes:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get a specific note by ID
export const getNoteById = async (req: Request, res: Response) => {};

// Create a new note
export const createNote = async (req: Request, res: Response) => {};

// Pin/unpin a note
export const pinNote = async (req: Request, res: Response) => {};

// Restore a note from trash
export const restoreNote = async (req: Request, res: Response) => {};

// Update a specific note by ID
export const updateNote = async (req: Request, res: Response) => {};

// Delete a specific note by ID
export const deleteNote = async (req: Request, res: Response) => {};

// Permanently delete a specific note by ID
export const forceDeleteNote = async (req: Request, res: Response) => {};