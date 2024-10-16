import {test} from '@playwright/test';

test('Youtube search', async ({ page }) => {
    await page.goto('http://www.youtube.com');

 await page.waitForTimeout(3000);

 

let searchBox = page.locator("//input[@id='search_query']");

await searchBox.focus();

await searchBox.fill('Cydeo');

await page.waitForTimeout(3000);
await searchBox.press('Enter');

await page.waitForTimeout(3000);


});




