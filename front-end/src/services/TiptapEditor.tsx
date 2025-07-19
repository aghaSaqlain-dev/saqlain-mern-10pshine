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
  <div style={{ 
    width: '100%', 
    height: 'auto',
    minHeight: '300px',
    maxWidth: '100%',
    overflow: 'visible', // Keep this for pagination
    position: 'relative'
  }}>
    <EditorContent editor={editor} style={{
      width: '100%',
      maxWidth: '100%',
      minHeight: '400px',
      fontSize: '1.1rem',
      outline: 'none',
      // Remove padding - let pagination extension handle it
      wordWrap: 'break-word',
      overflowWrap: 'break-word',
      boxSizing: 'border-box'
    }} />
  </div>
);
}
export default TiptapEditor;