import { NavBar } from "../components/NavBar";
import Movie from "../components/Movie";
import "../assets/styles/movieList.css";
import { CarrouselMovie } from "../components/CarrouselMovies";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Imovie } from "../config/types/movie";
import { useCallback, useEffect, useState, ChangeEvent } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Spinner } from "../components/Spinner";
import { topRatedMovies } from "../config/redux/actions/topRatedMovie";
import { v4 as uuid_v4 } from "uuid";
import "../assets/styles/searchMovie.css";
import { Copyright } from "../components/CopyRight";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "85ch",
        backgroundColor: "white",
        border: "1px solid white",
        borderRaduis: "2%",
        marginTop: "5%",
      },
    },
    body: {
      backgroundColor: "white",
    },
  })
);

export const MovieList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [movies, setMovies] = useState<Imovie[] | []>([]);

  const getMovies: Function = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=2e0df5e71427097806870ac8ccd99f67&language=en-US`
      )
      .then(({ data }) => {
        // log the data
        console.log(data.results.slice());
        // set the data to the state
        setMovies(data.results);
        // dispatch the data to the store
        dispatch(topRatedMovies(data));
      })
      .catch((err) => console.log(err));
  }, [movies]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      getMovies();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const searchForMovieUsingTitle: Function = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    let updatedList = movies;

    updatedList = updatedList.filter((movie) => {
      return movie.title.toLowerCase().match(event.target.value.toLowerCase());
    });
    console.log("updatedList", updatedList);

    setMovies(updatedList);

    if (event.target.value == "") {
      getMovies();
    }
  };

  return (
    <div className='movieList-container'>
      <div>
        <NavBar />
      </div>
      <div>
        <CarrouselMovie />
      </div>
      <div className='movie-list '>
        <div className='ui icon input'>
          <input
            type='text'
            placeholder='Search...'
            onChange={(event) => searchForMovieUsingTitle(event)}
          />
          <i className='search icon'></i>
        </div>
        <div className='ui link cards'>
          {movies.length > 0 ? (
            movies.map((movie: Imovie, index: number) => {
              return <Movie movie={movie} key={uuid_v4() || index} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <div className={classes.body}>
        <Copyright />
      </div>
    </div>
  );
};
