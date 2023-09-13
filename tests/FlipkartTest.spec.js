const {test}= require('@playwright/test');

test ('Assignment' , async({ browser })=>
{
  const context = await  browser.newContext();
const page = await context.newPage() ;
await page.goto("https://www.flipkart.com/");
    await page.hover('text=Electronics');
    await page.hover('text=Laptop & Desktop');
   await page.click('text=Laptop');
    /*
    // Verify Banner is present
    const banner = await page.locator('.aMaAEs');
    if (await banner.isVisible())
        console.log('Banner is present');
    else
        console.log('Banner is not present');
    const chromebookItems = await page.locator('text=Chromebook').sibling('.eFQ30H');
    for (const item of chromebookItems) {
        await item.click();
        await page.waitForLoadState('domcontentloaded');
        const name = await page.locator('.B_NuCI');
        const price = await page.locator('._30jeq3._16Jk6d');

        console.log('Name:', await name.textContent());
        console.log('Price:', await price.textContent());

        await page.goBack();
    }

    await browser.close();
    
    */
});