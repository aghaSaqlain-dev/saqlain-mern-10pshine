import express, { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'; 
const prisma = new PrismaClient();


// Create a new folder
const createFolder = async (req: Request, res: Response) => {
    // console.log("here")
    // console.log(req)
    const { name, user_id, domain } = req.body; 
    //console.log(name, user_id, domain)
    if (!name || !user_id || !domain) {
        return res.status(400).json({ message: "Name, user_id, and domain are required" });
    }
    try {
        const newFolder = await prisma.folder.create({
            data: {
                name,
                user_id: Number(user_id), 
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
        const { id, uid} = req.body;
    if (id && uid) {
        const folder = await prisma.folder.findFirst({ where: { id: Number(id), user_id: Number(uid) } });
        if (!folder) {
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.json(folder);
    }else if(uid){
        const allFolders = await prisma.folder.findMany({where: { user_id: Number(uid) }});
        // console.log(allFolders)
        res.json(allFolders);
    }
    else{
        throw new Error("Invalid request parameters");
    }
    } catch (error) {
        console.error("Error fetching folders:", error);
        return res.status(500).json({ message: "Internal server error" });
        
    }
   
};

// Update a folder by ID
const updateFolder = async (req: Request, res: Response) => {
    console.log("here")
    const { id } = req.params;
    const { domain} = req.body;
    console.log(req)
    console.log(id, domain)

    try {
        const updatedFolder = await prisma.folder.update({
            where: { id: Number(id) },
            data: {
                ...(domain && { domain }),
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
        //delete the notes associated with the folder first
        await prisma.note.deleteMany({
            where: { folder_id: Number(id) },
        });
        // Delete the folder
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

 