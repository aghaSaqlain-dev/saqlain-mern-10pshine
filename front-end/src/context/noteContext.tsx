import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { noteContextType } from "../Models/note";
import { Note } from "../Models/note";
import { API_GET_NOTES, API_NOTE_DELETE_PERMANENTLY } from "../variables/APIS";
import { newlyCreatedNoteContent } from "../variables/Varibles";
// Add this import for toast
import { toast } from "react-toastify";

const noteContext = createContext<noteContextType>({} as any);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const getUserNotes = async (folderId: number) => {
    try {
      const userStr = localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      const userId = user?.userId;
      if (!userId) {
        return [];
      }
      const response = await axios.get(`${API_GET_NOTES}`, {
        params: { user_id: userId, folder_id: folderId }
      });
      setNotes(prevNotes => [
        ...prevNotes.filter(note => note.folder_id !== folderId),
        ...response.data
      ]);
      return response.data;
    } catch (error) {
      //toast.error("Failed to fetch notes");
      console.error("Failed to fetch notes", error);
      return [];
    }
  };

  const createNote = async (noteTitle: string, folder_id: number) => {
    try {
      const userStr = localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      const userId = user?.userId;
      if (!userId) {
        toast.error("User ID not found in localStorage");
        return null;
      }
      const noteData = {
        title: noteTitle,
        folder_id: folder_id,
        user_id: userId,
        content: newlyCreatedNoteContent()
      };
      const res = await axios.post(`${API_GET_NOTES}`, noteData);
      setNotes(prevNotes => [...prevNotes, res.data]);
      toast.success("Note created successfully");
      return res.data;
    } catch (error) {
      toast.error("Failed to create note");
      console.error("Failed to create note", error);
      return null;
    }
  };

  const updateNote = async (noteId: number, updatedNote: Partial<Note>) => {
    try {
      const res = await axios.patch(`${API_GET_NOTES}/${noteId}`, updatedNote);
      setNotes(prevNotes =>
        prevNotes.map(note =>
          note.id === noteId ? { ...note, ...updatedNote } : note
        )
      );
      //toast.success("Note updated successfully");
      return res.data;
    } catch (error) {
      toast.error("Failed to update note");
      console.error("Failed to update note", error);
      return null;
    }
  };

  const deleteNote = async (noteId: number) => {
    try {
      await axios.delete(`${API_GET_NOTES}/${noteId}`);
      setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
      toast.success("Note deleted successfully");
      return true;
    } catch (error) {
      toast.error("Failed to delete note");
      console.error("Failed to delete note", error);
      return false;
    }
  };

  const forceDeleteNote = async (noteId: number) => {
    try {
      await axios.delete(API_NOTE_DELETE_PERMANENTLY(noteId));
      setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId));
      toast.success("Note permanently deleted");
      return true;
    } catch (error) {
      toast.error("Failed to permanently delete note");
      console.error("Failed to force delete note", error);
      return false;
    }
  };

  return (
    <noteContext.Provider value={{ getUserNotes, createNote, updateNote, deleteNote, notes, setNotes, forceDeleteNote }}>
      {children}
    </noteContext.Provider>
  );
};

export const useNoteContext = () => useContext(noteContext)