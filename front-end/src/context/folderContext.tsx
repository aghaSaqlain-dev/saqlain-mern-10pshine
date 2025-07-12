import { createContext, useContext, useState, ReactNode, use } from "react";
import { folderContextType, Folder } from "../Models/folder";
import axios from 'axios';
import { API_GET_FOLDERS , API_CREATE_FOLDER } from "../variables/APIS";

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
         const response = await axios.post(API_GET_FOLDERS, {uid: userId } );
         // console.log(response.data);
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
         console.log(userStr, userId, userName);
         if (!userId && userName) {
            console.error("User ID and name not found in localStorage");   
            return;
         }
         const response = await axios.post(API_CREATE_FOLDER, {
            name: userName,
            domain: folderName,
            user_id: userId
         });
         if (response.status === 200) {
            console.log("Folder created successfully:", response.data);
         } else {
            console.error("Failed to create folder:", response.data);
         }
      } catch (error) {
         console.error("Error creating folder:", error);
      }
   };
   const updateFolder = async (folderId: number, folderNewName: string) => {
      try {
         const response = await axios.patch(`${API_GET_FOLDERS}/${folderId}`, {domain: folderNewName});
         if (response.status === 200) {
            console.log("Folder updated successfully:", response.data);
              
            setFolders((prevFolders) =>
               prevFolders.map((folder) =>
                  folder.id === folderId ? { ...folder, ...response.data } : folder
               )
            );
            
         } else {
            console.error("Failed to update folder:", response.data);
         }
      } catch (error) {
         console.error("Error updating folder:", error);
      }
   };
   return (
      <folderContext.Provider value={{ folders,setFolders, getUserFolders, createFolder, updateFolder } as folderContextType}>
         {children}
      </folderContext.Provider>
   );
};

export const useFolderContext = () => useContext(folderContext);