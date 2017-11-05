import { XPage } from './app.po';

describe('x App', () => {
  let page: XPage;

  beforeEach(() => {
    page = new XPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
