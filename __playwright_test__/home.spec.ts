import { test, expect } from '@playwright/test';

const base = 'http://localhost:3000'


// has title  

test('has title',async ({page})=>{
    await page.goto(base)
    await page.waitForLoadState('domcontentloaded'); 
    await expect(page).toHaveTitle(/ETIN/);
})


test('navigates to auth page on Sign In click', async ({ page }) => {
  await page.goto(base);
  await page.waitForLoadState('domcontentloaded'); 
  await page.getByRole('link', { name: /Sign In/i }).click();
  await expect(page).toHaveURL(base+'/auth');
});
