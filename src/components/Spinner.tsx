import "../assets/styles/spinner.css";
export const Spinner = () => {
  return (
    <div className='m-5 p-5'>
      <div className='loader'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
