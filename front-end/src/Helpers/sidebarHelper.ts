export const handleRenameInputKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>, 
  folderId: number,
  handleRenameFolder: (id: number) => void,
  setRenamingId: (id: number | null) => void,
  setRenameValue: (value: string) => void
) => {
  if (e.key === 'Enter') {
    handleRenameFolder(folderId);
  }
  if (e.key === 'Escape') {
    setRenamingId(null);
    setRenameValue('');
  }
};

export const handleInputKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  handleCreateFolder: () => void,
  setCreating: (creating: boolean) => void,
  setNewFolderName: (name: string) => void
) => {
  if (e.key === 'Enter') {
    handleCreateFolder();
  }
  if (e.key === 'Escape') {
    setCreating(false);
    setNewFolderName('');
  }
};

export const handleNoteKeyDown = (
  e: React.KeyboardEvent<HTMLInputElement>,
  folderId: number,
  handleCreateNote: (folderId: number) => void,
  setCreatingNoteFolderId: (id: number | null) => void
) => {
  if (e.key === 'Enter') handleCreateNote(folderId);
  if (e.key === 'Escape') setCreatingNoteFolderId(null);
};