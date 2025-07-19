import React, { createContext, useContext, useState } from 'react';
import { useEditor, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { Highlight } from '../Helpers/highlight';
import '../App.css'
import PaginationExtension, { PageNode, HeaderFooterNode, BodyNode } from "tiptap-extension-pagination";

type EditorContextType = {
  editor: Editor | null;
  wordCount: number;
  pageCount: number;
};
const EditorContext = createContext<EditorContextType>({ editor: null, wordCount: 0, pageCount: 1 });

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wordCount, setWordCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  
  
  const editor = useEditor({
    extensions: [
    StarterKit,
    TextStyle,
    Color,
    Highlight.configure({ multicolor: true }),
    Placeholder.configure({
      placeholder: 'Start taking notes...',
      showOnlyWhenEditable: true,
      includeChildren: true,
    }),
    PaginationExtension.configure({
      defaultPaperSize: 'A4',
      pageAmendmentOptions: {
        enableHeader: false,
        enableFooter: false,
      }
    }),
    PageNode,
    HeaderFooterNode,
    BodyNode,
  ],
    content: '',
    autofocus: true,
    editable: true,
     onUpdate({ editor }) {
  // Word count
  const text = editor.getText();
  const words = text.trim().split(/\s+/).filter(Boolean);
  setWordCount(words.length);

  // Page count - Use correct selector for pagination extension
  const pages = editor.view.dom.querySelectorAll('[data-page-body="true"]').length;
  setPageCount(pages || 1);
},
  });

  return (
    <EditorContext.Provider value={{ editor, wordCount, pageCount}}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext);