import React from 'react'
import { Toolbar, AppBar, Typography } from '@mui/material';
import {theme} from '../App';


export function NavBar() {
  return (
    <div>
        <AppBar position="fixed" sx={{backgroundColor: theme.palette.secondary.light}}>
            <Toolbar variant="dense">
                <Typography variant="h5" color="inherit" component="div" sx={{flexGrow: 1}} >
                    React TS
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar></Toolbar>
    </div>
  )
}


export function BottomBar() {
    return(
        <AppBar position="static" sx={{ top: 'auto', bottom: 0, backgroundColor: theme.palette.primary.dark, boxShadow: 0 }}>
            <Toolbar>
            </Toolbar>
        </AppBar>
    )
}