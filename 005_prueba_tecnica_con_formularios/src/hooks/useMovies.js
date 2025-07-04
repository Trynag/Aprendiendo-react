import responseMovies from '../mocks/with-results.json'
// import whitoutMovies from '../mocks/no-result.json'

export function useMovies () {
  const movies = responseMovies.Search
  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return { mappedMovies }
}
