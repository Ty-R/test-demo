import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle('Animal Facts');
});

test('no fact is shown by default', async ({ page }) => {
  await page.goto('/');

  const locator = page.getByTestId('fact-container');

  await expect(locator).not.toBeVisible();
});

test.describe('requesting a fact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');

    await page.getByTestId('fact-button').click();
  });

  test('a name is rendered', async ({ page }) => {
    const locator = page.getByTestId('fact-heading-1');
  
    await expect(locator).toBeVisible();
  });

  test('an image is rendered', async ({ page }) => {
    const locator = page.getByTestId('fact-image');
  
    await expect(locator).toBeVisible();
  });

  test('a fact is rendered', async ({ page }) => {
    const locator = page.getByTestId('fact');
  
    await expect(locator).toBeVisible();
  });
});
