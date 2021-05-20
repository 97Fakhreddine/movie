import { GET_TOP_RATED_MOVIES_LIST, TopRatedMovies } from "../actions/topRatedMovie"
import { Imovie, OneMovie } from '../../types/movie';
import { GET_ONE_MOVIE } from "../actions/OneDetailedMovie";
export type MoviesList= {
    movies:{
        page:number;
        results:Imovie[]
    }
}

export const defaultState:MoviesList|any=[]

export const movieReducer=(state=defaultState,action:TopRatedMovies):MoviesList  =>{
    if (action.type === GET_TOP_RATED_MOVIES_LIST) {
        return Object.assign(action.topRatedMovies,...state);
      } else {
        return state;
      }
}

export type OneDetailedMovie ={
  type:string;
  oneMovieDetail:OneMovie
}

export const oneMovieReducer=(state=defaultState,action:OneDetailedMovie)=>{
  if(action.type===GET_ONE_MOVIE){
    return Object.assign(action.oneMovieDetail,...state)
  }
}