import { chromium, test } from "@playwright/test";

test("To create a new lead",async()=>{
const browser = await chromium.launch({channel:"chrome",headless:false})
const browsercontext = await browser.newContext()
const page = await browsercontext.newPage()
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","Demosalesmanager")
await page.fill("#password","crmsfa")
await page.click("input[type='submit']")
await page.click("text=CRM/SFA")
await page.click("//a[text()='Leads']")
await page.click("//a[text()='Create Lead']")
await page.fill("#createLeadForm_companyName","TestLeaf")
await page.fill("#createLeadForm_firstName","Vineeth")
await page.fill("#createLeadForm_lastName","Test")
await page.click("[name='submitButton']")
await page.waitForTimeout(5000)
})