// import { Extension } from '@tiptap/core';

// const WordCount = Extension.create({
//   name: 'wordCount',

//   addStorage() {
//     return {
//       wordCount: 0, // Initialize word count
//     };
//   },

//   addProseMirrorPlugins() {
//     return [
//       {
//         props: {
//           handleDOMEvents: {
//             input: (view) => {
//               const text = view.state.doc.textBetween(0, view.state.doc.content.size, ' ');
//               const words = text.split(/\s+/).filter((word) => word.length > 0);
//               this.storage.wordCount = words.length; // Update word count
//               return false;
//             },
//           },
//         },
//       },
//     ];
//   },
// });

// export default WordCount;
