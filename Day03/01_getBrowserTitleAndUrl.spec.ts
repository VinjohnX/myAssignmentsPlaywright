import { chromium, test } from "@playwright/test";

test("To get browser Title and URL",async()=>{

    const browser = await chromium.launch({headless:false})
    const browsercontext = await browser.newContext()
    const page = await browsercontext.newPage()
    await page.goto("https://login.salesforce.com")
    await page.fill("#username","vineeth1@testleaf.com")
    await page.fill("#username","vineeth1@testleaf.com")
await page.fill("[name=pw]","Testleaf@94")
await page.click("#Login"  )
await page.waitForLoadState("load");
const title = await page.title()
console.log("The title is "+title)
const url2 = page.url()
console.log("The URL is "+url2)
await page.waitForTimeout(5000)
})