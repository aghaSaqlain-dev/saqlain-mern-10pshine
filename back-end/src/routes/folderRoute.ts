

import express  from "express";
import asyncHandler from "../utils/asyncHandler";
import { createFolder, getFolders, updateFolder, deleteFolder } from "../controllers/folderController";

const router = express.Router();


// Define routes for folder operations
router.get('/folders', asyncHandler(getFolders)); //get all folders
router.get('/folders/:id', asyncHandler(getFolders)); //get a specific folder by ID
router.post('/folders', asyncHandler(createFolder)); // create one
router.patch('/folders/:id', asyncHandler(updateFolder)); //update a specific folder by ID
router.delete('/folders/:id', asyncHandler(deleteFolder)); //del by id



export default router;