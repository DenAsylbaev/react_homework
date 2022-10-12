import { applyMiddleware, createStore, compose } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { chatsReducer } from './chats/reducer'
import { showNameReducer } from './profile/reducer';
import { messagesReducer } from './messages/reducer';
import { gistsReducer } from './api/reduser'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
    }

const persistedReducer = persistReducer(persistConfig, combineReducers({ 
            showNameReducer, 
            messagesReducer, 
            chatsReducer, 
            gistsReducer,
         }));

export const store = createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ &&
    // window.__REDUX_DEVTOOLS_EXTENSION__(),
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);


