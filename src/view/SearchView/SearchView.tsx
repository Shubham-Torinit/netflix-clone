import React, { useEffect, useState } from 'react';
import { searchForMovies } from '../../service/API';
import { SSearchWrapper, SMovieCard } from '../../App.style';
import { INowPlaying } from '../../modals/Modal';
import MovieCard from '../components/MovieCards';
interface Props {
  searchString: string
}
const CSearchView: React.FC<Props> = ({searchString}) => {
  const [movies, setMovies] = useState<INowPlaying>();

  useEffect(() => {
    searchForMovies(searchString).then(val => {
      setMovies(val)
    })
  }, [searchString])

  return <SSearchWrapper>
    {
      movies?.results.map((movie, index) => {
        if (movie.poster_path && movie.backdrop_path) {
          return <SMovieCard key={index} className="movie_card">
            <MovieCard movie={movie} isVerticalPoster={false} />
          </SMovieCard>
        }
        return <></>
      })
    }
  </SSearchWrapper>
}

export default CSearchView;