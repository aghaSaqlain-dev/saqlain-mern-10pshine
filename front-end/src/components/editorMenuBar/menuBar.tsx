import React from 'react';
import ColorPicker from 'react-pick-color';
import { useEditorContext } from '../../context/editorContext';
import './menuBarStyle.css';
import { API_SUMMARIZE_NOTE } from '../../variables/APIS';
import { summary_instructions } from '../../variables/Varibles';

interface MenuBarProps {
  pageCount: number;
  wordCount: number;
  disabled: boolean;
}

const MenuBar: React.FC<MenuBarProps> = ({ pageCount, wordCount, disabled }) => {
  const { editor } = useEditorContext();
  const [showPicker, setShowPicker] = React.useState(false);
  const [highlightColor, setHighlightColor] = React.useState('#FFFF00');
  const [H, setH] = React.useState('H');
  const [summary, setSummary] = React.useState<string>(''); 
  const [isLoading, setIsLoading] = React.useState(false); 

  if (!editor) return null;

  return (
    <div className="control-group">
      <div className="button-group">
        {/* Text Style Group */}
        <button title="Bold"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >𝐁</button>
        <button title="Italic"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >𝘐</button>
        <button title="Strike"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >S̶</button>
        <button title="Code"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleCode().run()}
          className={editor.isActive('code') ? 'is-active' : ''}
        >{"</>"}</button>
        <span className="toolbar-separator" />
        {/* Clear */}
        <button title="Clear marks" disabled={disabled} onClick={() => editor.chain().focus().unsetAllMarks().run()}>🧹</button>
        <button title="Clear nodes" disabled={disabled} onClick={() => editor.chain().focus().clearNodes().run()}>❌</button>
        <span className="toolbar-separator" />

        {/* Paragraph/Headings */}
        <button title="Paragraph"
          disabled={disabled}
          onClick={() => {editor.chain().focus().setParagraph().run(); if (editor.isActive('paragraph')) setH('H');}}
          className={editor.isActive('paragraph') ? 'is-active' : ''}
        >¶</button>
        <div className="dropdown">
          <button className="dropdown-toggle" title="Headings" disabled={disabled}>
            {H} ▼
          </button>
          <div className="dropdown-menu">
            {[1, 2, 3, 4, 5, 6].map(level => (
              <button
                key={level}
                disabled={disabled}
                onClick={() => {editor.chain().focus().toggleHeading({ level: level as any }).run(); setH(`H${level}`);}}
                className={editor.isActive('heading', { level: level as any }) ? 'is-active' : ''}
              >{`H${level}`}</button>
            ))}
          </div>
        </div>
        <span className="toolbar-separator" />

        {/* Lists */}
        <button title="Bullet List"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >• List</button>
        <button title="Ordered List"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >1. List</button>
        <span className="toolbar-separator" />

        {/* Block */}
        <button title="Code Block"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >[Code]</button>
        <button title="Blockquote"
          disabled={disabled}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >❝</button>
        <span className="toolbar-separator" />

        {/* Horizontal/Break */}
        <button title="Horizontal Rule" disabled={disabled} onClick={() => editor.chain().focus().setHorizontalRule().run()}>―</button>
        <button title="Hard Break" disabled={disabled} onClick={() => editor.chain().focus().setHardBreak().run()}>↵</button>
        <span className="toolbar-separator" />

        {/* Undo/Redo */}
        <button title="Undo"
          disabled={disabled || !editor.can().chain().focus().undo().run()}
          onClick={() => editor.chain().focus().undo().run()}
        >⎌</button>
        <button title="Redo"
          disabled={disabled || !editor.can().chain().focus().redo().run()}
          onClick={() => editor.chain().focus().redo().run()}
        >⎌⎌</button>
        <span className="toolbar-separator" />

        {/* Highlight */}
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <button
            title="Pick Highlight Color"
            disabled={disabled}
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
                disabled={disabled}
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
          disabled={disabled}
          onClick={() => editor.chain().focus().unsetHighlight().run()}
        >🚫🖍️</button>
        <span className="toolbar-separator" />
        <div style={{ marginRight: 'auto', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span>Pages: <b>{pageCount}</b></span>
          <span>Words: <b>{wordCount}</b></span>
        <span className="toolbar-separator" />
           <div style={{ position: 'relative' }}>
            <button
              title="AI Summarizer"
              disabled={disabled || isLoading}
              onClick={async () => {
                if (!editor) return;
                setIsLoading(true);
                const content = editor.getJSON();
                try {
                  const response = await fetch(API_SUMMARIZE_NOTE, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ note_content: content, summary: summary_instructions }),
                  });
                  const data = await response.json();
                  if (data.summary) {
                    setSummary(data.summary);
                  } else {
                    setSummary('Failed to get summary.');
                  }
                } catch (err) {
                  setSummary('Error contacting summarizer.');
                } finally {
                  setIsLoading(false);
                }
              }}
            >
              {isLoading ? '⏳ Loading...' : '🤖 Summarize'}
            </button>
            
            {/* Summary Box */}
            {summary && (
              <div className="summary-box">
                <div className="summary-header">
                  <span>📋 Summary</span>
                  <button 
                    className="close-btn"
                    onClick={() => setSummary('')}
                    title="Close summary"
                  >
                    ✕
                  </button>
                </div>
                <div className="summary-content">
                  {summary}
                </div>
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
  );
};

export default MenuBar;