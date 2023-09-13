const { test, expect ,chromium} = require('@playwright/test');


test('Verify Flipkart Automation', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.flipkart.com/');
  await page.waitForSelector('_2KpZ6l _2doB4z');

  // Mouse hover on "Electronics" menu
  await page.hover('text=Electronics');
  await page.waitForSelector('text="Laptops & Desktops"');

  // Mouse hover on "Laptop and Desktop"
  await page.hover('text="Laptops & Desktops"');
  await page.waitForSelector('text="Laptops"');

  // Click on "Laptops"
  await page.click('text="Laptops"');
  await page.waitForLoadState();

  // Verify Banner is present
  const banner = await page.waitForSelector('._1-wG7', { state: 'attached' });
  expect(banner).toBeTruthy();

  // Inside "ChromeBook" section, Click on each Item
  await page.click('text=Chromebook');
  await page.waitForLoadState();

  // Verify Name and Price of each Item
  const laptopItems = await page.$$('._1AtVbE');
  expect(laptopItems).toBeTruthy();

  for (const item of laptopItems) {
    const name = await item.$eval('._4rR01T', (element) => element.innerText);
    const price = await item.$eval('._30jeq3', (element) => element.innerText);
    expect(name).toBeTruthy();
    expect(price).toBeTruthy();
  }

  await browser.close();
});
