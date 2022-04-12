import { Button, Card, CardContent, Paper, TextareaAutosize, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import Task from '../interfaces/ITask';
import { theme } from '../App';


interface Props {
    task: Task;
    deleteTask: (id: number) => void;
}

export default function TaskCard({task, deleteTask}: Props) {
  return (
      <>
        <Card sx={{
            border: 10,
            borderRadius: 5,
            borderColor: theme.palette.primary.dark,        
            padding: 1,
            width: 250,
            height: 250,
            boxShadow: 0,
            whiteSpace: 'normal',
            overflow:'auto',
            backgroundColor: theme.palette.primary.light}}>
            <CardContent>
                <Box textAlign='center'>
                    <Button color='error' onClick={() => task.id && deleteTask(task.id)}>
                        Borrar
                    </Button>
                </Box>

                <Typography align="center" sx={{ fontSize: 32 }} color="text.secondary" gutterBottom>
                {task.title}
                </Typography>
                <Typography align="center" >
                    {task.description}
                </Typography>
            </CardContent>
        </Card>
      
      </>
    )
}
