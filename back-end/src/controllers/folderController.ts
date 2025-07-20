import express, { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma';


const prisma = new PrismaClient();


// Create a new folder
const createFolder = async (req: Request, res: Response) => {
    const { name, user_id, domain } = req.body; 
    if (!name || !user_id || !domain) {
        return res.status(400).json({ message: "Name, user_id, and domain are required" });
    }
    try {
        const newFolder = await prisma.folder.create({
            data: {
                name,
                user_id: Number(user_id), // Ensure user_id is a number
                domain
            }
        });
        res.status(201);
    } catch (error) {
        console.error("Error creating folder:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get all folders or a specific folder by ID
const getFolders = async (req: Request, res: Response) => {
    try {
         const { id } = req.params;
    if (id) {
        const folder = await prisma.folder.findFirst({ where: { id: Number(id) } });
        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.json(folder);
    }else{
        const allFolders = await prisma.folder.findMany();
        // console.log(allFolders)
        res.json(allFolders);
    }
    } catch (error) {
        console.error("Error fetching folders:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
   
};

// Update a folder by ID
const updateFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, domain, user_id } = req.body;

    try {
        const updatedFolder = await prisma.folder.update({
            where: { id: Number(id) },
            data: {
                ...(name && { name }),
                ...(domain && { domain }),
                ...(user_id && { user_id: Number(user_id) }),
            },
        });
        res.json(updatedFolder);
    } catch (error) {
        console.error("Error updating folder:", error);
        if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a folder by ID
const deleteFolder = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await prisma.folder.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Folder deleted successfully" });
    } catch (error) {
        console.error("Error deleting folder:", error);
         if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};
export { createFolder, getFolders, updateFolder, deleteFolder };