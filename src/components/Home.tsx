import { useState } from 'react'
import { Box, Grid } from '@mui/material';
import { theme } from '../App'


//components

import {NavBar, BottomBar} from './NavBar';
import Task from '../interfaces/ITask';
import TaskList from './TaskList';
import TaskForm from './TaskForm';



export default function Home() {
      
      const getCurrentTimestamp = (): number => new Date().getTime();
          
      const [tasks, setTasks] = useState <Task[]> ([
        {
          id: getCurrentTimestamp(),
          title: "Aprender React",
          description: "React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre. En el proyecto hay más de mil desarrolladores libres",
          completed: false
        },
        {
          id: getCurrentTimestamp()+1,
          title: "Aprender Typescript",
          description: "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.",
          completed: false
        },
        {
          id: getCurrentTimestamp()+2,
          title: "Aprender MUI",
          description: "MUI ofrece un conjunto integral de herramientas de interfaz de usuario para ayudarlo a enviar nuevas funciones más rápido. Comience con Material UI, nuestra biblioteca de componentes completamente cargada, o traiga su propio sistema de diseño a nuestros componentes listos para producción.",
          completed: false
        }
      ]);
      
      
      const addNewTask = (task: Task) => {
        setTasks([...tasks, {...task, id: getCurrentTimestamp(), completed: false}])
      };
      
      const deleteTask = (id:number):void => setTasks(tasks.filter((task) => task.id !== id));
      
    return (
        <>
            <Box paddingBottom={30} sx={{flexGrow: 1 , backgroundColor: theme.palette.primary.dark}}>
                <NavBar />
                <Grid container columns={12}>
                    <Grid item xs={3}>
                    <TaskForm addNewTask={addNewTask} />
                    </Grid>
                    <Grid container xs={9} spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                    <TaskList tasks={tasks} deleteTask={deleteTask} />
                    </Grid>
                </Grid>
                <BottomBar />
            </Box>
        </>
    )
}
