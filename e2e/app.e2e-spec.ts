import { AppPage } from './pages/app.po';

describe('word-counter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display a title', () => {
    expect(page.getHeaderComponent().getHeaderText()).toEqual('Txt File Word Counter');
  });

  it('should have a homepage', () => {
    const isHomepagePresent = page.getHomepageComponent().getRootElement().isPresent();
      expect(isHomepagePresent).toEqual(true);
  });

});
