import './App.css';
import { createTheme } from '@mui/material';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


//Componentes
import Home from './components/Home';


export const theme = createTheme({
  palette: {
    primary: {
      light: '#83ffe1',
      main: '#64ffda',
      dark: '#46b298',
      contrastText: '#fff',
    },
    secondary: {
      light: '#337066',
      main: '#004d40',
      dark: ' #00352c',
      contrastText: '#000',
    },
  },
});


function App(){
  return(
     <Home />
  )
}

export default App;



