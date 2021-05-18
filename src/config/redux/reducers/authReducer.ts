import { IUser } from './../../../../server/dist/users/user.entity.d';
import {  AUTH_GUARD, IauthUser } from '../../types/auth';

export type AUTH_Reducer={
    authenticated:boolean;
    token:string;
    user?:IUser[]
}


export const authReducer=(state:AUTH_Reducer | [] =[],action:IauthUser)=>action.type===AUTH_GUARD?Object.assign(action):state

    

