import { expect, test } from '@playwright/test'

test('home states who it is for and points at contact', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'One record from the floor to payroll and shipping.',
  )
  await expect(page.getByRole('main')).toContainText('growers, packers, shippers')
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' })).toBeVisible()
  await page.getByRole('main').getByRole('link', { name: 'Talk with us' }).click()
  await expect(page).toHaveURL(/\/contact\/$/)
})

test('FarmWork case study stays unnamed and shows before and after', async ({ page }) => {
  await page.goto('/case-studies/farmwork/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('FarmWork')
  await expect(page.getByRole('main')).toContainText('The customer is not named')
  await expect(page.getByRole('columnheader', { name: 'Before' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'After' })).toBeVisible()
  await expect(page.getByRole('main')).not.toContainText('Froese')
})

test('contact form reports success when the function accepts the message', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    })
  })
  await page.goto('/contact/')
  await page.getByLabel('Name').fill('Alex Rivera')
  await page.getByLabel('Operation').fill('Example Packing Co')
  await page.getByLabel('Email').fill('alex@example.com')
  await page.getByLabel('The job that hurts').selectOption('payroll')
  await page.getByLabel('Message').fill('Payroll still lives in a spreadsheet.')
  await page.getByRole('button', { name: 'Send' }).click()
  await expect(page.getByRole('status')).toContainText('We received it. We will reply to alex@example.com.')
})

test('contact form reports failure honestly when the function fails', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: JSON.stringify({ ok: false, error: 'send_failed' }),
    })
  })
  await page.goto('/contact/')
  await page.getByLabel('Name').fill('Alex Rivera')
  await page.getByLabel('Operation').fill('Example Packing Co')
  await page.getByLabel('Email').fill('alex@example.com')
  await page.getByLabel('The job that hurts').selectOption('shipping')
  await page.getByLabel('Message').fill('Shipping paperwork does not match the cooler.')
  await page.getByRole('button', { name: 'Send' }).click()
  await expect(page.getByRole('status')).toContainText('It did not send.')
  await expect(page.getByRole('status').getByRole('link', { name: 'info@rempelautomation.com' })).toBeVisible()
})
