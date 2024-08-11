import React, { useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@mui/material';
import './App.css';
import Todo from './Todo';
import { db } from './firebase';
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";

function App() {

  //establishes default state
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //deleting function
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id));

    setTodos(todos.filter(todo => todo.id !== id));
  }

  //onStart update function
  useEffect(() => {
    const fetchTodos = async () => {
      const todosCollection = collection(db, 'todos');
      const todosSnapshot = await getDocs(todosCollection);
      const todosList = todosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(todosList);
    };
    
    fetchTodos();
  }, []);

  const addTodo = async (event) => {
    //when button click
    event.preventDefault(); //stops refresh bug
    
    //adding task to Firestore
    const docRef = await addDoc(collection(db, 'todos'), {
      task:input,
    });

    setTodos([...todos, {id: docRef.id, task: input}]);
    setInput(''); // clear input field

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
          <Todo key={todo.id} id={todo.id} text={todo.task} deleteTodo={deleteTodo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
