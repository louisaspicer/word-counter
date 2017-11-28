import { by, element, ElementFinder } from "protractor";
import {FileUploaderComponent} from "./file-uploader.co";
import {WordCountComponent} from "./word-count.co";

export class HomepageComponent {
  appRoot = 'app-homepage';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  getFileUploaderComponent() {
    return new FileUploaderComponent();
  }

  getWordCountComponent() {
    return new WordCountComponent();
  }

}
