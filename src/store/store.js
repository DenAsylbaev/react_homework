import { createStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { chatsReducer } from './chats/reducer'
import { showNameReducer } from './profile/reducer';
import { messagesReducer } from './messages/reducer';


export const store = createStore(
    combineReducers({ showNameReducer, messagesReducer, chatsReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())
