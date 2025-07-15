import React, { useEffect } from 'react';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editorContext';
import { Note } from '../Models/note';

type TiptapEditorProps = {
  note: Note | null;
  editable: boolean;
};

const TiptapEditor: React.FC<TiptapEditorProps> = ({ note, editable }) => {
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

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <EditorContent editor={editor} style={{
        minHeight: '400px',
        fontSize: '1.1rem',
        outline: 'none',
        padding: '8px',
      }} />
    </div>
  );
};

export default TiptapEditor;