   // Extract text content from JSON content structure
   export const getTextContent = (content: any): string => {
        if (!content) return 'No content available';
        
        try {
            // Handle empty array
            if (Array.isArray(content) && content.length === 0) {
                return 'Empty note';
            }
            
            // Handle string content
            if (typeof content === 'string') {
                return content.trim() || 'Empty note';
            }
            
            // Handle document structure recursively
            if (typeof content === 'object' && content.type === 'doc' && content.content) {
                const extractText = (node: any): string => {
                    let textContent = '';
                    
                    // Direct text node
                    if (node?.text && typeof node.text === 'string') {
                        return node.text;
                    }
                    
                    // Node with content array
                    if (node?.content && Array.isArray(node.content)) {
                        for (const child of node.content) {
                            const childText = extractText(child);
                            if (childText) {
                                textContent += childText + ' ';
                            }
                        }
                    }
                    
                    return textContent.trim();
                };
                
                const extractedText = extractText(content);
                return extractedText || 'Empty note';
            }
            
            // Fallback for other JSON formats
            if (typeof content === 'object') {
                const jsonString = JSON.stringify(content);
                return jsonString.length > 50 ? jsonString.substring(0, 50) + '...' : jsonString;
            }
            
            return 'Content format not supported';
        } catch (error) {
            console.error('Error extracting text content:', error);
            return 'Content preview unavailable';
        }
    };