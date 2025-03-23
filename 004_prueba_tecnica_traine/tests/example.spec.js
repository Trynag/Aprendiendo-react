// @ts-check
import { test, expect } from '@playwright/test'

const LOCAL_HOST_URL = 'http://localhost:5173'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

test('App show random fact and image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})

test('Verificar el cambio de imagen al oprimir el boton', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const image = await page.getByRole('img').first()
  const imgInicial = await image.getAttribute('src')

  await page.getByRole('button').click()
  await page.waitForTimeout(1000)

  const imgFinal = await image.getAttribute('src')

  await expect(imgInicial).not.toEqual(imgFinal)
})
