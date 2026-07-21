import {test} from "@playwright/test"
 {

 test("Create a Lead",async ({page}) =>
    {
        await page.goto("https://leaftaps.com/opentaps/control/main");
        
        await page.url()  //fetch the url of the page
        await page.title()  //fetch the title of the page
        
        //enter username and password and click on login button
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator('.decorativeSubmit').click()
        
        //click on CRM/SFA link
        await page.locator('.crmsfa').click();
        await page.waitForTimeout(3000);

        //click on create lead link
       
       await page.locator('a[href*="createLeadForm"]').click()
       await page.locator("#createLeadForm_companyName").fill("TestLeaf")
       await page.locator("#createLeadForm_firstName").fill("Priyanka")
       await page.locator("#createLeadForm_lastNameLocal").fill("Kumar")
       await page.locator("#createLeadForm_personalTitle").fill("Mrs")
       await page.locator("#createLeadForm_generalProfTitle").fill("QA")
       await page.locator("#createLeadForm_annualRevenue").fill("1000000")
       await page.locator("#createLeadForm_departmentName").fill("IT")
       const sourceDropdown= await  page.locator('[name="dataSourceId"]')
    const countdropdown = await sourceDropdown.count()

    for (let i =0 ;i< countdropdown; i++){

        console.log(await sourceDropdown.nth(i).innerText())

    }
    await page.waitForTimeout(2000)
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9811111110')
    await page.locator('[name="submitButton"]').click()




    }
)
}