export interface Imovie{
    adult?:boolean;
    genres?:{
        id:number;
        name:string
    }[];
    backdrop_path:string
    id:number;
    title:string;
    overview?:string
    results?:[]
    release_date?:string;
}


export interface OneMovie{
    adult?:boolean;
    genres?:{
        id:number;
        name:string
    }[];
    backdrop_path:string
    id:number;
    title:string;
    overview?:string
}