import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Typed from "react-typed";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";

import image404 from "../assets/images/page404animation.gif";
import "../assets/styles/pageNotFound.css";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(55),
    height: theme.spacing(55),
    margin: theme.spacing(1),
  },
  title: {
    color: "tomato",
  },
  subtitle: {
    color: "tan",
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 12,
  },
}));
const NOT_FOUND = () => {
  const classes = useStyles();

  const screenSize = window.screen.width;

  const history = useHistory();

  const goBackHome = () => {
    history.push("/");
  };

  return (
    <div className='container'>
      <div className='image-btn'>
        <img src={image404} alt='' />
        <Button
          size={screenSize < 900 ? "small" : "large"}
          color='secondary'
          onClick={goBackHome}>
          Go Back Home
        </Button>
      </div>
      <Typography className={classes.title} variant='h1'>
        <Typed
          strings={[
            "This page could not be found",
            "It might be removed or not found",
          ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Typography>
    </div>
  );
};

export default NOT_FOUND;
