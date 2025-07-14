import express  from "express";
import asyncHandler from "../utils/asyncHandler";
import { createFolder, getFolders, updateFolder, deleteFolder } from "../controllers/folderController";
import { authenticate } from '../middlware/auth';
const router = express.Router();


// Define routes for folder operations
router.post('/folders' ,asyncHandler(getFolders));
router.get('/folders/:id', authenticate, asyncHandler(getFolders));
router.post('/createFolder',authenticate, asyncHandler(createFolder));
router.patch('/folders/:id',  asyncHandler(updateFolder));
router.delete('/folders/:id', authenticate, asyncHandler(deleteFolder));



export default router;