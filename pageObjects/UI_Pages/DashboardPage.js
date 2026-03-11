const { expect } = require('@playwright/test');
const { excuteSteps } = require('../../utilities/actions.js');


export class DeleteRegisterPage {

    constructor(page, test) {
        this.page = page;
        this.test = test;
        this.PosSystems = page.locator('//div[normalize-space(text())="POS systems"]');

    }

    async pos() {
        await expect(this.PosSystems).toBeVisible();
        await excuteSteps(this.test, this.PosSystems, "scroll", "scroll to pos system")
        await excuteSteps(this.test, this.PosSystems, "click", "clicking on the pos system")
    }
}
