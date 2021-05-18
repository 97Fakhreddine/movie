import { authUser,AUTH_GUARD } from './../../types/auth';

/**
 * @auth ACTION FUNCTION
 * @param authGuard type { authUser }
 * @returns {object} with two proprities { type,authGuard }
 * this action will be used each time the page refresh
 */

export const auth=(authGuard:authUser)=>({
    type:AUTH_GUARD,
    authGuard:authGuard
})