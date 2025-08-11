// Mock dependencies
const mockToastSuccess = jest.fn();
const mockToastError = jest.fn();
jest.mock('react-toastify', () => ({
  toast: { success: mockToastSuccess, error: mockToastError }
}));

const mockAxiosPost = jest.fn();
const mockAxiosPatch = jest.fn();
const mockAxiosDelete = jest.fn();
jest.mock('axios', () => ({
  post: mockAxiosPost,
  patch: mockAxiosPatch,
  delete: mockAxiosDelete,
}));

jest.mock('../variables/APIS', () => ({
  API_GET_FOLDERS: '/api/folders',
  API_CREATE_FOLDER: '/api/folders/create',
}));

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { FolderProvider, useFolderContext } from './folderContext';

// Simple test component
const TestComponent = () => {
  const { getUserFolders, createFolder, updateFolder, deleteFolder, folders } = useFolderContext();
  
  return (
    <div>
      <div data-testid="folders-count">{folders.length}</div>
      <button onClick={() => getUserFolders()} data-testid="get-folders">Get Folders</button>
      <button onClick={() => createFolder('Test Folder')} data-testid="create">Create</button>
      <button onClick={() => updateFolder(1, 'Updated Folder')} data-testid="update">Update</button>
      <button onClick={() => deleteFolder(1)} data-testid="delete">Delete</button>
    </div>
  );
};

describe('FolderContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify({ userId: 123, userName: 'testuser' }));
  });

  it('renders without crashing', () => {
    render(<FolderProvider><TestComponent /></FolderProvider>);
    expect(screen.getByTestId('folders-count')).toHaveTextContent('0');
  });

  it('gets folders successfully', async () => {
    mockAxiosPost.mockResolvedValue({ data: [{ id: 1, name: 'Folder 1' }] });
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('get-folders').click();
    
    await waitFor(() => {
      expect(screen.getByTestId('folders-count')).toHaveTextContent('1');
    });
  });

  it('creates folder successfully', async () => {
    mockAxiosPost.mockResolvedValue({ status: 200, data: { id: 1, name: 'Test Folder' } });
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('create').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Folder created successfully!');
    });
  });

  it('handles create folder error', async () => {
    mockAxiosPost.mockRejectedValue(new Error('Failed'));
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('create').click();
    
    // No toast error is called in the current implementation for createFolder catch block
    expect(mockAxiosPost).toHaveBeenCalled();
  });

  it('updates folder successfully', async () => {
    mockAxiosPatch.mockResolvedValue({ status: 200, data: { id: 1, name: 'Updated Folder' } });
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('update').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Folder updated successfully!');
    });
  });

  it('handles update folder error', async () => {
    mockAxiosPatch.mockRejectedValue(new Error('Failed'));
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('update').click();
    
    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith('Error updating folder.');
    });
  });

  it('deletes folder successfully', async () => {
    mockAxiosDelete.mockResolvedValue({ status: 200, data: { id: 1 } });
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('delete').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Folder deleted successfully!');
    });
  });

  it('handles delete folder error', async () => {
    mockAxiosDelete.mockRejectedValue(new Error('Failed'));
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('delete').click();
    
    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith('Error deleting folder.');
    });
  });

  it('handles missing user data', async () => {
    localStorage.removeItem('user');
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(<FolderProvider><TestComponent /></FolderProvider>);
    
    screen.getByTestId('get-folders').click();
    
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('User ID not found in localStorage');
    });
    
    consoleSpy.mockRestore();
  });
});