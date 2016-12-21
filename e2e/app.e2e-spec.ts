import { Angular2WebpackLitePage } from './app.po';

describe('angular2-webpack-lite App', function() {
  let page: Angular2WebpackLitePage;

  beforeEach(() => {
    page = new Angular2WebpackLitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
