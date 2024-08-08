import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['task1','task2']);
  const [input, setInput] = useState('')

  const addTodo = (event) => {
    //when button click
    event.preventDefault(); //stops refresh bug
    setTodos([...todos, input]);
    setInput('');

  }
  
  return (
    <div className="App">
      <h1>Todo App</h1>
      <form>  {/** wrapping it in form allows for pressing enter to submit */}
        <FormControl>
          <InputLabel>Enter Todo Here</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        {/**<input value={input} onChange={event => setInput(event.target.value)}/>*/}
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
