import { expect, test } from '@playwright/test'
import { ResultsPage } from "../pages/results.page"
import { SearchPage } from "../pages/search.page"

test("Search for Software Testing on Google", async ({ page }) => {
    const query = "Software Testing"
    const expectedResult = "What Is Software Testing? | IBM"
    const searchPage = new SearchPage(page);
    const resultPage = new ResultsPage(page);
    await searchPage.goto();
    await searchPage.searchFor(query);
    await expect(resultPage.results).toContainText([expectedResult]);
})