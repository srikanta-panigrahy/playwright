const { test, expect, chromium } = require('@playwright/test');
const sections = require('../../pageObjects/UI_Pages/pageIndex');
require("dotenv").config();

test.describe('@smoke this is the 7/11 feature', async () => {
    let page;
    test.beforeAll('before every testcase do this', async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        const loginPage = new sections.EENLoginPage(page, test);
        await loginPage.Goto(process.env.BASE_URL);
        await loginPage.loginUser([process.env.USER_EMAILID]);
        await loginPage.clickNext();
        await page.waitForTimeout(parseInt(process.env.SMALL_WAIT));
        await loginPage.loginPass([process.env.PASSWORD]);
        await loginPage.clickSign();
        

    })

    test(' register pos', async () => {
        const registersPage = new sections.RegistersPage(page, test);
        await registersPage.Dash();
        await registersPage.adddevice();
        await registersPage.site();
        await registersPage.Bridge();
    })

    test(' delete register', async () => {
        const registersPage = new sections.RegistersPage(page, test);
        const deleteRegistersPage = new sections.DeleteRegisterPage(page, test);
        await registersPage.Dash();
        await deleteRegistersPage.pos();
    })

})




