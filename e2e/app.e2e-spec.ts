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

});
