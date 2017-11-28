import { AppPage } from './pages/app.po';
import {HomepageComponent} from "./components/homepage.co";

describe('Homepage', () => {
  let page: AppPage;
  let homepage: HomepageComponent;

  beforeEach(() => {
    page = new AppPage();
    homepage = new HomepageComponent();
    page.navigateTo();
  });

  it('should show a file uploader', () => {
    const isFileUploaderPresent = homepage.getFileUploader().getRootElement().isPresent();
    expect(isFileUploaderPresent).toEqual(true);
  });

});
