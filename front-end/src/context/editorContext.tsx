import React, { createContext, useContext } from 'react';
import { useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { Highlight } from '../Helpers/highlight';

type EditorContextType = {
  editor: Editor | null;
};

const EditorContext = createContext<EditorContextType>({ editor: null });

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,   
      Color,
      Highlight.configure({multicolor: true}),
      Placeholder.configure({
        placeholder: 'Start taking notes...',
      }),
    ],
    content: '',
    autofocus: true,
    editable: true,
  });

  return (
    <EditorContext.Provider value={{ editor }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);