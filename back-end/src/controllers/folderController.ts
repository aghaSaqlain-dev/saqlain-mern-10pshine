import express, { Request, Response } from "express";
import { PrismaClient } from '../../generated/prisma'; 
import logger from '../utils/logger';

const prisma = new PrismaClient();

// Create a new folder
const createFolder = async (req: Request, res: Response) => {
    const { name, user_id, domain } = req.body; 
    
    logger.info({ name, user_id, domain, action: 'create_folder_attempt' }, 'Creating new folder');
    
    if (!name || !user_id || !domain) {
        logger.warn({ name, user_id, domain, action: 'create_folder_validation_failed' }, 'Missing required fields');
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
        
        logger.info({ 
            folderId: newFolder.id, 
            name, 
            user_id: Number(user_id), 
            domain,
            action: 'create_folder_success' 
        }, 'Folder created successfully');
        
        res.status(201).json(newFolder);
    } catch (error) {
        logger.error({ 
            name, 
            user_id, 
            domain,
            error: (error as Error).message,
            action: 'create_folder_error' 
        }, 'Error creating folder');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Get all folders or a specific folder by ID
const getFolders = async (req: Request, res: Response) => {
    const { id, uid } = req.body;
    
    logger.info({ id, uid, action: 'get_folders_attempt' }, 'Fetching folders');
    
    try {
        if (id && uid) {
            logger.info({ id, uid, action: 'get_single_folder' }, 'Fetching specific folder');
            
            const folder = await prisma.folder.findFirst({ 
                where: { id: Number(id), user_id: Number(uid) } 
            });
            
            if (!folder) {
                logger.warn({ id, uid, action: 'get_folder_not_found' }, 'Folder not found');
                return res.status(404).json({ message: "Folder not found" });
            }
            
            logger.info({ 
                folderId: folder.id, 
                userId: uid, 
                action: 'get_folder_success' 
            }, 'Folder retrieved successfully');
            
            return res.json(folder);
            
        } else if (uid) {
            logger.info({ uid, action: 'get_all_folders' }, 'Fetching all folders for user');
            
            const allFolders = await prisma.folder.findMany({
                where: { user_id: Number(uid) }
            });
            
            logger.info({ 
                userId: uid, 
                folderCount: allFolders.length, 
                action: 'get_folders_success' 
            }, 'All folders retrieved successfully');
            
            res.json(allFolders);
        } else {
            logger.warn({ id, uid, action: 'get_folders_invalid_params' }, 'Invalid request parameters');
            throw new Error("Invalid request parameters");
        }
    } catch (error) {
        logger.error({ 
            id, 
            uid, 
            error: (error as Error).message,
            action: 'get_folders_error' 
        }, 'Error fetching folders');
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Update a folder by ID
const updateFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { domain } = req.body;
    
    logger.info({ id, domain, action: 'update_folder_attempt' }, 'Updating folder');
    
    try {
        const updatedFolder = await prisma.folder.update({
            where: { id: Number(id) },
            data: {
                ...(domain && { domain }),
            },
        });
        
        logger.info({ 
            folderId: updatedFolder.id, 
            domain, 
            action: 'update_folder_success' 
        }, 'Folder updated successfully');
        
        res.json(updatedFolder);
    } catch (error) {
        logger.error({ 
            id, 
            domain, 
            error: (error as Error).message,
            action: 'update_folder_error' 
        }, 'Error updating folder');
        
        if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            logger.warn({ id, action: 'update_folder_not_found' }, 'Folder not found for update');
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Delete a folder by ID
const deleteFolder = async (req: Request, res: Response) => {
    const { id } = req.params;
    
    logger.info({ id, action: 'delete_folder_attempt' }, 'Deleting folder');
    
    try {
        // Delete the notes associated with the folder first
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
        
        logger.info({ 
            folderId: id, 
            deletedNotesCount: deletedNotes.count,
            action: 'delete_folder_success' 
        }, 'Folder and associated notes deleted successfully');
        
        res.json({ message: "Folder deleted successfully" });
    } catch (error) {
        logger.error({ 
            id, 
            error: (error as Error).message,
            action: 'delete_folder_error' 
        }, 'Error deleting folder');
        
        if (typeof error === 'object' && error !== null && 'code' in error && (error as any).code === 'P2025') {
            logger.warn({ id, action: 'delete_folder_not_found' }, 'Folder not found for deletion');
            return res.status(404).json({ message: "Folder not found" });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
};

export { createFolder, getFolders, updateFolder, deleteFolder };