import './style.css'
import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_EDNPOINT_IMAGE_URL = (id, text) => `https://cataas.com/cat/${id}/say/${text}?font=Impact&fontSize=30&fontColor=%23000&fontBackground=none&position=center`

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat dolores')

  console.log(CAT_EDNPOINT_IMAGE_URL, setFact)

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(res => console.log(res.fact))
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      <p>{fact}</p>
    </main>
  )
}
