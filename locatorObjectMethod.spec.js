import { test } from '@playwright/test';

test.describe('Test Group', () => {

    // write test before each test
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
    });

  test('Check the radio button', async ({ page }) => {

    let checkboxesLink = page.locator("text='Checkboxes'");

await checkboxesLink.click();
let checkbox1 =page.locator("#box1");
await page.waitForTimeout(3000);
await checkbox1.check();

  });

  test('Uncheck the radio button', async ({ page }) => {
    let checkboxesLink = page.locator("text='checkboxes'");
    await checkboxesLink.click();

    let checkbox2 = page.locator("#box2");
    await page.waitForTimeout(3000);
    await checkbox2.uncheck();


  });

  test('Select Option Method used for drop down', async ({ page }) => {
   let DropdownLink= page.locator("text='Dropdown'");
    await DropdownLink.click();

    let simpleDropDown=page.locator("//select[@id='dropdown']");
  });
});