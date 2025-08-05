import './App.css'

const App = () => {
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
          Aquí los resultados
        </main>
      </div>
    </>
  )
}

export default App
