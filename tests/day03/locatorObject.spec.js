


import { test, expect } from '@playwright/test';

// create before eachtest function

test.beforeEach(async ({ page }) => {
  await page.goto("https://practice.cydeo.com/");

});

// create after eachtest function

test.describe('Test Group', () => {

  test('getAttribute() retrieves the attribute value', async ({ page })=>
     {
console.log(await page.locator("text='A/B Testing'").getAttribute("href"));
console.log(await page.locator("text='Home'").getAttribute("class"));
  });

  test('state methods of locator', async ({ page }) => {
let testAutomationPractice = page.locator("//span[@class='h1y']");

console.log(await testAutomationPractice.isVisible());
//verifies that the element is visible
expect (await testAutomationPractice.isVisible()).toBeTruthy();
await expect(testAutomationPractice).toBeVisible();

console.log("--------------");

let autoComplete = page.locator("text='Autocomplete'");
console.log(await autoComplete.isEnabled());

await expect(autoComplete).toBeEnabled();

console.log("--------------");

await page.locator("text='Checkboxes'").click();

let checkBox1 = page.locator("//input[@type='checkbox' and @id='box1']");
let checkBox2 = page.locator("//input[@type='checkbox' and @id='box2']");

// verify that checkbox1 is unchecked by default
expect(await checkBox1.isChecked()).toBeFalsy();
await expect(checkBox1).not.toBeChecked();

// verify that checkbox1 is checked by default
expect(await checkBox2.isChecked()).toBeTruthy();
await expect(checkBox2).toBeChecked();



  });

  test('C', async ({ page }) => {
    // Your test steps go here
  });
});