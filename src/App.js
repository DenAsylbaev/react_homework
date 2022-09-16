// import logo from './logo.svg';
import React from 'react';
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

import { Provider } from "react-redux";
import { store } from './store/store';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
// import { PersistGate } from 'redux-persist/es/integration/react';

const makeAppStyles = (theme) => { 
  const { mode, background, grey } = theme.palette;
  
  return {
    background: mode === 'light' ? background.paper : grey[800],
}};

function App() {

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
                <Provider store={store}>
                  <PersistGate persistor={persistor}>
                      <Route exact path="/">
                        <Home />
                      </Route>
                      <Route path="/profile">

                        <Profile />
                      </Route>
                      <Route exact path="/chats">
                        <Chats/>
                      </Route>
                      <Route exact path="/chats/:id?">
                        <Chat/>
                      </Route>
                    </PersistGate>
                  </Provider>
                </Switch>
          </Box>
        </ThemeProvider>
      </BrowserRouter>

  );
}

export default App;
