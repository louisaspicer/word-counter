import { by, element, ElementFinder } from "protractor";

export class FileUploaderComponent {
  appRoot = 'app-file-uploader';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

}
