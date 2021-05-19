import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import { MoviesList } from "../config/redux/reducers/movieReducer";
// import { base_url } from "../config/baseURLImage";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { v4 as uuid_v4 } from "uuid";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(12),
      },
    },
  })
);

export const CarrouselMovie = () => {
  const store = useSelector((state: MoviesList) => state.movies);
  const classes = useStyles();

  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={classes.root}>
      <Carousel showArrows={true}>
        {/* {store?.results.map((movie, index) => {
        return (
          <div key={index}>
            <img src={base_url + "" + movie.backdrop_path.slice(1)} />
            <p className='legend'>Legend {index}</p>
          </div>
        );
      })} */}
        {array.map((el: number, index: number) => {
          return (
            <div key={uuid_v4() || index}>
              <img
                src='https://filmdaily.co/wp-content/uploads/2019/08/lede-lucifer-1300x731.jpg'
                alt='...'
              />
              <p>episode {el}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
