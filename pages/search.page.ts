import { Locator, Page } from "@playwright/test";

export class SearchPage {
    public page: Page;
    private searchInput : Locator
    
    constructor(page: Page) {
        this.page = page;
        //getByLabel depends on location of the label, so preffered to use locator by page structure.
        this.searchInput = this.page.locator("form textarea") 
    }

    async goto(): Promise<void> {
        await this.page.goto("/");
    }
    
    async searchFor(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchInput.press("Enter");
    }
    
}