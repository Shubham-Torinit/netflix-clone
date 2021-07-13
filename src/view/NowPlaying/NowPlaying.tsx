import React, { useState, useEffect } from 'react';
import { MovieRowWrapper } from '../../App.style';
import { INowPlaying } from '../../modals/Modal';
import { fetchNowPlayingMovies } from '../../service/API';
import Swipper from '../components/Swiper';

const CNowPlaying = () => {
  const [movies, setMovies] = useState<INowPlaying>()
  useEffect(() => {
    fetchNowPlayingMovies().then(response => {
      setMovies(response)
    })
  }, [])
  
  return <MovieRowWrapper>
    <h2>Now Playing</h2>
    {
      movies?.results ? <Swipper movies={movies?.results} imagesPerView={5} isVerticalPoster={false} /> : <></>
    }
  </MovieRowWrapper>
}
export default CNowPlaying;