import { by, element, ElementFinder } from "protractor";
import {FileUploaderComponent} from "./file-uploader.co";

export class HomepageComponent {
  appRoot = 'app-homepage';
  rootElement: ElementFinder = element(by.css(this.appRoot));

  getRootElement(): ElementFinder {
    return this.rootElement;
  }

  getFileUploader() {
    return new FileUploaderComponent();
  }

}
