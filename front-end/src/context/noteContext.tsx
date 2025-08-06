import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { noteContextType } from "../Models/note";
import { Note } from "../Models/note";
import { API_GET_NOTES, API_NOTE_DELETE_PERMANENTLY, API_GET_TRASH_NOTES } from "../variables/APIS";
import { newlyCreatedNoteContent } from "../variables/Varibles";
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

  const fetchTrashedNotes = async (): Promise<Note[]> => {
    try {
      const token = localStorage.getItem('token');
      const userStr = localStorage.getItem("user");
      const user = userStr ? JSON.parse(userStr) : null;
      const uid = user?.userId;
       if (!uid) {
        toast.error("User ID not found in localStorage");
        throw new Error("User ID not found in localStorage");
      }
      const response = await fetch(API_GET_TRASH_NOTES, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ uid })
      });

        if (response.ok) {
            const data = await response.json();
            console.log(data)
            return data;
        } else {
            throw new Error('Failed to fetch trashed notes');
        }
    } catch (error) {
        console.error('Error fetching trashed notes:', error);
        throw error;
    }
};

const recoverNote = async (noteId: number): Promise<void> => {
    try {
        const token = localStorage.getItem('token'); // Fix: use 'token' instead of 'authToken'

        const response = await fetch(`/api/notes/${noteId}/recover`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to recover note');
        }
        
        toast.success("Note recovered successfully");
    } catch (error) {
        console.error('Error recovering note:', error);
        toast.error("Failed to recover note");
        throw error;
    }
};

  return (
    <noteContext.Provider value={{ getUserNotes, createNote, updateNote, deleteNote, notes, setNotes, forceDeleteNote, fetchTrashedNotes, recoverNote }}>
      {children}
    </noteContext.Provider>
  );
};

export const useNoteContext = () => useContext(noteContext)