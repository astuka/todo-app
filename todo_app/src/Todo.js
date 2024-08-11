import { List, ListItem, ListItemAvatar, ListItemText, IconButton, Checkbox } from '@mui/material'
import React from 'react'
import './Todo.css';

function Todo(props) { //props is sort of a "constructor" term, that allows you to put any number of variables in a function. think "self" in python
  return (
    <List>
        <ListItem>
            <ListItemAvatar>
                <IconButton type='submit' onClick={() => props.deleteTodo(props.id)} variant="contained">
                  <Checkbox />
                </IconButton>
            </ListItemAvatar>
            <ListItemText primary={props.text} secondary="[Deadline here]"/>
        </ListItem>
    </List>
  )
}

export default Todo