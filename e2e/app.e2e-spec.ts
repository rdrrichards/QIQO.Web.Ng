import { QIQOWebA4Page } from './app.po';

describe('qiqo.web.a4 App', function() {
  let page: QIQOWebA4Page;

  beforeEach(() => {
    page = new QIQOWebA4Page();
  });

  it('should display message saying Welcome to the Cheesecake Fool!', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Welcome to the Cheesecake Fool!');
  });
});
