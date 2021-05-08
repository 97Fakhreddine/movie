import { combineReducers } from "redux";


import {movieReducer} from "../reducers/movieReducer"

const RootReducer = combineReducers({ movies:movieReducer})

export default RootReducer