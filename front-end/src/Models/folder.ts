export type folderContextType = {
  folders: Folder[];
  getUserFolders: () => Promise<void>;
  createFolder: (folderName: string) => Promise<void>;
  setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
  updateFolder: (folderId: number, newName: string) => Promise<void>;


};
export interface Folder {
  id: number;
  name: string;
  domain: string;
  user_id: number;
  created_at: string;
  updated_at: string;
}