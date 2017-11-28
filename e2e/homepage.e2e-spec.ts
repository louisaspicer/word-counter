import { AppPage } from './pages/app.po';
import {HomepageComponent} from "./components/homepage.co";
import {browser} from "protractor";
import {FileUploaderComponent} from "./components/file-uploader.co";

describe('Homepage', () => {
  let page: AppPage;
  let homepage: HomepageComponent;
  let fileUploader: FileUploaderComponent;

  beforeEach(() => {
    page = new AppPage();
    homepage = new HomepageComponent();
    fileUploader = new FileUploaderComponent();
    page.navigateTo();
  });

  it('should show a file uploader', () => {
    const isFileUploaderPresent = homepage.getFileUploaderComponent().getRootElement().isPresent();
    expect(isFileUploaderPresent).toEqual(true);
  });

  it('should have a submit button to count the words in the file', () => {
    const isGetWordCountButtonPresent = homepage.getWordCountComponent().getWordCountButton().isPresent();
    expect(isGetWordCountButtonPresent).toEqual(true);
  });

  it('should display word count table when button is clicked', () => {
    fileUploader.uploadFile();
    browser.sleep(5000);
    homepage.getWordCountComponent().clickWordCountButton().then(() => {
      expect(homepage.getWordCountComponent().getTableFirstRowContent()).toEqual('');
    });
  });

});
