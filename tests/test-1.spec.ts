import { test, expect } from '@playwright/test';

test('open home page and navigate to supoort', async ({ page }) => {
  await page.goto('https://www.spectrum.com/');
  await page.getByRole('link', { name: 'Support', exact: true }).click();
  await page.goto('https://www.spectrum.net/support');
  await page.getByLabel('Enter your search term, or').click();
  await page.getByLabel('Enter your search term, or').click();
  await page.getByLabel('Enter your search term, or').fill('how I protect my personal information');
  await page.getByLabel('View all results').getByRole('img').click();
  await page.getByText('How to Protect Your Personal').click();
  await page.getByRole('link', { name: 'Related Articles' }).click();
  await page.getByRole('link', { name: 'Online Security Learn how' }).click();
  await expect(page.locator('ng-component')).toContainText('Online Security');
});

