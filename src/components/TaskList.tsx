import React from 'react';
import { Grid } from '@mui/material';

import Task from '../interfaces/ITask';
import TaskCard from './TaskCard';


interface Props {
    tasks: Task[];
    deleteTask: (id: number) => void;
};


export default function TaskList({tasks, deleteTask}: Props) {
  return (
      <>
        {tasks.map((task, i) => (
            <Grid item xs={2} sm={4} md={4} key={task.id}>
                <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
            </Grid>
        ))}  
      </>
    )
}
