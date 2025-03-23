const CAT_ENDPOINT_IMAGE_URL = (threeWords) => `https://cataas.com/cat/says/${threeWords}?position=center&font=Impact&fontSize=60&fontColor=red&fontBackground=black`

export const getRandomImage = async ({ fact }) => {
  const threeFirstWords = fact.split(' ', 3).join(' ')
  const res = await fetch(CAT_ENDPOINT_IMAGE_URL(threeFirstWords))
  const { url } = res

  return url
}
