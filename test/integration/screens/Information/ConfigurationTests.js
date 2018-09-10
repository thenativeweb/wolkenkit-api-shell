/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../../shared/browser');

suite('App', function () {
  this.timeout(5 * 1000);

  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
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
