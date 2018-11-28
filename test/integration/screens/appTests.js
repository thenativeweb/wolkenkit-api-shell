/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat'),
      puppeteer = require('puppeteer');

const env = require('../../shared/env');

suite('App', function () {
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

  test('displays an animation on startup.', async () => {
    await page.waitForSelector('#wolkenkit-brand-logo');

    const text = await page.$eval('#wolkenkit-brand-typo', el => el.innerText);

    assert.that(text.trim()).is.equalTo('wolkenkit');
  });

  test('displays the information screen.', async () => {
    const sideBarItem = await page.$('#sidebar-item-info');

    await sideBarItem.click();

    await page.waitForSelector('#screen-information-configuration', {
      visible: true
    });
  });
});
