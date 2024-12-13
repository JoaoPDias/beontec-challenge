import { Locator, Page } from "@playwright/test";

export class ResultsPage {
    private page: Page;
    public results: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.results = this.page.locator('h3');
    }
}