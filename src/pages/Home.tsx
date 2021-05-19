import { Copyright } from "../components/CopyRight";
import "../assets/styles/home.css";
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import picture2 from "../assets/images/home2.jpeg";
export const Home = () => {
  const history = useHistory();
  return (
    <div>
      <NavBar />
      <div
        style={{
          textAlign: "center",
          padding: "2%",
          backgroundColor: "white",
        }}></div>
      <div className='container-home' style={{ backgroundColor: "#CBCBCB " }}>
        <div className='row'>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>Unlimited movies, TV shows, and more.</b>
            </h1>
            <h1 className='large-font' style={{ color: "MediumSeaGreen;" }}>
              <b>Enjoy on your TV.</b>
            </h1>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </p>
          </div>
          <div className='column-33'>
            {/* <img src={picture1} width='935' height='471' /> */}
            <iframe
              src='https://giphy.com/embed/26z0F0MNNp8f4HEAw'
              width='480'
              height='268'
              frameBorder='0'
              className='giphy-embed'
              title='first-gif'
              allowFullScreen></iframe>
            <p>
              <a href='https://giphy.com/gifs/angrybirds-1-angry-birds-movie-26z0F0MNNp8f4HEAw'>
                via GIPHY
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='container-home' style={{ backgroundColor: "#f1f1f1" }}>
        <div className='row'>
          <div className='column-33'>
            <img src={picture2} alt='App' width='835' height='471' />
          </div>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>All your Best Movies</b>
            </h1>
            <h1 className='large-font' style={{ color: "red;" }}>
              <b>Watch everywhere.</b>
            </h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </p>
            <button className='button' style={{ backgroundColor: "red" }}>
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className='container-home' style={{ backgroundColor: "#CBCBCB " }}>
        <div className='row'>
          <div className='column-66'>
            <h1 className='xlarge-font'>
              <b>Ready to watch?</b>
            </h1>
            <h1 className='large-font' style={{ color: "MediumSeaGreen" }}>
              <b>Join the Community</b>
            </h1>
            <p>
              <span style={{ fontSize: "36px" }}>Where can I watch?</span> Watch
              anywhere, anytime, on an unlimited number of devices. Sign in with
              your account to watch instantly on the web at M.com from your
              personal computer or on any internet-connected device that offers
              the app, including smart TVs, smartphones, tablets, streaming
              media players and game consoles.
            </p>
            <button className='button' onClick={() => history.push("/signup")}>
              Signup now
            </button>
          </div>
          <div className='column-33'>
            {/* <img src={picture3} width='835' height='471' /> */}
            <iframe
              src='https://giphy.com/embed/iFz5tPD3m0yEKOxuNT'
              width='480'
              height='270'
              frameBorder='0'
              className='giphy-embed'
              title='second-gif'
              allowFullScreen></iframe>
            <p>
              <a href='https://giphy.com/gifs/AngryBirdsMovie-iFz5tPD3m0yEKOxuNT'>
                via GIPHY
              </a>
            </p>
          </div>
        </div>
      </div>{" "}
      <div style={{ backgroundColor: "white", padding: "2%" }}>
        <Copyright />
      </div>
    </div>
  );
};
