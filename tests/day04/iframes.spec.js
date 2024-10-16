import { test } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto("https://practice.cydeo.com/iframe");
});

test.describe('Test Group', () => {
  test('Locate the iframe by ID', async ({ page }) => {
   let myFrame = page.frameLocator("#mce_0_ifr"); // locating the iframe
    let elementInsideTheFrame=myFrame.locator("//body[@id='tinymce']");
     // locating the element thats inside the iframe

     await elementInsideTheFrame.clear();

     await elementInsideTheFrame.fill("Hello CYDEO");

     await expect(elementInsideTheFrame).toHaveText("Hello CYDEO");
  });

  test('locate the frame by CSS', async ({ page }) => {
    let myFrame = page.frameLocator("#mce_0_ifr"); // locating the iframe
    let elementInsideTheFrame=myFrame.locator("//body[@id='tinymce']");

    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Control+A");
    await page.waitForTimeout(3000);
    await elementInsideTheFrame.press("Backspace");
    await page.waitForTimeout(3000);
    await page.fill("Playwright Automation");
    expect(elementInsideTheFrame)

  });

  test('', async ({ page }) => {
    // Your test steps go here
  });
});