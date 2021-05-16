import { combineReducers } from "redux";

import {movieReducer} from "../reducers/movieReducer"
import { userReducer } from "../reducers/userReducer";

const RootReducer = combineReducers({ store:movieReducer,user:userReducer})

export default RootReducer