import express  from "express";
import asyncHandler from "../utils/asyncHandler";
import { createFolder, getFolders, updateFolder, deleteFolder } from "../controllers/folderController";
import { authenticate } from '../middlware/auth';
const router = express.Router();


// Define routes for folder operations
router.get('/folders', authenticate, asyncHandler(getFolders));
router.get('/folders/:id', authenticate, asyncHandler(getFolders));
router.post('/folders', authenticate, asyncHandler(createFolder));
router.patch('/folders/:id', authenticate, asyncHandler(updateFolder));
router.delete('/folders/:id', authenticate, asyncHandler(deleteFolder));



export default router;