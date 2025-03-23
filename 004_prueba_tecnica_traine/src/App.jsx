import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'
import { Otro } from './components/Otro'

import './App.css'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { catUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Obtener un nuevo hecho</button>
      <br />
      {fact && (<p>{fact}</p>)}
      {
        catUrl && (
          <img src={catUrl} width='200px' height='200px' />
        )
      }
      <Otro />
    </main>
  )
}

export default App
