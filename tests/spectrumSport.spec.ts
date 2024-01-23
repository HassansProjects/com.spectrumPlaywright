import {test, expect} from '@playwright/test'
import exp from 'constants'

test("Open home page and verify title", async ({page}) =>{
await page.goto("https://www.spectrum.com")
await expect(page).toHaveTitle("Spectrum: Internet, Mobile, Cable TV and Home Phone")
await page

})

test("Navigate to support page", async ({page}) =>{
    await page.goto("https://www.spectrum.com")
    await page.getByRole('//a[normalize-space()="Support"]');
