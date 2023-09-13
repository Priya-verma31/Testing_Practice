const { test } = require('@playwright/test');

test('Assignment', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.flipkart.com/");
  await page.locator("button[class='_2KpZ6l _2doB4z']").click();
  //const electronicsMenu = await page.locator('text=Electronics');
  //await page.waitForLoadState('networkidle');
  await page.hover('text=Electronics');
  const laptopDesktopMenu = await page.locator('text=Laptop and Desktop');
  await page.waitForLoadState('networkidle');
  await laptopDesktopMenu.hover('text=Laptop and Desktop');
  const laptopsLink = await page.locator('text=Laptops');
  await laptopsLink.click();
  /*
  const banner = await page.locator('.banner');
  if (await banner.isVisible())
    console.log('Banner is present.');
  else
    console.log('Banner is not present.');
  const chromebookSection = await page.locator('text=ChromeBook');
  await chromebookSection.click();

  const items = await page.locator('.item');

  for (const item of items) {
    const name = await item.locator('.item-name').innerText(); 
    const price = await item.locator('.item-price').innerText(); 

    console.log('Name:', name, 'Price:', price);
  }

  await browser.close();
  */
});