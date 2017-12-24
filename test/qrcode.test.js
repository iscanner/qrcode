'use strict';

import {
  driver,
  BASE_URL
} from './helper';

import pkg from '../package';

describe('test/qrcode.test.js', () => {
  describe('page func testing', () => {
    before(() => {
      return driver
        .initWindow({
          width: 800,
          height: 600,
          deviceScaleFactor: 2
        });
    });

    afterEach(function () {
      return driver
        .coverage()
        .saveScreenshots(this);
    });

    after(() => {
      return driver
        .openReporter(false)
        .quit();
    });

    it('page render should be ok', () => {
      return driver
        .getUrl(BASE_URL)
        .sleep(1000)
        .elementByCss('div.editor > div:nth-child(2) > input')
        .clear()
        .sendKeys(pkg.repository.url)
        .sleep(1000)
        .elementByCss('#button')
        .click()
        .sleep(500);
    });
  });
});
