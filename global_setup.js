const fs = require('fs');
const path = require('path');
const { chromium } = require('@playwright/test');

function clearAllureResultsFolder() {
  const resultsPath = path.join(__dirname, "allure-results");

  if (fs.existsSync(resultsPath)) {
    fs.rmSync(resultsPath, { recursive: true, force: true });
  }
}

module.exports = async () => {
  // clear previous allure results
  clearAllureResultsFolder();

  // launch browser
  const browserServer = await chromium.launchServer({ headless: false });

  // save websocket endpoint
  fs.writeFileSync('wsEndpoint.txt', browserServer.wsEndpoint());
};