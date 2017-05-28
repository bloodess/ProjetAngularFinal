import { TpStarWarsPage } from './app.po';

describe('tp-star-wars App', () => {
  let page: TpStarWarsPage;

  beforeEach(() => {
    page = new TpStarWarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
