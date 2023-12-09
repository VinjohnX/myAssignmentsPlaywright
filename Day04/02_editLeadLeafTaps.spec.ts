import { chromium, test } from "@playwright/test";


test("To edit test lead in leaftaps", async()=>{
    test.setTimeout(120000)
const browser = await chromium.launch({channel:"chrome",headless:false})
const browserContext = await browser.newContext()
const page = await browserContext.newPage()
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("Demosalesmanager")
await page.fill("#password","crmsfa")
await page.click("[value='Login']")
await page.click("text='CRM/SFA'")
await page.getByRole('link', { name: 'Create Lead' }).click()
await page.fill("#createLeadForm_companyName","TestLeaf")
await page.fill("#createLeadForm_firstName","Vineeth")
await page.fill("#createLeadForm_lastName","Testleaf")
await page.click("[name='submitButton']")
await page.click("text='Edit'")
await page.fill("#updateLeadForm_companyName","Edtech TestLeaf")
await page.click("[value='Update']")
await page.waitForTimeout(8000)
})