import React, { useState, useEffect } from 'react';
import { MovieRowWrapper } from '../../App.style';
import { ITvShows } from '../../modals/Modal';
import { fetchTvShows } from '../../service/API';
import Swipper from '../components/Swiper';

const CTvShows = () => {
  const [movies, setMovies] = useState<ITvShows>()
  useEffect(() => {
    fetchTvShows().then((response) => {
      setMovies(response)
    })
  }, [])

  return <MovieRowWrapper>
    <h2>Popular TV Shows</h2>
    {
      movies?.results ? <Swipper movies={movies?.results} imagesPerView={5} isVerticalPoster={false} /> : <></>
    }
  </MovieRowWrapper>
}
export default CTvShows;