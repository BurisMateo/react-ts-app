import React, { ChangeEvent, FormEvent, useState } from 'react'
import { TextField, Box, Typography, Button } from '@mui/material/'
import { theme } from '../App'
import Task from '../interfaces/ITask';

interface Props {
  addNewTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = {
  title: "",
  description: "",
}


export default function TaskForm({addNewTask}: Props) {

  const [task, setTask] = useState<Task>(initialState);
  
  const handleInputChange = ({target: {name, value}}: HandleInputChange) =>
    setTask({...task, [name]: value });

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewTask(task)
  };

  return (
    <Box margin={2} textAlign={'center'} sx={{ 
      backgroundColor: theme.palette.primary.main,
      border: 5,
      borderRadius: 5, 
      borderColor: theme.palette.secondary.main}}>
      
      <form onSubmit={handleNewTask}>

        <Typography align="center" sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
          Nueva Tarea
        </Typography>

        <TextField 
            id="standard-basic" 
            name="title"
            margin="normal" 
            label="Título" 
            variant="standard"
            onChange={handleInputChange}   
        />
        
        <TextField
            id="outlined-multiline-static"
            name="description"
            label="Descripción"
            multiline
            rows={4}
            margin="normal"
            onChange={handleInputChange}
          />

        <Typography align="center" sx={{ fontSize: 15 }} color={theme.palette.primary.main} gutterBottom>
          |
        </Typography>
        
        <Button type='submit' variant='text' color='info'>
          Agregar
        </Button>
      </form>
    </Box>
  )
}
