import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Animal Facts');
});

test('no fact is shown by default', async ({ page }) => {
  await page.goto('/');

  const locator = page.getByTestId('fact-card-0');

  await expect(locator).not.toBeVisible();
});

test.describe('requesting facts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('refresh-facts-button').click();
  });

  test('a fact is rendered', async ({ page }) => {
    const locator = page.getByTestId('fact-0');
  
    await expect(locator).toBeVisible();
  });
});
