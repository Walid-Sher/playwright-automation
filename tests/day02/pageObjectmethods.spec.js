import { test } from '@playwright/test';

test('Getting the title of the page', async ({ page }) => {
  // goto https://practice.cydeo.com/
  await page.goto('https://practice.cydeo.com/');

let actualTitle = await page.title();

expect(actualTitle).tobe("Practice");

console.log(actualTitle);
});

test('Getting the current URL of the page', async ({ page }) => {
    
await page.goto('https://practice.cydeo.com');
let currentURL =page.url();
console.log(currentURL);
await page.waitForTimeout(3000);

  });

test('Set the window size', async ({ page }) => {
    
    await page.goto('https://practice.cydeo.com');
    await page.setViewportSize({ width: 800,height: 600 });})
await page.waitForTimeout(3000);
;