import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { EditorProvider, useEditorContext } from '../../context/editorContext';
import TiptapEditor from '../../services/TiptapEditor';
import MenuBar from '../editorMenuBar/menuBar';
import { FolderProvider } from '../../context/folderContext';
import './Dashboard.css';
import { NoteProvider, useNoteContext } from '../../context/noteContext';
import { Note } from '../../Models/note';

interface DashboardContentProps {
  selectedNote: Note | null;
  isDirty: boolean;
  setIsDirty: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardContent = ({ selectedNote, isDirty, setIsDirty }: DashboardContentProps) => {
  const { wordCount, pageCount } = useEditorContext();
  const isEditable = !!selectedNote;

  const {updateNote} = useNoteContext();
   return (
     <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%' // Add this
    }}>
      <MenuBar pageCount={pageCount} wordCount={wordCount} disabled={!isEditable} />
       <div style={{
        padding: '12px 18px 0 18px',
        fontWeight: 500,
        fontSize: '1.1em',
        color: '#2d3a4b',
        minHeight: '32px',
        flexShrink: 0 // Prevent this from shrinking
      }}>
        {selectedNote
          ? <>
              Working on: <span style={{ color: '#4b5c6b' }}>{selectedNote.title}</span>
              {isDirty && <span style={{ color: '#e67e22', marginLeft: 12 }}>(Unsaved changes)</span>}
            </>
          : <>No note selected</>
        }
      </div>
      <div style={{ 
  flex: 1, 
  overflow: 'auto', // Keep for scrolling between pages
  maxWidth: '100%',
  minWidth: 0,
  boxSizing: 'border-box',
  // Remove padding - let pagination extension handle page spacing
}}>
        <TiptapEditor
          note={selectedNote}
          editable={isEditable}
          setIsDirty={setIsDirty}
          onSave={async (content: JSON) => {
            // Save logic here
            console.log(content)
            if (selectedNote) {
              await updateNote(selectedNote.id, { content });
              setIsDirty(false);
            }
          }}
        />
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: '#f0f0f0' }}>
      <FolderProvider>
        <NoteProvider>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} setSelectedNote={setSelectedNote}/>
         <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100vh' }}>
       <EditorProvider>
    <DashboardContent
      selectedNote={selectedNote}
      isDirty={isDirty}
      setIsDirty={setIsDirty}
    />
  </EditorProvider>
      </div>
        </NoteProvider>
      </FolderProvider>
     
    </div>
  );
};

export default Dashboard;