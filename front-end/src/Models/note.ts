export type Note = {
    id: number;
    title: string;
    folder_id: number;
    user_id: number;
    is_pinned: boolean;
    is_trash: boolean;
    is_shared: boolean;
    created_at: string;
    updated_at: string;
    content: JSON;

};

export type noteContextType = {
    getUserNotes: (folder_id: number) => Promise<void>;
    createNote: (noteTitle: string, folder_id: number) => Promise<void>;
    updateNote: (noteId: number, updatedNote: Partial<Note>) => Promise<void>;
    deleteNote: (noteId: number) => Promise<boolean>;
    forceDeleteNote: (noteId: number) => Promise<boolean>;
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}