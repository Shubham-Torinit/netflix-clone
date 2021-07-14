import { PopularMovies } from "../modals/Modal";

const baseUrl = process.env.REACT_APP_BASE_API_URL
const apiKey = process.env.REACT_APP_API_KEY

export const fetchPopularMovies = async (): Promise<PopularMovies> => {
  const endpoint = `${baseUrl}/movie/popular?api_key=${apiKey}`;
  return (await fetch(endpoint)).json()
}

export const fetchMovieDetails = async () => {
  const url = `${baseUrl}/movie/508943?api_key=${apiKey}`;
  return (await fetch(url)).json()
}

export const fetchNowPlayingMovies = async () => {
  const url = `${baseUrl}/movie/now_playing?api_key=${apiKey}`
  return (await fetch(url)).json()
}

export const fetchTrendingMovies = async () => {
  const url = `${baseUrl}/trending/all/week?api_key=${apiKey}`
  return (await fetch(url)).json()
}

export const fetchTopRatedMovie = async () => {
  const url = `${baseUrl}/movie/top_rated?api_key=${apiKey}`
  return (await fetch(url)).json()
}

export const fetchUpcomingMovies = async () => {
  const url = `${baseUrl}/movie/upcoming?page=2&api_key=${apiKey}`
  return (await fetch(url)).json()
}

export const searchForMovies = async (searchString: string) => {
  const url = `${baseUrl}/search/movie?query=${searchString}&api_key=${apiKey}`
  return (await fetch(url)).json()
}

export const fetchTvShows = async () => {
  const url = `${baseUrl}/tv/popular?api_key=${apiKey}`
  return (await fetch(url)).json()
}