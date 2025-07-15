import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { EditorProvider, useEditorContext } from '../../context/editorContext';
import TiptapEditor from '../../services/TiptapEditor';
import MenuBar from '../editorMenuBar/menuBar';
import { FolderProvider } from '../../context/folderContext';
import './Dashboard.css';
import { NoteProvider } from '../../context/noteContext';
import { Note } from '../../Models/note';

interface DashboardContentProps {
  selectedNote: Note | null;
}

const DashboardContent = ({ selectedNote }: DashboardContentProps) => {
  const { wordCount, pageCount } = useEditorContext();
  const isEditable = !!selectedNote;

  return (
    <>
      <div style={{
        padding: '12px 18px 0 18px',
        fontWeight: 500,
        fontSize: '1.1em',
        color: '#2d3a4b',
        minHeight: '32px'
      }}>
        {selectedNote
          ? <>Working on: <span style={{ color: '#4b5c6b' }}>{selectedNote.title}</span>
          </>
          : <>No note selected</>
        }
      </div>
      <MenuBar pageCount={pageCount} wordCount={wordCount} disabled={!isEditable} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <TiptapEditor note={selectedNote} editable={isEditable} />
      </div>
    </>
  );
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f0f0f0' }}>
      <FolderProvider>
        <NoteProvider>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} setSelectedNote={setSelectedNote}/>
        </NoteProvider>
      </FolderProvider>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <EditorProvider>
          <DashboardContent selectedNote={selectedNote}/>
        </EditorProvider>
      </div>
    </div>
  );
};

export default Dashboard;