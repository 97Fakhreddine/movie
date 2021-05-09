import { NavBar } from "../components/NavBar";
import Movie from "../components/Movie";
import "../assets/styles/movieList.css";
import { CarrouselMovie } from "../components/CarrouselMovies";

export const MovieList = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className='movieList-container'>
      <div>
        <NavBar />
      </div>
      <div>
        <CarrouselMovie />
      </div>
      <div className='movie-list'>
        <div className='ui link cards'>
          {array.map((movie, index) => {
            return <Movie />;
          })}
        </div>
      </div>
    </div>
  );
};
