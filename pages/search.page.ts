import { Locator, Page } from "@playwright/test";

export class SearchPage {
    private page: Page;
    private searchInput : Locator
    private searchButton : Locator
    
    constructor(page: Page) {
        this.page = page;
        this.searchInput = this.page.getByLabel("Pesquisar",{exact: true})
        this.searchButton = this.page.getByRole("button",{name: "Pesquisa Google"})
    }

    async goto(): Promise<void> {
        await this.page.goto("/");
    }
    
    async searchFor(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.searchInput.press("Enter");
    }
    
}