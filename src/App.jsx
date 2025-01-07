import React from 'react';
import Editor from './components/Editor';

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}> Emoji Picker Extension</h1>
      <Editor />
    </div>
  );
}

export default App;
