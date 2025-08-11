// Mock dependencies
const mockToastSuccess = jest.fn();
const mockToastError = jest.fn();
jest.mock('react-toastify', () => ({
  toast: { success: mockToastSuccess, error: mockToastError }
}));

const mockAxiosGet = jest.fn();
const mockAxiosPost = jest.fn();
const mockAxiosPatch = jest.fn();
const mockAxiosDelete = jest.fn();
jest.mock('axios', () => ({
  get: mockAxiosGet,
  post: mockAxiosPost,
  patch: mockAxiosPatch,
  delete: mockAxiosDelete,
}));

jest.mock('../variables/APIS', () => ({
  API_GET_NOTES: '/api/notes',
  API_NOTE_DELETE_PERMANENTLY: (id: number) => `/api/notes/${id}/permanent`,
  API_RECOVER_NOTE: (id: number) => `/api/notes/${id}/recover`,
  API_GET_TRASH_NOTES: '/api/notes/trash',
}));

jest.mock('../variables/Varibles', () => ({
  newlyCreatedNoteContent: jest.fn(() => 'Default content'),
}));

const mockFetch = jest.fn();
global.fetch = mockFetch;

import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { NoteProvider, useNoteContext } from './noteContext';

// Simple test component
const TestComponent = () => {
  const { getUserNotes, createNote, updateNote, deleteNote, forceDeleteNote, recoverNote, notes } = useNoteContext();
  
  return (
    <div>
      <div data-testid="notes-count">{notes.length}</div>
      <button onClick={() => getUserNotes(1)} data-testid="get-notes">Get Notes</button>
      <button onClick={() => createNote('Test', 1)} data-testid="create">Create</button>
      <button onClick={() => updateNote(1, { title: 'Updated' })} data-testid="update">Update</button>
      <button onClick={() => deleteNote(1)} data-testid="delete">Delete</button>
      <button onClick={() => forceDeleteNote(1)} data-testid="force-delete">Force Delete</button>
      <button onClick={() => recoverNote(1)} data-testid="recover">Recover</button>
    </div>
  );
};

describe('NoteContext', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
    localStorage.setItem('user', JSON.stringify({ userId: 123 }));
    localStorage.setItem('token', 'fake-token');
  });

  it('renders without crashing', () => {
    render(<NoteProvider><TestComponent /></NoteProvider>);
    expect(screen.getByTestId('notes-count')).toHaveTextContent('0');
  });

  it('gets notes successfully', async () => {
    mockAxiosGet.mockResolvedValue({ data: [{ id: 1, title: 'Note 1' }] });
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('get-notes').click();
    
    await waitFor(() => {
      expect(screen.getByTestId('notes-count')).toHaveTextContent('1');
    });
  });

  it('creates note successfully', async () => {
    mockAxiosPost.mockResolvedValue({ data: { id: 1, title: 'Test' } });
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('create').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Note created successfully');
    });
  });

  it('handles create note error', async () => {
    mockAxiosPost.mockRejectedValue(new Error('Failed'));
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('create').click();
    
    await waitFor(() => {
      expect(mockToastError).toHaveBeenCalledWith('Failed to create note');
    });
  });

  it('updates note successfully', async () => {
    mockAxiosPatch.mockResolvedValue({ data: { id: 1, title: 'Updated' } });
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('update').click();
    
    expect(mockAxiosPatch).toHaveBeenCalledWith('/api/notes/1', { title: 'Updated' });
  });

  it('deletes note successfully', async () => {
    mockAxiosDelete.mockResolvedValue({});
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('delete').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Note deleted successfully');
    });
  });

  it('force deletes note successfully', async () => {
    mockAxiosDelete.mockResolvedValue({});
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('force-delete').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Note permanently deleted');
    });
  });

  it('recovers note successfully', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ message: 'Recovered' })
    });
    render(<NoteProvider><TestComponent /></NoteProvider>);
    
    screen.getByTestId('recover').click();
    
    await waitFor(() => {
      expect(mockToastSuccess).toHaveBeenCalledWith('Note recovered successfully');
    });
  });

  
});