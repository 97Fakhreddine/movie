import { SIGN_UP, USER } from '../../types/user';

/**
 * @user ACTION FUNCTION
 * @param user type { USER }
 * @returns {object} with two proprities { type,user }
 * this Action executes only when the user sign up. 
 */


export const user=(user:USER)=>({
    type:SIGN_UP,
    user:user
})
