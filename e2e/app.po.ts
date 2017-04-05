import { browser, element, by } from 'protractor';

export class QIQOWebA4Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.id('page-title')).getText();
  }
}
