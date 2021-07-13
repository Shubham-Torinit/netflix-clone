import React, { useEffect, useState } from 'react';
import { MovieRowWrapper } from '../../App.style';
import { fetchPopularMovies } from '../../service/API';
import { PopularMovies } from '../../modals/Modal';
import Swipper from '../components/Swiper';


function Popular() {
  const [popularMovies, setPopularMovies] = useState<PopularMovies>()
  
  useEffect(() => {
    fetchPopularMovies().then(response => {
      setPopularMovies(response)
    })
  }, [])

  return (
    <MovieRowWrapper>
      <h2>Popular</h2>
      {
        popularMovies?.results ? <Swipper movies={popularMovies.results} isVerticalPoster={true} imagesPerView={6}/> : <></>
      }
    </MovieRowWrapper>
  );
}

export default Popular;