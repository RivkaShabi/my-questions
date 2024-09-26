import React from 'react';
import {createTheme,  ThemeProvider } from '@mui/material/styles';
import Quiz from './Quiz'; 

const theme = createTheme({
});


const App = () => (
  <ThemeProvider theme={theme}>
    <Quiz />
  </ThemeProvider>
);

export default App;
