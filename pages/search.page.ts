import { Locator, Page } from "@playwright/test";

export class SearchPage {
    public page: Page;
    private searchInput : Locator
    
    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByLabel("Pesquisar",{exact: true})
    }

    async goto(): Promise<void> {
        await this.page.goto("/");
    }
    
    async searchFor(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchInput.press("Enter");
    }
    
}