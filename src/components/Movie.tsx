import { base_url } from "../config/baseURLImage";
import { Imovie } from "../config/types/movie";
import "../assets/styles/movieCard.css";

export type MovieProps={
  movie:Imovie;
  watchMore:(index:number)=>void
}


export const Movie:React.FC<MovieProps>=({ movie,watchMore }) =>{

  
  return (
    // <div className='card'>
    //   <div className='image'>
    //     <img src={base_url + movie.backdrop_path} alt='' />
    //   </div>
    //   <div className='content'>
    //     <div className='header'>Episode {movie.title}</div>
    //     <div className='meta'>Realise Date: {movie.release_date}</div>
    //     {/* <div className='description'>{movie.overview}</div> */}
    //   </div>
    //   <div className='extra content'>
    //     <span>
    //       <i className='star icon'></i>
    //       popularity:{movie.popularity}
    //     </span>
    //   </div>
    <div id='movie-card-list'>
      <div
        className='movie-card'
        style={{
          backgroundImage: `url(  ${base_url + movie.backdrop_path}  )`,
        }}>
        <div className='color-overlay'>
          {/* <div className='movie-share'>
            <a className='movie-share__icon' href='#'>
              <i className='material-icons'>&#xe87d</i>
            </a>
            <a className='movie-share__icon' href='#'>
              <i className='material-icons'>&#xe253</i>
            </a>
            <a className='movie-share__icon' href='#'>
              <i className='material-icons'>&#xe80d</i>
            </a>
          </div> */}
          <div className='movie-content'>
            <div className='movie-header'>
              <h1 className='movie-title'>{movie.title}</h1>
              <h4 className='movie-info'>{"("+movie.release_date+")"}, Thriller</h4>
            </div>
            <p className='movie-desc'>
            If you want to see more about the movie, you can simply click on Watch movie button or click on the displayed image of the movie...
            </p>
            <a className='btn btn-outline' onClick={(id)=>{watchMore(movie.id)}}>
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
