//const debug = require('debug')('puppeteer');
const puppeteer = require('puppeteer');
const dotenv = require('dotenv').config();

(async () => {
  const browser = await puppeteer.launch({headless: false, args: [`--proxy-server=${process.env.PROXY}`]});
  const page = await browser.newPage();
  await page.goto('https://www.pandora.com/');
  await page.screenshot({path: 'pandora.png'});

  await browser.close();
})();