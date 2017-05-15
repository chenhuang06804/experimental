import { ExperimentalPage } from './app.po';

describe('experimental App', () => {
  let page: ExperimentalPage;

  beforeEach(() => {
    page = new ExperimentalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
