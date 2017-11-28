import { by, element, ElementFinder } from "protractor";
import {promise} from "selenium-webdriver";

export class HeaderComponent {
  appRoot = 'app-header';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  getHeaderText(): promise.Promise<string> {
    return element(by.className('.navbar-branc')).getText();
  }

}
