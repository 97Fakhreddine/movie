export type authUser={
    authenticated:boolean;
    token:string;
}

export const AUTH_GUARD="VERIFY_TOKEN"

export interface IauthUser{
    type:string;
    authGuard:authUser
}