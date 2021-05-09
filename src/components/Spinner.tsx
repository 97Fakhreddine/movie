import "../assets/styles/spinner.css";
export const Spinner = () => {
  return (
    <div id='circle'>
      <div className='loader'>
        <div className='loader'>
          <div className='loader'>
            <div className='loader'></div>
          </div>
        </div>
      </div>
    </div>
  );
};
