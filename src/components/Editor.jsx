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
  const handleEmojiSelect = (emojiObject) => {
    if (editor) {
      editor.chain().focus().insertContent(emojiObject.emoji).run();
    }
    // Close the emoji picker after selection
    // setIsPickerVisible(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Emoji Picker Toggle Button */}
      <div
        style={{
          marginBottom: '10px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
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
        <div
          style={{
            position: 'absolute',
            zIndex: 100,
            background: '#FFF',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '10px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Emoji Picker Component */}
          <EmojiPickerReact onEmojiClick={handleEmojiSelect} />

          {/* Close Button */}
          <button
            onClick={() => setIsPickerVisible(false)}
            style={{
              marginTop: '10px',
              background: '#FF4D4F',
              color: '#FFF',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%',
            }}
          >
            Close Picker
          </button>
        </div>
      )}

      {/* Editor Content */}
      <div
        style={{
          border: '1px solid #ddd',
          padding: '10px',
          borderRadius: '4px',
          marginTop: '20px',
        }}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
