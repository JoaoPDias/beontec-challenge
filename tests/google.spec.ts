import { expect, test } from "@playwright/test"
import { ResultsPage } from "../pages/results.page"
import { SearchPage } from "../pages/search.page"
test.describe("Google Search", () => {
  let searchPage: SearchPage
  let resultPage: ResultsPage
  const query = "Software Testing"
  const expectedResult = "What Is Software Testing? | IBM"
  
  test.beforeEach(async ({ page }) => {
    searchPage = new SearchPage(page)
    resultPage = new ResultsPage(page)
  })

  test("Valid Search", async () => {
    await searchPage.goto()
    await searchPage.searchFor(query)
    await expect(resultPage.results).toContainText([expectedResult])
  })

  test("Search Result Navigation", async () => {
    await searchPage.goto()
    await searchPage.searchFor(query)
    await resultPage.clickOn(expectedResult)
    await expect(resultPage.page).toHaveURL(
      "https://www.ibm.com/topics/software-testing"
    )
  })
})
