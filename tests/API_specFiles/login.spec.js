const { test, expect } = require("@playwright/test");
const uiTestData = require("../../test_Data/testData.json");
const apiTestData = require("../../test_Data/apiTestData.json");
const paylodsFile = require("../../utilities/payloads");
const statuscodesFile = require("../../utilities/statusCodes");
const fs = require("fs");
const path = require("path");
require("dotenv").config();
const dotenv = require("dotenv");
const envConfig = dotenv.parse(fs.readFileSync(".env"));
const baseUrl = process.env.API_BASE_URL;
const email = process.env.USER_EMAILID;
const password = process.env.PASSWORD;
test("Creating auth token using valid user credentials", async ({
  request,
}) => {
  const endpoint = apiTestData.JoulezMetaData.login.endPoint;
  const payloadaData = paylodsFile.loginPayload(email, password);
  const response = await request.post(`${baseUrl}${endpoint}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: payloadaData,
  });

  const responseBody = await response.json();

  expect(response.status()).toBe(statuscodesFile.STATUS_CODES.OK);
  const accessToken = responseBody.data.jwt;
  envConfig.TOKEN = accessToken;
  const updatedEnv = Object.entries(envConfig)
    .map(([key, value]) => `${key}=${value}`)
    .join("\n");
  fs.writeFileSync(".env", updatedEnv);
});
