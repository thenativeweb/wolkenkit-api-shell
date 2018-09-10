/* eslint-disable strict */

'use strict';

/* eslint-enable strict */

const assert = require('assertthat');

const browser = require('../../shared/browser');

suite('App', function () {
  this.timeout(5 * 1000);

  let page;

  setup(async () => {
    page = await browser.setupPage();
  });

  teardown(async () => {
    await browser.teardownPage(page);
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
