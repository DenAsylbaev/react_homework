// import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './css/style.css';
import { ThemeProvider } from './contexts/theme-provider';
import { ColorModeSwitch } from './components/color-mode-switch';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Home from './pages/homePage';
import Chats from './pages/chatsPage';
import Profile from './pages/profilePage'
import Chat from './pages/chatPage'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import chatList from './chats.json';


const makeAppStyles = (theme) => { 
  const { mode, background, grey } = theme.palette;
  
  return {
    background: mode === 'light' ? background.paper : grey[800],
}};

function App() {
  const [chats, setChats] = useState([]);

    useEffect(() => {
        setChats(chatList);
    }, []);

  return (
        <BrowserRouter>
          <ThemeProvider>
            <Box sx={makeAppStyles}>
              <AppBar position="static">
                <Toolbar>
                  <ul className='toolbar_list'>
                    <li>
                      <Link to="/profile">profile</Link>
                    </li>
                    <li>
                      <Link to="/chats">chats</Link>
                    </li>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                  </ul>
                  <ColorModeSwitch />
                </Toolbar>
              </AppBar>
              <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/chats">
                    <Chats 
                      chats = { chats }/>
                  </Route>
                  <Route exact path="/chats/:id?">
                    <Chat 
                      chats = { chats }/>
                  </Route>

                </Switch>
          </Box>
        </ThemeProvider>
      </BrowserRouter>

  );
}

export default App;
