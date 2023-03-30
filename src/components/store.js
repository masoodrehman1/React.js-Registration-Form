import {createStore, applyMiddleware} from "redux"
import AllReducers from "../ReduxData/Reducers/index"
import thunk from "redux-thunk";




export const Store =createStore(AllReducers, applyMiddleware(thunk)+  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
