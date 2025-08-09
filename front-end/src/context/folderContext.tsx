import { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { folderContextType, Folder } from "../Models/folder";
import axios from 'axios';
import { API_GET_FOLDERS , API_CREATE_FOLDER } from "../variables/APIS";
import {toast} from 'react-toastify';


const folderContext = createContext<folderContextType>({} as folderContextType);

export const FolderProvider = ({ children }: { children: ReactNode }) => {
   const [folders, setFolders] = useState<Folder[]>([]);

   const getUserFolders = async () => {
      try {
         const userStr = localStorage.getItem("user");
         const user = userStr ? JSON.parse(userStr) : null;
         const userId = user?.userId;
         if (!userId) {
            console.error("User ID not found in localStorage");
            return;
         }
         const response = await axios.post(API_GET_FOLDERS, { uid: userId });
         setFolders(response.data);
      } catch (error) {
         console.error("Failed to fetch folders", error);
      }
   };

   const createFolder = async (folderName: string) => {
      try {
         const userStr = localStorage.getItem("user");
         const user = userStr ? JSON.parse(userStr) : null;
         const userId = user?.userId;
         const userName = user?.userName;
         if (!userId && userName) {
            console.error("User ID and name not found in localStorage");
            toast.error("User ID and name not found.");
            return;
         }
         const response = await axios.post(API_CREATE_FOLDER, {
            name: userName,
            domain: folderName,
            user_id: userId
         });
         if (response.status === 200) {
            toast.success("Folder created successfully!");
            console.log("Folder created successfully:", response.data);
         } else {
            toast.error("Failed to create folder.");
            console.error("Failed to create folder:", response.data);
         }
      } catch (error) {
         console.error("Error creating folder:", error);
      }
   };

   const updateFolder = async (folderId: number, folderNewName: string) => {
      try {
         const response = await axios.patch(`${API_GET_FOLDERS}/${folderId}`, { domain: folderNewName });
         if (response.status === 200) {
            toast.success("Folder updated successfully!");
            console.log("Folder updated successfully:", response.data);
            setFolders((prevFolders) =>
               prevFolders.map((folder) =>
                  folder.id === folderId ? { ...folder, ...response.data } : folder
               )
            );
         } else {
            toast.error("Failed to update folder.");
            console.error("Failed to update folder:", response.data);
         }
      } catch (error) {
         toast.error("Error updating folder.");
         console.error("Error updating folder:", error);
      }
   };

   const deleteFolder = async (folderId: number) => {
      try {
         const response = await axios.delete(`${API_GET_FOLDERS}/${folderId}`);
         if (response.status === 200) {
            toast.success('Folder deleted successfully!');
            console.log("Folder deleted successfully:", response.data);
            setFolders((prevFolders) =>
               prevFolders.filter((folder) => folder.id !== folderId)
            );
         } else {
            toast.error('Failed to delete folder.');
            console.error("Failed to delete folder:", response.data);
         }
      } catch (error) {
         toast.error('Error deleting folder.');
         console.error("Error deleting folder:", error);
      }
   };


   const contextValue = useMemo(
      () => ({
         folders,
         setFolders,
         getUserFolders,
         createFolder,
         updateFolder,
         deleteFolder
      }) as folderContextType,
      [folders, setFolders, getUserFolders, createFolder, updateFolder, deleteFolder]
   );

   return (
      <folderContext.Provider value={contextValue}>
         {children}
      </folderContext.Provider>
   );
};

export const useFolderContext = () => useContext(folderContext);