import { base_url } from "../config/baseURLImage";
import { Imovie } from "../config/types/movie";

export default function Movie({ movie }: Imovie | any) {
  return (
    <div className='card'>
      <div className='image'>
        <img src={base_url + movie.backdrop_path} alt='' />
      </div>
      <div className='content'>
        <div className='header'>Episode {movie.title}</div>
        <div className='meta'>
          <a>Realise Date: {movie.release_date}</a>
        </div>
        {/* <div className='description'>{movie.overview}</div> */}
      </div>
      <div className='extra content'>
        <span>
          <i className='star icon'></i>
          popularity:{movie.popularity}
        </span>
      </div>
    </div>
  );
}
