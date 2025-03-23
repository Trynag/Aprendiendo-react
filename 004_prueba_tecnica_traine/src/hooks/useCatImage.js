import { useEffect, useState } from 'react'
import { getRandomImage } from '../services/catImage'

export function useCatImage ({ fact }) {
  const [catUrl, setCatUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    getRandomImage({ fact }).then(setCatUrl)
  }, [fact])

  return { catUrl }
}
