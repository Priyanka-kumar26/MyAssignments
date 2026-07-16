import { test, chromium, webkit } from "@playwright/test";
test('Launch RedBus in Edge',async () => {
    const browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.redbus.in/")
    console.log(await page.title())
    console.log(page.url())
})



test('Launch Flipkart in WebKit ',async () => {
    
    const browser=await webkit.launch({headless:false})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("https://www.flipkart.com/")
    console.log(await page.title())
    console.log(page.url())
})