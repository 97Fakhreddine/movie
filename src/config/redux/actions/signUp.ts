import { SIGN_UP, USER } from '../../types/user';

export const user=(user:USER)=>({
    type:SIGN_UP,
    user:user
})
