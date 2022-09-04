// import logo from './logo.svg';
import React from 'react';

import './css/style.css';
import MessageListFunc from './components/messageListFunc'
import { ThemeProvider } from './contexts/theme-provider';
import { ColorModeSwitch } from './components/color-mode-switch';
import { Box } from '@mui/material';


const makeAppStyles = (theme) => { 
  const { mode, background, grey } = theme.palette;
  
  return {
    background: mode === 'light' ? background.paper : grey[800],  
}};

function App() {
  
  return (
    <ThemeProvider>
      <Box sx={makeAppStyles}>
      <div className="App">
          <ColorModeSwitch />

          <header className="App-header">
          <MessageListFunc />
          </header>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default App;
