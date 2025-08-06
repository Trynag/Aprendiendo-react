import './App.css'
import { Movies } from './components/Movies'
import responseMovies from './mocks/with-result.json'

const App = () => {
  const movies = responseMovies.Search

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de películas</h1>
          <form>
            <input type='text' placeholder='Avengers, Star wars, The Matrix...' />
            <button>Search</button>
          </form>
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
