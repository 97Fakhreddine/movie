import { GET_TOP_RATED_MOVIES_LIST, TopRatedMovies } from "../actions/topRatedMovie"
import {Imovie} from "../../types/movie"
export type MoviesList= {
    movies:{
        page:number;
        results:Imovie[]
    }
}

// export const defaultState:IDefaultState={
//     movies:[] 
// }

export const movieReducer=(state:MoviesList|any= [],action:TopRatedMovies):any  =>{
    if (action.type === GET_TOP_RATED_MOVIES_LIST) {
        return Object.assign(action.topRatedMovies);
      } else {
        return state;
      }
}