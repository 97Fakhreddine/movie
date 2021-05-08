import { createStore ,applyMiddleware} from "redux";
import RootReducer from '../rootReducer/rootRerducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";




export const store = createStore(RootReducer,composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  ))