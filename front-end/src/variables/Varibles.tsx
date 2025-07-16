const folderLogo = () => {
   return (
        <span className="sidebar-folder-icon" style={{ fontSize: '1.3em', color: '#1976d2', marginRight: '6px' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7a2 2 0 0 1 2-2h4.5a2 2 0 0 1 1.6.8l1.1 1.4H19a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="#1976d2"/>
                  <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-6.2l-1.1-1.4A2 2 0 0 0 9.5 5H5a2 2 0 0 0-2 2z" stroke="#1565c0" strokeWidth="1"/>
                  </svg>
                </span>
    );
}
export function newlyCreatedNoteContent(): Record<string, any> {
  const content = {
    "type": "doc",
    "content": [
      {
        "type": "paragraph",
        "content": [
          {
            "text": "Hello, this is the coolest note taking app!",
            "type": "text"
          }
        ]
      }
    ]
  };
  return content;
}


export default folderLogo;