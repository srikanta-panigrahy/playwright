const { excuteSteps } = require('../../utilities/actions.js');
const {test,expect}=require('@playwright/test');
const {page}=require('@playwright/test');

export class RegistersPage{

    constructor(page){
        this.page=page;
        this.Dashboard=page.getByText(' Dashboard ');
        this.AddDevice=page.getByTestId('dashboard-main-dropdown-menu');
        this.addposregister=page.getByTestId('Add POS register');
        this.PlusButton=page.getByTestId('pos-registers-sidebar-open-button');
        this.Addsite=page.getByPlaceholder('Select Site');
        this.Selectsite=page.locator('//div[text()="Dont delete"]');
        this.AddBridge=page.getByLabel('Select Bridge');
        this.SelectBridge=page.locator('//div[contains(@class,"content")]//div[text()="711 Test"]');
        
        
    }
    async Dash(){
        await excuteSteps(test,this.Dashboard,"click","clicking on the dashboard");
        await expect(this.AddDevice).toBeVisible();
    }
    
    async adddevice(){
        await excuteSteps(test,this.AddDevice,"click","clicking on adddevice");
        if(!this.addposregister.isVisible()){
            await excuteSteps(test,this.AddDevice,"click");
        }
        await excuteSteps(test,this.addposregister,"click","addposregister");
        await excuteSteps(test,this.PlusButton,"click","click on the plus button");
        //
       
    }
    async site(){
        await excuteSteps(test,this.Addsite,"click","addsite");
        await excuteSteps(test,this.Selectsite,"click","selecting the site");
    }
    async Bridge(){
        await excuteSteps(test,this.AddBridge,"click","Selecting bridge")
        await excuteSteps(test,this.SelectBridge,"click","Selecting bridge");
    }


}