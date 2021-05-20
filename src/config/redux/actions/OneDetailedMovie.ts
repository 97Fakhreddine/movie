import { OneMovie } from "../../types/movie"

export const GET_ONE_MOVIE="GET_ONE_MOVIE"

export const oneMovieAction=(oneMove:OneMovie)=>({
    type:GET_ONE_MOVIE,
    oneMovieDetail:oneMove
})
