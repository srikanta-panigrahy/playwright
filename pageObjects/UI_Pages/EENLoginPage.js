const { excuteSteps } = require('../../utilities/actions.js');

export class EENLoginPage {
    constructor(page,test){
        this.page = page;
        this.test=test;
        this.username = page.locator("//input[@placeholder='Email']");
        this.password = page.locator('//input[@placeholder="Password"]');
        this.nextButton = page.locator('//button[normalize-space()="Next"]');
        this.signin = page.locator('//button[normalize-space()="Sign in"]');
        
    }

    async Goto(url){
        await this.page.goto(url);
    }

    async loginUser(user){
        await excuteSteps(this.test,this.username, "fill"," launches the browser and enter the username", user);
    }

    async loginPass(pass){
        await excuteSteps(this.test,this.password, "fill","User enter the password",pass);
    }

    async clickNext(){
        await excuteSteps(this.test,this.nextButton, "click","click next button");
    }

    async clickSign(){
        await excuteSteps(this.test,this.signin, "click","click sign in button");
    }
    
    
}
