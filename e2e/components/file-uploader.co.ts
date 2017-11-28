import { by, element, ElementFinder } from "protractor";
import {promise} from "selenium-webdriver";

export class FileUploaderComponent {
  path = require('path');
  appRoot = 'app-file-uploader';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  uploadFile(): promise.Promise<void> {
    const fileToUpload = '../assets/book.txt';
    const absolutePath = this.path.resolve(__dirname, fileToUpload);

    return element(by.css('input[type="file"]')).sendKeys(absolutePath);
  }

  getUploadConfirmationText(): promise.Promise<string> {
    return element(by.className('upload-message')).getText();
  }

}
