/* eslint-disable strict */
'use strict';
/* eslint-enable strict */

const assert = require('assertthat'),
      puppeteer = require('puppeteer');

const env = require('../../../shared/env');

suite('information/configuration', function () {
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

  test('displays the information about the configuration screen.', async () => {
    const sideBarItem = await page.$('#sidebar-item-info');

    await sideBarItem.click();

    await page.waitForSelector('#screen-information-configuration', {
      visible: true
    });

    const screenTitle = await page.$eval('#screen-information-configuration-headline', el => el.innerText);

    assert.that(screenTitle.trim()).is.equalTo('Configuration');

    const screenText = await page.$eval('#screen-information-configuration-text', el => el.innerText);

    assert.that(screenText.trim()).is.equalTo('The configuration of this application is available at /v1/configuration.json.');
  });
});
