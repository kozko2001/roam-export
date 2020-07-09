const puppeteer = require('puppeteer');

USERNAME = process.env.ROAM_USERNAME;
PASSWORD = process.env.ROAM_PASSWORD;

URL = process.env.ROAM_URL; // 'https://roamresearch.com/#/app/database';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

	const client = await page.target().createCDPSession();
await client.send('Page.setDownloadBehavior', {
  behavior: 'allow', downloadPath: './downloads/'
});
  await page.goto(URL);

  
  await page.waitFor('input[name=email]');
  await page.focus('input[name=email')
  await page.keyboard.type(USERNAME)

  await page.waitFor('input[name=password]');
  await page.focus('input[name=password')
  await page.keyboard.type(PASSWORD)

  await page.evaluate(() => {
    document.getElementsByTagName("button")[0].click();
  });


  
  await page.waitForFunction(() => document.getElementsByClassName("bp3-icon-more").length);
  await page.waitFor(4000);
  await page.evaluate(() => {
    document.getElementsByClassName("bp3-icon-more")[0].click();
  });

  let exportAll = await page.$x("//div[contains(text(), 'Export All')]");
  exportAll[0].click()

  await page.waitFor(1000);
  await page._client.send('Page.setDownloadBehavior', {behavior: 'allow', downloadPath: './'});
  exportAll = await page.$x("//button[contains(text(), 'Export All')]");
  exportAll[0].click()
  await page.waitFor(4000);

  await browser.close();
})();
