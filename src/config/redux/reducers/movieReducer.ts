import { GET_TOP_RATED_MOVIES_LIST, TopRatedMovies } from "../actions/topRatedMovie"
import {Imovie} from "../../types/movie"
export type MoviesList= {
    movies:{
        page:number;
        results:Imovie[]
    }
}

export const defaultState:MoviesList|any=[]

export const movieReducer=(state=defaultState,action:TopRatedMovies):any  =>{
    if (action.type === GET_TOP_RATED_MOVIES_LIST) {
        return Object.assign(action.topRatedMovies);
      } else {
        return state;
      }
}