import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should Register a new user named \"realUser\"', () => {
    page.navigateTo();
    page.register('realUser', 'realUser@test.com', '123-456-7890', '10-15-1995',
    '77005', '123', '123');
    const success = element(by.css('div[id=regSuccess]')).getText();
    expect(success).toEqual('your registeration is successful, you can login now!');
  });

  it('should Log in and log out as \"realUser\"', () => {

    page.navigateTo();
    page.login('realUser', '123');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/main');
    browser.manage().getCookie('sid').then((res) => {
      expect(res).toBeDefined();
    });

    page.logout();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/landing');
    browser.manage().getCookie('sid').then((res) => {
      expect(res).toBeNull();
    });
  });

  it('should Log in and log out a test user', () => {
    page.navigateTo();
    page.login('rice', '1');
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/main');
    browser.manage().getCookie('sid').then((res) => {
      expect(res).toBeDefined();
    });

    page.logout();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/#/landing');
    browser.manage().getCookie('sid').then((res) => {
      expect(res).toBeNull();
    });
  });
});

describe('', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    page.login('rice', '1');
    browser.sleep(2000);
  });

  it('should Create new article and validate article appears in feed', () => {
    page.post('this is a post for e2e test');
    browser.sleep(2000);
    const text = element.all(by.css('.card-text')).filter(res => {
      return res.getText().then(resText => {
        return resText === 'this is a post for e2e test';
      });
    });

    expect(text.count()).toEqual(1);
  });

  it('should Update headline', () => {
    page.updateHeadline('this is an e2e test for updating headline');
    // browser.sleep(2000);
    const headline = element(by.css('span[id=selfHeadline]')).getText();
    expect(headline).toBe('this is an e2e test for updating headline');
  });

  it('search for a specific post', () => {
    page.searchPost('tempus');
    const text = element.all(by.css('.search-res'));
    expect(text.count()).toBe(1);
    expect(text.first().getText()).toContain('tempus');
    const author = element(by.css('#searchAuthor')).getText();
    expect(author).toBe('rice');
  });
});
