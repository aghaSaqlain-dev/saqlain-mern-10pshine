import React from 'react';
import ColorPicker from 'react-pick-color';
import { useEditorContext } from '../../context/editorContext';
import './menuBarStyle.css';

interface MenuBarProps {
  pageCount: number;
  wordCount: number;
}

const MenuBar: React.FC<MenuBarProps> = ({ pageCount, wordCount }) => {
  const { editor } = useEditorContext();
  const [showPicker, setShowPicker] = React.useState(false);
  const [highlightColor, setHighlightColor] = React.useState('#FFFF00');
  const [H, setH] = React.useState('H');
  if (!editor) return null;

  return (
    <div className="control-group">
      <div className="button-group">
        {/* Text Style Group */}
        <button title="Bold"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >𝐁</button>
        <button title="Italic"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >𝘐</button>
        <button title="Strike"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >S̶</button>
        <button title="Code"
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >{"</>"}</button>
        <span className="toolbar-separator" />
        {/* Clear */}
        <button title="Clear marks" onClick={() => editor.chain().focus().unsetAllMarks().run()}>🧹</button>
        <button title="Clear nodes" onClick={() => editor.chain().focus().clearNodes().run()}>❌</button>
        <span className="toolbar-separator" />

        {/* Paragraph/Headings */}
        <button title="Paragraph"
          onClick={() => {editor.chain().focus().setParagraph().run(); if (editor.isActive('paragraph')) setH('H');}}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >¶</button>
         <div className="dropdown">
          <button className="dropdown-toggle" title="Headings">
            {H} ▼
          </button>
          <div className="dropdown-menu">
            {[1, 2, 3, 4, 5, 6].map(level => (
              <button
                key={level}
                onClick={() => {editor.chain().focus().toggleHeading({ level: level as any }).run(); setH(`H${level}`);}}
                className={editor.isActive('heading', { level: level as any }) ? 'is-active' : ''}
              >{`H${level}`}</button>
            ))}
          </div>
        </div>
        <span className="toolbar-separator" />

        {/* Lists */}
        <button title="Bullet List"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >• List</button>
        <button title="Ordered List"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >1. List</button>
        <span className="toolbar-separator" />

        {/* Block */}
        <button title="Code Block"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >[Code]</button>
        <button title="Blockquote"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >❝</button>
        <span className="toolbar-separator" />

        {/* Horizontal/Break */}
        <button title="Horizontal Rule" onClick={() => editor.chain().focus().setHorizontalRule().run()}>―</button>
        <button title="Hard Break" onClick={() => editor.chain().focus().setHardBreak().run()}>↵</button>
        <span className="toolbar-separator" />

        {/* Undo/Redo */}
        <button title="Undo"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
        >⎌</button>
        <button title="Redo"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
        >⎌⎌</button>
        <span className="toolbar-separator" />

        {/* Highlight */}
       <div style={{ position: 'relative', display: 'inline-block' }}>
  <button
    title="Pick Highlight Color"
    style={{ background: highlightColor, border: '1px solid #ccc', marginRight: 8 }}
    className={showPicker ? 'is-active' : ''}
    onClick={() => setShowPicker(v => !v)}
  >
    🖍️
  </button>
  {showPicker && (
    <div style={{ position: 'absolute', zIndex: 100 }}>
      <ColorPicker color={highlightColor} onChange={col => setHighlightColor(col.hex)} />
      <button
        style={{ marginTop: 8, width: '100%' }}
        onClick={() => {
          editor.chain().focus().setHighlight({ color: highlightColor }).run();
          setShowPicker(false);
        }}
      >
        Apply Highlight
      </button>
    </div>
  )}
</div>
        <button title="Remove Highlight"
          onClick={() => editor.chain().focus().unsetHighlight().run()}
        >🚫🖍️</button>
        <span className="toolbar-separator" />
        <div style={{ marginRight: 'auto', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span>Pages: <b>{pageCount}</b></span>
          <span>Words: <b>{wordCount}</b></span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;