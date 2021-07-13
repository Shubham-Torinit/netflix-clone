import React, { useState, useEffect } from 'react';
import { MovieRowWrapper } from '../../App.style';
import { ITopRatedMovies } from '../../modals/Modal';
import { fetchTopRatedMovie } from '../../service/API';
import Swipper from '../components/Swiper';

const CTopRated = () => {
  const [movies, setMovies] = useState<ITopRatedMovies>()
  useEffect(() => {
    fetchTopRatedMovie().then(response => {
      setMovies(response)
    })
  }, [])
  
  return <MovieRowWrapper>
    <h2>Top Rated</h2>
    {
      movies?.results ? <Swipper movies={movies?.results} imagesPerView={5} isVerticalPoster={false} /> : <></>
    }
  </MovieRowWrapper>
}
export default CTopRated;