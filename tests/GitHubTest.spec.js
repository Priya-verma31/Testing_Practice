const {test}= require('@playwright/test');

test ('Assignment' , async({ browser ,page})=>
{
  //const context = await  browser.newContext();
  //const page = await context.newPage() ;
await page.goto("https://github.com/");
const openSourceMenu = await page.waitForSelector('text="Open Source"');
await openSourceMenu.hover();
// click on submenu 
await page.click('text="Topics"');
//Click on 2nd topic. (Note: On every refresh the tocpics will change)
await page.locator("div [class*='text-center Link']").nth(1).click();
await page.locator("a[class*='Link text-bold']").nth(0).click();
const CurrentPageUrl = await page.url();
const repoUrl= await CurrentPageUrl.split('/');
const repoUserUrl =  await CurrentPageUrl.split('/');
const newURL = await CurrentPageUrl.replace('https://github.com/','');

const SearchBox = (await page.waitForSelector("[placeholder='Search or jump to...']")).click();
await page.locator("#query-builder-test").fill('');
await page.locator("#query-builder-test").fill(newURL);

//await SearchBox.fill('');
//await SearchBox.type(newURL);
await page.keyboard.press('Enter');
await page.waitForSelector("span[class*='Text-sc-17v1xeu-0 k']").click();
await page.click('ul.repo-list li:nth-child(1) a.v-align-middle');

const newPageURL = page.url();
const newRepoURlp = newRepoURl.split('/');
const newRepoUser  = newRepoURlp[3];

//if(newRepoUser ===repou)

}  
)