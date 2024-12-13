import { expect, test } from "@playwright/test";
import { ResultsPage } from "../pages/results.page";
import { SearchPage } from "../pages/search.page";
test.describe("Google Search", () => {
  test("Valid Search", async ({ page }) => {
    const query = "Software Testing";
    const expectedResult = "What Is Software Testing? | IBM";
    const searchPage = new SearchPage(page);
    const resultPage = new ResultsPage(page);
    await searchPage.goto();
    await searchPage.searchFor(query);
    await expect(resultPage.results).toContainText([expectedResult]);
  });

  test("Search Result Navigation", async ({ page }) => {
    const query = "Software Testing";
    const expectedResult = "What Is Software Testing? | IBM";
    const searchPage = new SearchPage(page);
    const resultPage = new ResultsPage(page);
    await searchPage.goto();
    await searchPage.searchFor(query);
    await resultPage.clickOn(expectedResult);
    await expect(resultPage.page).toHaveURL(
      "https://www.ibm.com/topics/software-testing"
    );
  });
});
