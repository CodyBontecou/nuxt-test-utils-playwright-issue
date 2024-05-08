import { expect, test } from '@nuxt/test-utils/playwright'

test.beforeEach(async ({ page, goto }) => {
  page.setViewportSize({ width: 800, height: 900 })
  await goto('/', { waitUntil: 'hydration' })
})

test('test', async ({ page, goto }) => {
  await expect(page.getByRole('heading')).toHaveText('Welcome to Playwright!')
})
