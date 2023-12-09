import { test,chromium } from "@playwright/test";

test("The Create Individuals in Salesforce", async() =>{
test.setTimeout(120000)
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
await page.getByRole('link',{name:'Individuals'}).click()
await page.getByTitle("New").nth(1).click()
await page.getByPlaceholder("Last Name").fill("Vineeth")
await page.click("(//span[text()='Save'])[2]")
let indName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText()
if(indName="Vineeth")
{
    console.log("Individual name matching")
}
else
{
    console.log("Individual name not matching")
}
await page.waitForTimeout(7000)

})