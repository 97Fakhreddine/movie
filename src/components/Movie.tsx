import { base_url } from "../config/baseURLImage";
import { Imovie } from "../config/types/movie";
import "../assets/styles/movieCard.css";
export default function Movie({ movie }: Imovie | any) {
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
              <h1 className='movie-title'>Blade Runner</h1>
              <h4 className='movie-info'>(1982) Sci-Fi, Thriller</h4>
            </div>
            <p className='movie-desc'>
              A blade runner must pursue and try to terminate four replicants
              who stole a ship in space and have returned to Earth to find their
              creator.
            </p>
            <a className='btn btn-outline' href='#'>
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
