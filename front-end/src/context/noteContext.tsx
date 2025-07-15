import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { noteContextType } from "../Models/note";
import { Note } from "../Models/note";
import { API_GET_NOTES } from "../variables/APIS";

const noteContext = createContext<noteContextType>({} as any);


export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
    const [notes, setNotes] = useState<Note[]>([]);

const getUserNotes = async (folderId: number) => {
  try {
    const userStr = localStorage.getItem("user");
    const user = userStr ? JSON.parse(userStr) : null;
    const userId = user?.userId;
    if (!userId) {
      console.error("User ID not found in localStorage");
      return [];
    }
    const response = await axios.get(`${API_GET_NOTES}`, {
      params: { user_id: userId, folder_id: folderId }
    });
    // Replace notes for this folder, keep others
    setNotes(prevNotes => [
      ...prevNotes.filter(note => note.folder_id !== folderId),
      ...response.data
    ]);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch notes", error);
    return [];
  }
};




  const createNote = async (note: Note) => {
    // Implement note creation logic here
    // Example: await axios.post('/api/notes/create', note);
  };

  const updateNote = async (noteId: number, updatedNote: Partial<Note>) => {
    try {
      const res = await axios.patch(`${API_GET_NOTES}/${noteId}`, updatedNote);
      setNotes(prevNotes =>
      prevNotes.map(note =>
        note.id === noteId ? { ...note, ...updatedNote } : note
      )
      );
      return res.data;
    } catch (error) {
      console.error("Failed to update note", error);
      return null;
    }
  };

  const deleteNote = async (noteId: number) => {
    // Implement note deletion logic here
    // Example: await axios.delete(`/api/notes/delete/${noteId}`);
  };

  return (
    <noteContext.Provider value={{ getUserNotes, createNote, updateNote, deleteNote, notes, setNotes }}>
      {children}
    </noteContext.Provider>
  );
};

export const useNoteContext = () => useContext(noteContext)