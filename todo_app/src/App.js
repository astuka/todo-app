import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => { //BAD SYNTAX
    //runs on start
    const q = query(collection(db, "todos"))
    const unsub = onSnapshot(q, (querySnapshot) => {
      console.log("Data", querySnapshot.docs.map(d => doc.data()));
    });
  }, []);

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
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
