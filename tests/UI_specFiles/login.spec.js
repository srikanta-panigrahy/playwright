const { test, expect } = require("@playwright/test");
const sections = require("../../pageObjects/UI_Pages/pageIndex");
const path = require("path");
require("dotenv").config();
const { readExcelData } = require("../../utilites/readExcel.js");

test.describe("Login Tests", () => {
  test.only("Login using .env credentials", async ({ page }) => {
    const loginPage = new sections.LoginPage(test, page);
    await loginPage.launchingApplication([process.env.BASE_URL]);
    await loginPage.logInWithValidCredentials(
      [process.env.USER_EMAILID],
      [process.env.PASSWORD]
    );
  });

  test("Login with Excel data", async ({ page }) => {
    const excelPath = path.resolve(__dirname, "../../test_Data/userData.xlsx");
    const testData = readExcelData(excelPath, "Sheet1");

    for (const { Email, Password } of testData) {
      const loginPage = new sections.LoginPage(test, page);
      await loginPage.launchingApplication([process.env.BASE_URL]);
      await loginPage.logInWithValidCredentials([Email], [Password]);
    }
  });
});
