import {combineReducers} from "redux"
import { reducer } from "./Reducer1"

const AllReducers= combineReducers({
    controllReducers: reducer
})
export default AllReducers;