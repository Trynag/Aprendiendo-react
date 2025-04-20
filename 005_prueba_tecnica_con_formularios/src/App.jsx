import './App.css'
import { useState, useEffect, useRef } from 'react'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con solo numeros')
      return
    }

    if (search.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App () {
  const { mappedMovies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleClick = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  // Se cambia el estado del query por el mero hecho del que el estado es asincrono, lo que hace que al momento de la validación
  // el estado no sea el actual, por eso, se actualiza mediante el event y se hace la validación referente a la variable donde
  // se almacena.
  //
  // Una de las ventajas del manejo de formulario controlado son las prevalidaciónes, no significa que no se pueda realizar
  // de la forma no controlada, solamente que llevaria mucho mas proceso.
  //
  // La recomendación personal de midudev es no controlado:
  // - Mas rapido
  // - Mas optimo
  // - Suele dar menos problemas
  // - Se aprende mas JS
  const handleChange = (event) => {
    const newQuery = event.target.value

    if (newQuery.startsWith(' ')) return
    updateSearch(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form action='' onSubmit={handleClick}>
          <input
            value={search}
            onChange={handleChange}
            name='query'
            type='text'
            placeholder='Avengers, Star Wars...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
