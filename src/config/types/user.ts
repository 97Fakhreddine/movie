export const SIGN_UP="SIGN_UP"

export type Signup={
    name:string;
    email:string;
    password:string;
}

export type USER={
    name:string;
    token:string;
    authenticated:boolean;
}

export interface IUSER{
    type:string;
    user:USER
}

