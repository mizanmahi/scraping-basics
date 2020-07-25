const puppeteer = require('puppeteer-extra');
const RecaptchaPlugin = require('puppeteer-extra-plugin-recaptcha');
const dotenv = require('dotenv').config();

puppeteer.use(
    RecaptchaPlugin({
      provider: {
        id: '2captcha',
        token: process.env.CAPTCHA_KEY
      },
      visualFeedback: true,
    })
);

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('https://www.google.com/recaptcha/api2/demo');
  
    await page.solveRecaptchas();

    await Promise.all([
        page.waitForNavigation(),
        page.click('#recaptcha-demo-submit')
      ]); 

    await page.screenshot({path: 'recaptcha.png'});

    await browser.close();
  })();