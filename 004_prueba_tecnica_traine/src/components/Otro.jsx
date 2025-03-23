import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { catUrl } = useCatImage({ fact: 'random fact' })

  return (
    <>
      {catUrl && <img src={catUrl} width='200px' height='200px' />}
    </>
  )
}
