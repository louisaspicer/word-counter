import {by, element, ElementFinder} from "protractor";
import {promise} from "selenium-webdriver";

export class WordCountComponent {
  appRoot = 'app-word-count';

  getWordCountButton(): ElementFinder {
    return element(by.className('word-count-button'));
  }

  clickWordCountButton(): promise.Promise<void> {
    return this.getWordCountButton().click();
  }

  getTableFirstRowContent(): promise.Promise<string> {
    return element.all(by.css('table tr')).first().getText();
  }

}
