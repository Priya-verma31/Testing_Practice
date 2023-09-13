const {test}= require('@playwright/test');

test ('Assignment' , async({ browser })=>
{
  const context = await  browser.newContext({
    incognito :true ,
  });
const page = await context.newPage() ;
await page.goto("https://www.flipkart.com/");
await page.locator("button[class='_2KpZ6l _2doB4z']").click();
await page.hover("text=Electronics");
//------------------------------------------
await page.hover("text=Laptop and Desktop");
await page.locator("a[href*=laptops-store]").nth(2).click();
await page.waitForTimeout(4000);

const banner = await page.locator('_2oNtQM');
if (await banner.isVisible())
console.log("Banner is Present");
else
console.log("Banner is not Present");

//const chromebookSection = await page.waitForSelector('text=ChromeBooks');
//await page.waitForLoadState();
  //await chromebookSection.click();

 
/* await page.waitForSelector("div a[title*='Chromebook'].s1Q9rs", { timeout: 5000 });
  const links = await page.$$("div a[title*='Chromebooks'].s1Q9rs");
  for (const link of links) {
      await page.waitForTimeout(3000);
      const beforeClickLaptopName = await link.textContent();
      console.log("beforeClickOnlinkLaptopName = ", beforeClickLaptopName);
      const [newPage] = await Promise.all([
      context.waitForEvent('page'),link.click()])
      }
    */  

      for(let i =0 ; i <=5 ; i){
        await page.locator("div[data-tracking-id=Chromebooks']._3E8aIl a._Zic51i").nth(i).click();
      }
      await page.pause();

      //const name =page.locator =await('_28_T72');
//const price = await page.locator('_3I9_wc _2p6lqe');

  

});