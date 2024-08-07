import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['task1','task2']);
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    //when button click
    setTodos([...todos, input]);

  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
