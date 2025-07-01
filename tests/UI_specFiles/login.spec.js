const { test, expect } = require("@playwright/test");
const sections = require("../../pageObjects/UI_Pages/pageIndex");
const uiTestData = require("../../test_Data/testData.json");
require("dotenv").config();
test("Log in to the Joulez application using valid credentials", async ({
  page,
}) => {
  const loginPage = new sections.LoginPage(test, page);
  await loginPage.launchingApplication([process.env.BASE_URL]);
  await loginPage.logInWithValidCredentials(
    [process.env.USER_EMAILID],
    [process.env.PASSWORD]
  );
});
