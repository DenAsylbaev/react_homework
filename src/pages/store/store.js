import { createStore } from "@reduxjs/toolkit";
import { nameCheck } from './checkControl'

const store = createStore(
    nameCheck,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

export { store };