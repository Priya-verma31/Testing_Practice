const { test, expect } = require('@playwright/test');

test('Verify the current repoUser is same as the previous repoUser', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://github.com/");
  await page.hover('text=Open Source');
  await page.locator('text=Topics').click();
  await page.locator("div [class*='text-center Link']").nth(1).click();
  await page.locator("a[class*='Link text-bold']").nth(0).click();
  const CurrentPageUrl = await page.url();
  console.log("CurrentPageUrl  " + CurrentPageUrl);
  const SearchRepoUserUrl = CurrentPageUrl.split('github.com/')[1];
  await page.locator("[placeholder='Search or jump to...']").click();
  await page.locator("#query-builder-test").fill('');
  await page.locator("#query-builder-test").fill(SearchRepoUserUrl);
  await page.keyboard.press('Enter');
  await page.locator("a [class='Text-sc-17v1xeu-0 qaOIC search-match']").nth(0).click();
  const afterSearchRepo = await page.locator("[class*=' d-flex flex-wrap fl']").textContent();
  console.log(afterSearchRepo)
  expect(SearchRepoUserUrl).toContain(afterSearchRepo);
}
);
