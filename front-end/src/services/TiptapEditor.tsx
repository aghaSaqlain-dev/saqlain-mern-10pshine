import React, { useEffect } from 'react';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editorContext';
import { Note } from '../Models/note';

type TiptapEditorProps = {
  note: Note | null;
  editable: boolean;
  setIsDirty: (dirty: boolean) => void;
  onSave: (content: any) => void;
};

const TiptapEditor: React.FC<TiptapEditorProps> = ({ note, editable, setIsDirty, onSave }) => {
  const { editor } = useEditorContext();

  useEffect(() => {
    if (editor) {
      editor.setEditable(editable);
      if (note) {
        editor.commands.setContent(note.content || '');
      } else {
        editor.commands.setContent(''); 
      }
    }
  }, [note, editor, editable]);

  useEffect(() => {
    if (!editor) return;
    const updateHandler = () => setIsDirty(true);
    editor.on('update', updateHandler);
    return () => {
      editor.off('update', updateHandler);
    };
  }, [editor, setIsDirty]);

  // Add this effect for Ctrl+S
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        if (editor) {
          onSave(editor.getJSON()); // send JSON to backend
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [editor, onSave]);

  return (
    <div style={{ width: '100%', height: '100%',minHeight: '300px',maxWidth: '100%', // Add this
    overflow: 'hidden' }}>
      <EditorContent editor={editor} style={{
      minHeight: '400px',
      fontSize: '1.1rem',
      outline: 'none',
      padding: '8px',
      width: '100%', // Add this
      maxWidth: '100%', // Add this
      wordWrap: 'break-word', // Add this
      overflowWrap: 'break-word', // Add this
      boxSizing: 'border-box' // Add this
    }} />
    </div>
  );
};

export default TiptapEditor;