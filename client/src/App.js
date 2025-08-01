import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000');

function App() {
  const [text, setText] = useState('');
  const timeout = useRef(null);

  useEffect(() => {
    socket.on('receive-changes', (data) => {
      setText(data);
    });
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      socket.emit('send-changes', e.target.value);
    }, 300);
  };

  return (
    <div>
      <h2>Shared Editor</h2>
      <textarea
        rows="20"
        cols="100"
        value={text}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
