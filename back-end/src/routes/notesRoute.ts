import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  getAllNotes,
  getNoteById,
  createNote,
  pinNote,
  updateNote,
  deleteNote,
  forceDeleteNote,
  trashedNotes,
  recoverNote
}
  from '../controllers/notesController';
import { authenticate } from '../middlware/auth';

const router = express.Router();

router.get('/notes', authenticate, asyncHandler(getAllNotes)); // Get all notes
router.get('/notes/:id',authenticate,  asyncHandler(getNoteById)); // Get a specific note by ID
router.post('/notes',authenticate,  asyncHandler(createNote)); // Create a new note
router.post('/notes/:id/pin',authenticate,  asyncHandler(pinNote)); // pin/unpin a note
router.patch('/notes/:id/recover', authenticate, asyncHandler(recoverNote));
router.patch('/notes/:id',authenticate,  asyncHandler(updateNote)); // Update a specific note by ID
router.delete('/notes/:id',authenticate,  asyncHandler(deleteNote)); // Delete a specific note by ID
router.delete('/notes/:id/force',authenticate,  asyncHandler(forceDeleteNote)); // permanently delete a specific note by ID
router.post('/notes/trashed',authenticate, asyncHandler(trashedNotes))


export default router;
