import React from 'react';
import { SMovieDetail } from './Components.style';
import { MovieDetails } from '../../modals/Modal';

interface Props {
  movie: MovieDetails
}

const CMovieDetail: React.FC<Props> = ({movie}) => {
  const url = `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("${process.env.REACT_APP_IMAGE_URL}/original${movie.backdrop_path}")`
  return <SMovieDetail style={{
    background: url,
    backgroundSize: "contain"
  }}>
    <div className="detail_card">
      <h1>{movie.title ? movie.title : movie.name}</h1>
      <p>
        {movie.overview}
      </p>
      <button className={"play_button"}>
        PLAY
      </button>
      <button className={"my_list"}>
        MY LIST
      </button>
    </div>
  </SMovieDetail>
}
export default CMovieDetail;