import React, { FC, useState } from 'react';
import { MovieDetails } from '../../modals/Modal';
import {SMoviePoster} from './Components.style';
import Dialog from './Dialog';
import CMovieDetail from './MovieDetail';

interface IMovieCard {
  movie: MovieDetails;
  isVerticalPoster: boolean;
}

const MovieCard:FC<IMovieCard> = ({movie, isVerticalPoster}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  const url = process.env.REACT_APP_IMAGE_URL + '/w500' + (isVerticalPoster ? movie.poster_path : movie.backdrop_path)
  return <>
    <Dialog open={isOpen} onClose={() => {
      setIsOpen(false)
      document.querySelector("body")!.style.overflow = "auto"
      }} >
      <CMovieDetail movie={movie} />
    </Dialog>
    <SMoviePoster onClick={() => setIsOpen(true)} src={url} />
  </>
  
}

export default MovieCard;