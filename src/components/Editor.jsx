import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import EmojiPickerReact from 'emoji-picker-react'; // Emoji picker library
import EmojiPicker from '../extensions/EmojiPicker'; // Custom Tiptap extension for emoji insertion

const Editor = () => {
  const [isPickerVisible, setIsPickerVisible] = useState(false);

  // Initialize Tiptap editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      EmojiPicker, // Add custom EmojiPicker extension
    ],
    content: '<p>Type something and add emojis! 😄</p>',
  });

  // Handle emoji selection from the picker
  const handleEmojiSelect = (emojiObject,event) => {
    // Debug: log the emoji object and ensure it has the correct data
    console.log('Emoji selected:', emojiObject);
    console.log('Emoji selected:', emojiObject.emoji);


    // Insert the selected emoji into the editor at the current cursor position
    if (editor) {
        // Use insertContent to ensure the emoji is added to the editor content
        editor.chain().focus().insertContent(emojiObject.emoji).run();
        console.log('Editor content after emoji insert:', editor.getHTML());  // Log the editor's HTML
        // Force a content update (may not be necessary but useful for debugging)
        editor.view.updateState(editor.state);
      }
    setIsPickerVisible(false); // Hide the emoji picker after selecting an emoji
  };

  return (
    <div>
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={() => setIsPickerVisible((prev) => !prev)}
          style={{
            background: '#007BFF',
            color: '#FFF',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          😀 Emoji Picker
        </button>
      </div>

      {/* Show emoji picker when button is clicked */}
      {isPickerVisible && (
        <div style={{ position: 'absolute', zIndex: 100, marginBottom: '10px' }}>
          <EmojiPickerReact onEmojiClick={handleEmojiSelect} />
        </div>
      )}

      {/* Editor content area */}
      <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '4px' }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
