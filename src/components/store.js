import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { formSlice } from '../ReduxData/Reducers/Reducer1';
import thunk from "redux-thunk";




export const Store =configureStore({
    reducer:{
        users: formSlice.reducer,
        middleware: [thunk]
    }
}, )
