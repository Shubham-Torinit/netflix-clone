import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from './MovieCards';
import { MovieDetails } from '../../modals/Modal';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import { SSwiper } from './Components.style';
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper/core';

interface Props {
  movies: MovieDetails[],
  isVerticalPoster: boolean;
  imagesPerView: number;
  spaceBetweenImg?: number;
}
// install Swiper modules
SwiperCore.use([Navigation]);

const Swipper: React.FC<Props> = ({movies, isVerticalPoster, spaceBetweenImg, imagesPerView}) => {
  return <SSwiper>
      <Swiper
        navigation={true}
        loop={true}
        slidesPerView={imagesPerView || 6}
        slidesPerGroup={imagesPerView || 6}
        spaceBetween={spaceBetweenImg || 10}
        breakpoints={{
          280: {
            slidesPerView: 2,
          },
          450: {
            slidesPerView: isVerticalPoster ? 3 : 2
          },
          800: {
            slidesPerView: isVerticalPoster ? 4 : 3
          },
          1264: {
            slidesPerView: imagesPerView || 6
          }
        }}>
          {
            movies.map((val, index) => {
              if (val.poster_path && val.backdrop_path) {
                return <SwiperSlide key={index}>
                  <MovieCard movie={val}  isVerticalPoster={isVerticalPoster}/>
                </SwiperSlide>
              }
              return <></>
            })
          }
    </Swiper> 
  </SSwiper>
}

export default Swipper;