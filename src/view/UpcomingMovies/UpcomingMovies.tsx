import React, { useState, useEffect } from 'react';
import { MovieRowWrapper } from '../../App.style';
import { UpcomingMovies } from '../../modals/Modal';
import { fetchUpcomingMovies } from '../../service/API';
import Swipper from '../components/Swiper';
const CUpcomingMovies = () => {
  const [movies, setMovies] = useState<UpcomingMovies>()
  useEffect(() => {
    fetchUpcomingMovies().then(response => {
      setMovies(response)
    })
  }, [])
  
  return <MovieRowWrapper>
    <h2>Upcoming Movies</h2>
    {
      movies?.results ? <Swipper movies={movies?.results} imagesPerView={5} isVerticalPoster={false} /> : <></>
    }
  </MovieRowWrapper>
}
export default CUpcomingMovies;