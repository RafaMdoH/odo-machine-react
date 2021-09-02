
import React from 'react';
import { TodoProvider } from '../TodoContext/index.js';
import { AppUI } from './AppUI.js';
// const defaultTodos = JSON.stringify([
//   { text: 'Cortar cebolla', completed: true},
//   { text: 'Tomar el curso de intro a React', completed: false},
//   { text: 'Llorar con la llorona', completed: false},
// ])

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
