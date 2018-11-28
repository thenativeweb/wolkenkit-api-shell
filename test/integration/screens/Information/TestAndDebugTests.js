/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat'),
      puppeteer = require('puppeteer');

const env = require('../../../shared/env');

suite('information/test-and-debug', function () {
  this.timeout(5 * 1000);

  let browser,
      page;

  suiteSetup(async () => {
    browser = await puppeteer.launch({ headless: env.HEADLESS });
  });

  setup(async () => {
    page = await browser.newPage();

    await page.setViewport(env.VIEWPORT);
    await page.goto(env.APP_URL);
  });

  teardown(async () => {
    await page.close();
  });

  test('displays information about the console.', async () => {
    await page.goto(`${env.APP_URL}/#/info/test-and-debug`);

    const screenTitle = await page.$eval('#screen-information-test-debug-headline', el => el.innerText);

    assert.that(screenTitle.trim()).is.equalTo('Test and Debug');
  });

  test('opens the console in a new tab.', async () => {
    await page.goto(`${env.APP_URL}/#/info/test-and-debug`);

    await page.waitForSelector('#screen-information-test-debug-button');

    const openConsoleButton = await page.$('#screen-information-test-debug-button');

    const newPagePromise = new Promise(resolve => {
      browser.once('targetcreated', target => resolve(target));
    });

    openConsoleButton.click();

    const target = await newPagePromise;

    const newPage = await target.page();

    const newUrl = await newPage.url();

    assert.that(newUrl).is.equalTo('https://console.wolkenkit.io/?host=localhost&port=8080');
  });
});
