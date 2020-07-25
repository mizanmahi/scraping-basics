const debug = require('debug')('puppeteer');
const puppeteer = require('puppeteer');

(async () => {

  debug('Opening browser...')
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  debug('Going to the site..')
  await page.goto('http://react-redux.realworld.io/#/?_k=zbpiov');

  debug('Waiting for p tag')
  await page.waitForSelector('.article-preview p');

  debug('Getting the title....')
  const title = await page.title();

  const preview = await page.evaluate(() => {
      return document.querySelector('.article-preview p').innerHTML;
  })
  console.log({title, preview});
  

  await browser.close();
})();