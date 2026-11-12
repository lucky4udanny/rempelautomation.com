import { expect, test } from '@playwright/test'

test('home states the advantage and points at contact', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Software, hardware, and AI, in one accountable team.',
  )
  await expect(page.getByRole('main')).toContainText('agriculture, manufacturing, and trades')
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' })).toBeVisible()
  await page.getByRole('main').getByRole('link', { name: 'Contact us' }).first().click()
  await expect(page).toHaveURL(/\/contact\/$/)
})

test('FarmWork case study shows before and after and links the product', async ({ page }) => {
  await page.goto('/case-studies/farmwork/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('FarmWork')
  await expect(page.getByRole('columnheader', { name: 'Before' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'After' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'FarmWork on froveg.ca' })).toBeVisible()
})

test('unnamed field jobs study has no company name', async ({ page }) => {
  await page.goto('/case-studies/field-jobs/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Field jobs')
  await expect(page.getByRole('main')).toContainText('The client is not named')
  await expect(page.getByRole('main')).not.toContainText('Armour')
  await expect(page.getByRole('main')).not.toContainText('Creative Enterprises')
})

test('products page marks Conduit as in development', async ({ page }) => {
  await page.goto('/products/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Systems you can run')
  await expect(page.getByRole('main')).toContainText('In development')
  await expect(page.getByRole('main')).toContainText('Conduit Suite')
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
  await page.getByLabel('What do you want to improve?').selectOption('time-payroll')
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
  await page.getByLabel('What do you want to improve?').selectOption('receiving-shipping')
  await page.getByLabel('Message').fill('Shipping paperwork does not match the cooler.')
  await page.getByRole('button', { name: 'Send' }).click()
  await expect(page.getByRole('status')).toContainText('It did not send.')
  await expect(page.getByRole('status').getByRole('link', { name: 'info@rempelautomation.com' })).toBeVisible()
})
