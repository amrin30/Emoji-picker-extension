import { Extension } from '@tiptap/core';

const EmojiPicker = Extension.create({
  name: 'emojiPicker',

  addCommands() {
    return {
      insertEmoji:
        (emoji) =>
        ({ commands }) => {
          return commands.insertContent(emoji);
        },
    };
  },
});

export default EmojiPicker;
