import { AngularHelloFormApplicationPage } from './app.po';

describe('angular-hello-form-application App', function() {
  let page: AngularHelloFormApplicationPage;

  beforeEach(() => {
    page = new AngularHelloFormApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
