import {browser} from 'protractor';
import {HomepageComponent} from '../components/homepage.co';
import {HeaderComponent} from "../components/header.co";

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderComponent() {
    return new HeaderComponent();
  }

  getHomepageComponent() {
    return new HomepageComponent();
  }
}
