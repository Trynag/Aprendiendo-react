export function ListOfMovies ({ movies }) {
  return (
    <ul>
      {
        movies.map(movies => (
          <li key={movies.imdbID}>
            <h3>{movies.Title} - actual</h3>
            <p>{movies.Year}</p>
            <img src={movies.Poster} alt={movies.Title} />
          </li>
        ))
      }
    </ul>
  )
}

export function NoMoviesResult () {
  return (
    <p>No se encontraron películas</p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <>
      {
        hasMovies
          ? <ListOfMovies movies={movies} />
          : <NoMoviesResult />
      }
    </>
  )
}
