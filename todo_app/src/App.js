import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['task1','task2']);
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
