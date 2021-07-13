
export type PopularMovies = {
  page: number,
  results: MovieDetails[],
  total_pages: number,
  total_results: number
}

export type UpcomingMovies = {
  page: number,
  dates?: {},
  results: MovieDetails[],
  total_pages: number,
  total_result: number
}
export type TrendingMovies = {
  page: number,
  results: MovieDetails[],
  total_pages: number,
  total_results: number
}

export type ITopRatedMovies = {
  page: number,
  date?: {},
  results: MovieDetails[],
  total_pages: number,
  total_results: number
}
export type INowPlaying = {
  page: number,
  date?: {},
  results: MovieDetails[],
  total_pages: number,
  total_results: number
}

export type MovieDetails = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity?: number,
  poster_path: string,
  release_date: string,
  title: string,
  video?: boolean,
  vote_average?: number,
  vote_count?: number
}