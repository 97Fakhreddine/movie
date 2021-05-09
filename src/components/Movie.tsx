export default function Movie() {
  return (
    <div className='card'>
      <div className='image'>
        <img src='https://pictures.artify.tn/media/j2r6xkadjjyhn0iaalk4.jpg?' />
      </div>
      <div className='content'>
        <div className='header'>Matt Giampietro</div>
        <div className='meta'>
          <a>Friends</a>
        </div>
        <div className='description'>
          Matthew is an interior designer living in New York.
        </div>
      </div>
      <div className='extra content'>
        <span>
          <i className='user icon'></i>
          75 Friends
        </span>
      </div>
    </div>
  );
}
