import { combineReducers } from "redux";

import {movieReducer} from "../reducers/movieReducer"

const RootReducer = combineReducers({ store:movieReducer})

export default RootReducer