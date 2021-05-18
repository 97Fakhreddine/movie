import { IUSER, SIGN_UP } from '../../types/user';
import { defaultState } from "../reducers/movieReducer"


export const userReducer=(state = defaultState,action:IUSER)=>{
    if(action.type=== SIGN_UP){
        return Object.assign(action.user)
    }else{
        return state
    }
}