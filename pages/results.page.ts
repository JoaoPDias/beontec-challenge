import { Locator, Page } from "@playwright/test";

export class ResultsPage {
    public page: Page;
    public results: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.results = this.page.locator('h3');
    }

    async clickOn(result:string): Promise<void> {
        await this.page.locator('h3').getByText(result,{exact:true}).click();
    }
}