import { Testing2Page } from './app.po';

describe('testing2 App', () => {
  let page: Testing2Page;

  beforeEach(() => {
    page = new Testing2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
