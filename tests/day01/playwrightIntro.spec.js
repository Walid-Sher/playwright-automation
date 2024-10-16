// const{test} = require('@playwright/test'); both are the ways to import
import {test} from '@playwright/test';

test('Simple playwright test', async({page})=>{
    await page.goto('https://google.com/')

    await page.waitForTimeout(3000); 

let searchBox =page.locator("//textarea[@class='glFyf']");
await searchBox.fill("Playwright Automation")

await page.waitForTimeout(3000);
 

//await searchBox.type("Playwright Automation");
});