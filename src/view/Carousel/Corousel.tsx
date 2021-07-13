import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../service/API';
import { SCorousel } from '../../App.style';

type IMovie = {
  backdrop_path: string,
  poster_path?: string,
  popularity?: number,
  release_date?: string,
  adult?: boolean
}

function Corousel() {
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetchMovieDetails().then(response => {
      setMovie(response)
    })
  }, [])
  const getMovieUrl = (path: string) => {
    return `url("${process.env.REACT_APP_IMAGE_URL}/original/${path}")`
  }
  return <SCorousel style={{    
    backgroundImage: movie ? getMovieUrl(movie?.backdrop_path) : ""
  }}>
  </SCorousel>
}

export default Corousel;