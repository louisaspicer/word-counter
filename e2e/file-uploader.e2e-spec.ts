import { AppPage } from './pages/app.po';
import {FileUploaderComponent} from "./components/file-uploader.co";

describe('File Uploader', () => {
  let page: AppPage;
  let fileUploader: FileUploaderComponent;

  beforeEach(() => {
    page = new AppPage();
    fileUploader = new FileUploaderComponent();
    page.navigateTo();
  });

  it('should confirm txt file has been read', () => {
    fileUploader.uploadFile().then(() => {
      expect(fileUploader.getUploadConfirmationText()).toContain('book.txt words are ready to be counted!');
    });
  });

});
