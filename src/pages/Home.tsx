import { Copyright } from "../components/CopyRight";
import "../assets/styles/home.css";
import { NavBar } from "../components/NavBar";
export const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ textAlign: "center" }}>
        <h2>Responsive Zig Zag Layout Example</h2>
        <p>Resize the browser window to see the effect.</p>
      </div>
      <div className='container-home'>
        <div className='row'>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>The App</b>
            </h1>
            <h1 className='large-font' style={{ color: "MediumSeaGreen;" }}>
              <b>Why buy it?</b>
            </h1>
            <p>
              <span style={{ fontSize: "6px" }}>Take photos like a pro.</span>{" "}
              You should buy this app because lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className='button'>Download Application</button>
          </div>
          <div className='column-33'>
            <img
              src='https://ctp-media.imigino.com/image/1/process/nullxnull?source=https://d27lrc1xrjs9qh.cloudfront.net/wp-content/uploads/sites/56/2018/07/Movie.jpg'
              width='335'
              height='471'
            />
          </div>
        </div>
      </div>
      <div className='container-home' style={{ backgroundColor: "#f1f1f1" }}>
        <div className='row'>
          <div className='column-33'>
            <img
              src='https://neurosciencemajor.osu.edu/sites/default/files/events-images/movie_night.jpg'
              alt='App'
              width='335'
              height='471'
            />
          </div>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>Clarity</b>
            </h1>
            <h1 className='large-font' style={{ color: "red;" }}>
              <b>Pixels, who?</b>
            </h1>
            <p>
              <span style={{ fontSize: "24px" }}>
                A revolution in resolution.
              </span>{" "}
              Sharp and clear photos with the world's best photo engine,
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquipex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <button className='button' style={{ backgroundColor: "red" }}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className='container-home'>
        <div className='row'>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>The App</b>
            </h1>
            <h1 className='large-font' style={{ color: "MediumSeaGreen" }}>
              <b>Why buy it?</b>
            </h1>
            <p>
              <span style={{ fontSize: "36px" }}>Take photos like a pro.</span>{" "}
              You should buy this app because lorem ipsum consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
            <button className='button'>Download Application</button>
          </div>
          <div className='column-33'>
            <img
              src='https://benonicitytimes.co.za/wp-content/uploads/sites/26/2016/04/Movies1.jpg'
              width='335'
              height='471'
            />
          </div>
        </div>
      </div>{" "}
      <div style={{ backgroundColor: "white" }}>
        <Copyright />
      </div>
    </div>
  );
};
