import  { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'; 
import logger from '../utils/logger';

const prisma = new PrismaClient();


const createFolder = async (req: Request, res: Response) => {
    logger.info({ action: 'create_folder_attempt', body: req.body }, 'Attempting to create folder');
    
    const { name, user_id, domain } = req.body; 
    
    if (!name || !user_id || !domain) {
        logger.warn({ name, user_id, domain }, 'Missing required fields for folder creation');
        return res.status(400).json({ message: "Name, user_id, and domain are required" });
    }
    
    try {
        logger.info({ name, user_id, domain }, 'Creating folder with valid data');
        
        const newFolder = await prisma.folder.create({
            data: {
                name,
                user_id: Number(user_id), 
                domain
            }
        });
        
        logger.info({ folderId: newFolder.id, name }, 'Folder created successfully');
        return res.status(201).json(newFolder);
    } catch (error) {
        logger.error({ error: (error as Error).message, name, user_id, domain }, 'Error creating folder');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get all folders or a specific folder by ID
const getFolders = async (req: Request, res: Response) => {
    logger.info({ action: 'get_folders_attempt', body: req.body }, 'Attempting to fetch folders');
    
    try {
        const { id, uid } = req.body;
        
        if (id && uid) {
            logger.info({ id, uid }, 'Fetching single folder');
            
            const folder = await prisma.folder.findFirst({ 
                where: { id: Number(id), user_id: Number(uid) } 
            });
            
            if (!folder) {
                logger.warn({ id, uid }, 'Folder not found');
                return res.status(404).json({ message: "Folder not found" });
            }
            
            logger.info({ folderId: folder.id }, 'Single folder retrieved successfully');
            return res.json(folder);
            
        } else if (uid) {
            logger.info({ uid }, 'Fetching all folders for user');
            
            const allFolders = await prisma.folder.findMany({
                where: { user_id: Number(uid) }
            });
            
            logger.info({ count: allFolders.length, uid }, 'All folders retrieved successfully');
            return res.json(allFolders);
            
        } else {
            logger.warn({ id, uid }, 'Invalid request parameters');
            throw new Error("Invalid request parameters");
        }
    } catch (error) {
        logger.error({ error: (error as Error) }, 'Error fetching folders');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Update a folder by ID
const updateFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { domain } = req.body;
    
    logger.info({ id, domain, action: 'update_folder_attempt' }, 'Attempting to update folder');

    try {
        const updatedFolder = await prisma.folder.update({
            where: { id: Number(id) },
            data: {
                ...(domain && { domain }),
            },
        });
        
        logger.info({ folderId: id, domain }, 'Folder updated successfully');
        return res.json(updatedFolder);
    } catch (error) {
        logger.error({ error: (error as Error).message, id, domain }, 'Error updating folder');

        if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            logger.warn({ id }, 'Folder not found for update');
            return res.status(404).json({ message: "Folder not found" });
        }
        
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a folder by ID
const deleteFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    logger.info({ id, action: 'delete_folder_attempt' }, 'Attempting to delete folder');

    try {
        // Delete associated notes first
        const deletedNotes = await prisma.note.deleteMany({
            where: { folder_id: Number(id) },
        });
        
        logger.info({ 
            folderId: id, 
            deletedNotesCount: deletedNotes.count,
            action: 'delete_folder_notes' 
        }, 'Associated notes deleted');
        
        // Delete the folder
        await prisma.folder.delete({
            where: { id: Number(id) },
        });
        
        logger.info({ folderId: id }, 'Folder deleted successfully');
        return res.json({ message: "Folder deleted successfully" });
    } catch (error) {
        logger.error({ error: (error as Error).message, id }, 'Error deleting folder');
        
        if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            logger.warn({ id }, 'Folder not found for deletion');
            return res.status(404).json({ message: "Folder not found" });
        }
        
        return res.status(500).json({ message: "Internal server error" });
    }
};
export { createFolder, getFolders, updateFolder, deleteFolder };

 