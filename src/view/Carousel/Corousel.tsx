import React, { useState, useEffect } from 'react';
import { fetchMovieDetails } from '../../service/API';
import { SCorousel } from '../../App.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
type IMovie = {
  backdrop_path: string,
  poster_path?: string,
  popularity?: number,
  release_date?: string,
  adult?: boolean,
  title: string,
  overview: string
}

function Corousel() {
  const [movie, setMovie] = useState<IMovie>();

  useEffect(() => {
    fetchMovieDetails().then(response => {
      setMovie(response)
    })
  }, [])
  return <SCorousel style={{    
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("${process.env.REACT_APP_IMAGE_URL}/original/${movie?.backdrop_path}")`
  }}>
    <div>
      <h2>{movie?.title}</h2>
      <p className="overview">
        {movie?.overview}
      </p>
      <div>
        <button className="play_button">
         <FontAwesomeIcon icon={faPlay} /> PLAY</button>
        <button className="my_list"> <FontAwesomeIcon icon={faInfoCircle} /> MORE INFO</button>
      </div>
    </div>
  </SCorousel>
}

export default Corousel;