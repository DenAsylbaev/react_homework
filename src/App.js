import React from 'react';
import './css/style.css';
import { ThemeProvider } from './contexts/theme-provider';
import { ColorModeSwitch } from './components/color-mode-switch';
import { Box } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { useEffect } from 'react';
import { useState } from 'react';

import Home from './pages/homePage';
import Chats from './pages/chatsPage';
import Profile from './pages/profilePage'
import Chat from './pages/chatPage'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { Provider } from "react-redux";
import { store } from './store/store';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import ApiData from './pages/apiDataPage';

import { Registration } from './components/registration';
import { LoginComp } from './components/login'

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase-config';

import { PrivateRoute } from './HOCS/PrivateRoute';


const makeAppStyles = (theme) => { 
  const { mode, background, grey } = theme.palette;
  
  return {
    background: mode === 'light' ? background.paper : grey[800],
}};

function App() {
  const [authed, setAuthed] = useState(false);
  const auth = getAuth(app);

  useEffect(() => {
      onAuthStateChanged(auth, user => {
          if (user) {
              setAuthed(true);
          }
      })
  }, [auth])

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
                    <li>
                      <Link to="/api">API</Link>
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

                      <Route exact path="/login">
                        <LoginComp />
                      </Route>
                      <Route exact path="/registration">
                        <Registration />
                      </Route>
                      
                      <PrivateRoute authenticated={authed} path="/profile">
                        <Profile />
                      </PrivateRoute>
                      
                      <PrivateRoute authenticated={authed} exact path="/chats">
                        <Chats />
                      </PrivateRoute>
                      <PrivateRoute authenticated={authed} exact path="/chats/:id?">
                        <Chat/>
                      </PrivateRoute>
                      <PrivateRoute authenticated={authed} exact path="/api">
                        <ApiData/>
                      </PrivateRoute>
                    </PersistGate>
                  </Provider>
                </Switch>  
          </Box>
        </ThemeProvider>
      </BrowserRouter>

  );
}

export default App;
