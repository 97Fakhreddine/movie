import { Imovie } from '../../types/movie';
export type TopRatedMovies={
    type:string;
    topRatedMovies:Imovie[]
}

export const GET_TOP_RATED_MOVIES_LIST="GET_TOP_RATED_MOVIES_LIST"
export const topRatedMovies = (topRatedMovies:Imovie) => ({
    type: GET_TOP_RATED_MOVIES_LIST,
    topRatedMovies: topRatedMovies,
  });