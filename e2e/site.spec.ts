import { expect, test } from '@playwright/test'

test('home states people-first automation and points at contact', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'People, process, then software and machines.',
  )
  await expect(page.getByRole('main')).toContainText('Productivity, quality, and safety')
  await expect(page.getByRole('main')).toContainText('Froese Vegetables Inc.')
  await expect(page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Contact' })).toBeVisible()
  await page.getByRole('main').getByRole('link', { name: 'Contact us' }).first().click()
  await expect(page).toHaveURL(/\/contact\/$/)
})

test('FarmWork case study names FVI and links the product', async ({ page }) => {
  await page.goto('/case-studies/farmwork/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Froese Vegetables Inc.')
  await expect(page.getByRole('main')).toContainText('FarmWork')
  await expect(page.getByRole('columnheader', { name: 'Before' })).toBeVisible()
  await expect(page.getByRole('columnheader', { name: 'After' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'FarmWork on froveg.ca' })).toBeVisible()
})

test('unnamed roofing study has no company name', async ({ page }) => {
  await page.goto('/case-studies/field-jobs/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Roofing company')
  await expect(page.getByRole('main')).toContainText('The client is not named')
  await expect(page.getByRole('main')).not.toContainText('Armour')
  await expect(page.getByRole('main')).not.toContainText('Creative Enterprises')
})

test('products page sells products without in-development framing', async ({ page }) => {
  await page.goto('/products/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('FarmWork, FarmBridge, and Conduit')
  await expect(page.getByRole('heading', { level: 2, name: 'FarmWork' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 2, name: 'FarmBridge' })).toBeVisible()
  await expect(page.getByRole('heading', { level: 2, name: 'Conduit' })).toBeVisible()
  await expect(page.getByRole('main')).toContainText('Benefits')
  await expect(page.getByRole('main')).toContainText('What it covers')
  await expect(page.locator('#farmwork')).toContainText('Electronic hours')
  await expect(page.locator('#farmbridge')).toContainText('Cooler inventory that matches')
  await expect(page.locator('#conduit')).toContainText('Onboarding')
  await expect(page.locator('#conduit')).toContainText('FarmWork:')
  await expect(page.locator('#conduit')).toContainText('FarmBridge:')
  await expect(page.getByRole('main')).toContainText('Read the FVI case study')
  await expect(page.getByRole('main')).not.toContainText('In development')
  await expect(
    page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Products' }),
  ).toHaveAttribute('aria-current', 'page')
})

test('home product cards link to product anchors', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('main').locator('a[href="/products/#farmwork"]').click()
  await expect(page).toHaveURL(/\/products\/#farmwork$/)
  await expect(page.locator('#farmwork')).toBeVisible()
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
  await page.getByLabel('Name', { exact: true }).fill('Alex Rivera')
  await page.getByLabel('Company name').fill('Example Packing Co')
  await page.getByLabel('Email').fill('alex@example.com')
  await page.getByLabel('What do you want to improve?').fill('Payroll still lives in a spreadsheet.')
  await page.getByRole('button', { name: 'Send' }).click()
  await expect(page.getByRole('status')).toContainText('We received it. We will reply to alex@example.com.')
})

test('contact form reports failure honestly when the function fails', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 500,
      contentType: 'application/json',
      body: JSON.stringify({ ok: false, error: 'send_failed' }),
    })
  })
  await page.goto('/contact/')
  await page.getByLabel('Name', { exact: true }).fill('Alex Rivera')
  await page.getByLabel('Company name').fill('Example Packing Co')
  await page.getByLabel('Email').fill('alex@example.com')
  await page
    .getByLabel('What do you want to improve?')
    .fill('Shipping paperwork does not match the cooler.')
  await page.getByRole('button', { name: 'Send' }).click()
  await expect(page.getByRole('status')).toContainText('It did not send.')
  await expect(page.getByRole('status').getByRole('link', { name: 'info@rempelautomation.com' })).toBeVisible()
})
