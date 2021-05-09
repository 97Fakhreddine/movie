import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const CarrouselMovie = () => {
  return (
    <Carousel>
      <div>
        <img src='https://i.guim.co.uk/img/media/eb691a97f92b5c1a0ac1158614695a852473937f/0_0_4800_2880/master/4800.jpg?width=445&quality=45&auto=format&fit=max&dpr=2&s=226459208400d108b3bcc349d8cda585' />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img src='https://media.newyorker.com/photos/598872045839136c88e91dfb/16:9/w_4047,h_2276,c_limit/Larson-GoT-Season-7-Episode-4-Recap.jpg' />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src='https://s2.best-wallpaper.net/wallpaper/3840x2160/1607/Emilia-Clarke-Game-of-Thrones-TV-series_3840x2160.jpg' />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  );
};
