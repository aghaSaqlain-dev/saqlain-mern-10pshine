import express from 'express';
import asyncHandler from '../utils/asyncHandler';
import {
  getAllNotes,
  getNoteById,
  createNote,
  pinNote,
  restoreNote,
  updateNote,
  deleteNote,
  forceDeleteNote}
  from '../controllers/notesController';


const router = express.Router();

router.get('/notes',asyncHandler(getAllNotes)); // Get all notes
router.get('/notes/:id', asyncHandler(getNoteById)); // Get a specific note by ID
router.post('/notes', asyncHandler(createNote)); // Create a new note
router.post('/notes/:id/pin', asyncHandler(pinNote)); // pin/unpin a note
router.post('/notes/:id/restore',asyncHandler(restoreNote)); // retore from trash
router.patch('/notes/:id', asyncHandler(updateNote)); // Update a specific note by ID
router.delete('/notes/:id', asyncHandler(deleteNote)); // Delete a specific note by ID
router.delete('/notes/:id/force', asyncHandler(forceDeleteNote)); // permanently delete a specific note by ID


export default router;
