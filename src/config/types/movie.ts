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
}