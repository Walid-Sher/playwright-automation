import { test } from '@playwright/test';
 
test.describe("Test Group 1", () =>{

    test.beforeAll(async () =>{
        console.log("BeforeAll is Execution")
    })

    test.afterAll(async () =>{
        console.log("AfterAll is executed")
    })
    test.beforeEach(async () =>{
        console.log("BeforeEach is executed")
    })

    test.afterEach(async () =>{
        console.log("AfterEach is executed")
    })


    test('Test Case 1', async ({ page }) => {
           console.log("Test Case 1 is executed")             
        
    });

    test('Test Case 2', async ({ page }) => {
            console.log("Test Case 2 is executed")            
        
    });

    test('Test Case 3', async ({ page }) => {
        console.log("Test Case 3 is executed") 
                        
        
    });

});