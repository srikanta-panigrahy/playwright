const { excuteSteps } = require("../../utilities/actions");
const { expect } = require("@playwright/test");
const { highlightElement } = require("../../utilities/highlight_element");
const uiTestData = require("../../test_Data/testData.json");
exports.LoginPage = class LoginPage {
  constructor(test, page) {
    this.test = test;
    this.page = page;
    this.loginBtn = page.locator("//div[text()='Log in']");
    this.emailInputField = page.locator("//input[@id='email']");
    this.passwordInputField = page.locator("//input[@id='password']");
    this.submitBtn = page.locator("//button[@type='submit']");
    this.hamburgerMenuIcon = page.locator("//img[@alt='toggleAccountIcon']");
    this.profileName = page.locator("(//div[contains(text(),'Vrushab')])[2]");
  }
  launchingApplication = async (baseUrl) => {
    await excuteSteps(
      this.test,
      await this.page,
      "navigate",
      `Launch the Joulez sign-in webpage ${baseUrl}`,
      baseUrl
    );
  };
  clickOnLoginButton = async () => {
    await excuteSteps(
      this.test,
      this.loginBtn,
      "click",
      `Click on Login button`
    );
  };
  EnterUserEmail = async (email) => {
    await excuteSteps(
      this.test,
      this.emailInputField,
      "fill",
      `Enter the user's email address in the email input field.${email}`,
      email
    );
  };
  EnterPassword = async (pwd) => {
    await excuteSteps(
      this.test,
      this.passwordInputField,
      "fill",
      `Enter the user's password in the password input field.${pwd}`,
      pwd
    );
  };
  clickOnSubmitButton = async () => {
    await excuteSteps(
      this.test,
      this.submitBtn,
      "click",
      `Click on submit button`
    );
  };
  clickOnHamburgerMenuIcon = async () => {
    await excuteSteps(
      this.test,
      this.hamburgerMenuIcon,
      "click",
      `Click on the HamburgerMenuIcon`
    );
  };
  logInWithValidCredentials = async (email, pwd) => {
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.loginBtn);
    await this.clickOnLoginButton();
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.emailInputField);
    await this.EnterUserEmail(email);
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.passwordInputField);
    await this.EnterPassword(pwd);
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.submitBtn);
    await this.clickOnSubmitButton();
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.hamburgerMenuIcon);
    await this.clickOnHamburgerMenuIcon();
    await this.test.step("Wait for 4 seconds for page loading", async () => {
      await this.page.waitForTimeout(parseInt(process.env.MEDIUM_WAIT));
    });
    await highlightElement(this.page, this.profileName);
    await expect(
      this.profileName,
      "Verify that the profile name matches the logged-in user's name"
    ).toHaveText(uiTestData.JoulezMetaData.profileName);
  };
};
