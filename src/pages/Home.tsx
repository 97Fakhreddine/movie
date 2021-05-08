import { Copyright } from "../components/CopyRight";
import "../assets/styles/home.css";
export const Home = () => {
  return (
    <div>
      <div style={{ fontFamily: "Verdana" }}>
        <div style={{ backgroundColor: "#f1f1f1", padding: "15px" }}>
          <h1>Cinque Terre</h1>
          <h3>Resize the browser window</h3>
        </div>

        <div style={{ overflow: "auto" }}>
          <div className='menu'>
            <div className='menuitem'>The Walk</div>
            <div className='menuitem'>Transport</div>
            <div className='menuitem'>History</div>
            <div className='menuitem'>Gallery</div>
          </div>

          <div className='main'>
            <h2>The Walk</h2>
            <p>
              The walk from Monterosso to Riomaggiore will take you
              approximately two hours, give or take an hour depending on the
              weather conditions and your physical shape.
            </p>
            <img src='img_5terre.jpg' style={{ width: "100%" }} alt='' />
          </div>

          <div className='right'>
            <h2>What?</h2>
            <p>
              Cinque Terre comprises five villages: Monterosso, Vernazza,
              Corniglia, Manarola, and Riomaggiore.
            </p>
            <h2>Where?</h2>
            <p>
              On the northwest cost of the Italian Riviera, north of the city La
              Spezia.
            </p>
            <h2>Price?</h2>
            <p>The Walk is free!</p>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#f1f1f1",
            textAlign: "center",
            padding: "10px",
            marginTop: "7px",
            fontSize: "12px",
          }}>
          {" "}
          <Copyright />
        </div>
      </div>
    </div>
  );
};
