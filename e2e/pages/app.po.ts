import {browser} from 'protractor';
import {HeaderComponent} from "../components/header.co";

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderComponent() {
    return new HeaderComponent();
  }

}
