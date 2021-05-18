import { combineReducers } from "redux";

import {movieReducer} from "../reducers/movieReducer"
import { userReducer } from "../reducers/userReducer";
import { authReducer } from '../reducers/authReducer';

const RootReducer = combineReducers({ movieReducer,userReducer,authReducer})

export default RootReducer