import React from 'react';
import { EditorContent } from '@tiptap/react';
import { useEditorContext } from '../context/editorContext';

const TiptapEditor: React.FC = () => {
  const { editor } = useEditorContext();

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