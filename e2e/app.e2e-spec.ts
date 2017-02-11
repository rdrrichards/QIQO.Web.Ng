import { QIQO.Web.A4Page } from './app.po';

describe('qiqo.web.a4 App', function() {
  let page: QIQO.Web.A4Page;

  beforeEach(() => {
    page = new QIQO.Web.A4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
