// create a playwright test with empty body

import { expect, test } from '@playwright/test';

test('By passing authentication', async () => {
    // navigate to cydeo practice
    await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');
    await page.waitForTimeout(5000);
    // add assertions here

    let congrats = page.locator("//p[contains(text()='Congratulations!']");
    await expect(congrats).toBeVisisble();

});

// create playwright empty test


test('By passing authentication by encoding credentials in base64 format', async() => {
    // encoding credentials in base64 format
    let encodedCredentials =Buffer.from("admin:admin").toString("base64");

    // set up the authentication header
await page.setExtraHTTPHeaders({
Authorization: 'Basic ${encodedCredentials}'
});
await page.goto('https://admin:admin@practice.cydeo.com/basic_auth');
await expect(congrats).toBeVisisble();

});