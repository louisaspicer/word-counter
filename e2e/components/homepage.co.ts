import { by, element, ElementFinder } from "protractor";

export class HomepageComponent {
  appRoot = 'app-homepage';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

}
