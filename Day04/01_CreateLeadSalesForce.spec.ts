import { chromium, test } from "@playwright/test";

test("To create leads and verify name created",async()=>{
const browser = await chromium.launch({channel:"chrome",headless:false})
const browserContext = await browser.newContext()
const page = await browserContext.newPage()
await page.goto("https://login.salesforce.com")
await page.fill("input#username","vineeth1@testleaf.com")
const pwdField= page.locator("input#password")
await pwdField.fill("Testleaf@94")
await page.click("#Login")
await page.waitForLoadState("load")
await page.click("div.slds-icon-waffle")
await page.getByLabel("View All Applications").click()
await page.click("//p[text()='Sales']")
//await page.getByRole('link', { name: 'Leads' }).click()
await page.click("a[title='Leads']")
await page.getByRole('button',{name:'New'}).click()
await page.click("[name='salutation']")
await page.click("//span[text()='Mr.']")
await page.getByPlaceholder("Last Name").fill("Tester")
await page.fill("[name='Company']","TestLeaf")
await page.getByRole('button',{name:'Save', exact: true}).click()
let nam = await page.locator("[name='primaryField'] lightning-formatted-name").innerText();
if(nam === "Mr. Tester")
{
    console.log("Name is matching")
}
else
{
    console.log("Name is not matching")
}
await page.waitForTimeout(5000)
})