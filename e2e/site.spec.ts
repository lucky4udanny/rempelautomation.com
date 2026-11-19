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

test('process ring keeps the clicked stage highlighted on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/process/')

  const highlightedTitle = page.locator('article.ring-2 h3')

  const clickRing = async (label: string): Promise<void> => {
    await page.locator('svg text', { hasText: new RegExp(`^${label}$`) }).evaluate((text) => {
      const circle = text.previousElementSibling
      if (!(circle instanceof SVGElement)) {
        throw new Error(`No ring node for ${text.textContent ?? label}`)
      }
      circle.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })
  }

  /**
   * Ring clicks ignore IntersectionObserver for ~1.2s while smooth-scrolling.
   * Sample through that window so a stale observer pick (snap-back) fails the test.
   * expect.poll alone is not enough: it passes on the first matching read.
   */
  const expectClickHighlightHolds = async (title: string, holdMs = 2000): Promise<void> => {
    await expect(highlightedTitle).toHaveText(title)
    const deadline = Date.now() + holdMs
    while (Date.now() < deadline) {
      expect(await highlightedTitle.textContent()).toBe(title)
      await page.waitForTimeout(100)
    }
  }

  await clickRing('Design')
  await expectClickHighlightHolds('Process design')

  // Bug case: Design was active; click Audit. Stale observer used to restore Design mid-scroll.
  await clickRing('Audit')
  await expectClickHighlightHolds('Audit and document')

  // After the ignore window, a small scroll still fires observer callbacks without leaving Audit.
  await page.evaluate(() => window.scrollBy(0, 40))
  await expectClickHighlightHolds('Audit and document', 800)
})

test('FarmWork case study names FVI and links the product', async ({ page }) => {
  await page.goto('/case-studies/farmwork/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Froese Vegetables Inc.')
  await expect(page.getByRole('main')).toContainText('FarmWork')
  await expect(page.getByRole('main')).toContainText('already had a time and production tracking system')
  await expect(page.getByRole('main')).toContainText('re-keyed them at the end of each day')
  await expect(page.getByRole('main')).toContainText('better of minimum wage and piecework')
  await expect(page.getByRole('main')).toContainText('Sage')
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
  await expect(page.getByRole('main')).toContainText('Features')
  await expect(page.locator('#farmwork')).toContainText('Reviewable electronic clocks')
  await expect(page.locator('#farmbridge')).toContainText('Inventory transparency from receiving to shipping')
  await expect(page.locator('#conduit')).toContainText('Onboarding')
  await expect(page.locator('#conduit')).toContainText('FarmWork:')
  await expect(page.locator('#conduit')).toContainText('FarmBridge:')
  await expect(page.locator('#conduit')).toContainText('Third-party (most MCP enabled software):')
  await expect(page.getByRole('main')).toContainText('Read the FVI case study')
  await expect(page.getByRole('main')).not.toContainText('In development')
  await expect(
    page.getByRole('navigation', { name: 'Primary' }).getByRole('link', { name: 'Products' }),
  ).toHaveAttribute('aria-current', 'page')
})

test('home product cards link to product anchors', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('main').locator('a.group[href="/products/#farmwork"]').click()
  await expect(page).toHaveURL(/\/products\/#farmwork$/)
  await expect(page.locator('#farmwork')).toBeVisible()
})

test('product names deep-link to product detail bands', async ({ page }) => {
  await page.goto('/case-studies/')
  await page.getByRole('main').getByRole('link', { name: 'FarmBridge', exact: true }).first().click()
  await expect(page).toHaveURL(/\/products\/#farmbridge$/)
  await expect(page.locator('#farmbridge')).toBeVisible()

  await page.goto('/about/')
  await page.getByRole('main').getByRole('link', { name: 'Conduit', exact: true }).first().click()
  await expect(page).toHaveURL(/\/products\/#conduit$/)
  await expect(page.locator('#conduit')).toBeVisible()
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
