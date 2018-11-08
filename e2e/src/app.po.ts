import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  register(username, email, phone, dob, zipcode, password1, password2) {
    element(by.css('input[id=accountName]')).sendKeys(username);
    element(by.css('input[id=email]')).sendKeys(email);
    element(by.css('input[id=phoneNumber]')).sendKeys(phone);
    element(by.css('input[id=dateOfBirth]')).sendKeys(dob);
    element(by.css('input[id=zipcode]')).sendKeys(zipcode);
    element(by.css('input[id=password]')).sendKeys(password1);
    element(by.css('input[id=passwordConfirmation]')).sendKeys(password2);
    element(by.css('button[id=registerBtn]')).click();
    browser.waitForAngular();

  }

  login(username, password) {
    element(by.css('input[id=uname]')).sendKeys(username);
    element(by.css('input[id=upass]')).sendKeys(password);
    element(by.css('button[id=loginBtn]')).click();
    browser.waitForAngular();
  }

  logout() {
    element(by.css('a[id=logout]')).click();
    browser.waitForAngular();
  }

  post(text: string) {
    element(by.css('textarea[id=newPost]')).sendKeys(text);
    element(by.css('button[id=post]')).click();
    browser.waitForAngular();
  }

  updateHeadline(text: string) {
    element(by.css('input[id=status]')).sendKeys(text);
    element(by.css('button[id=updateHeadline]')).click();
    browser.waitForAngular();
  }

  searchPost(target: string) {
    element(by.css('input[id=searchFilter]')).sendKeys(target);
    element(by.css('button[id=search]')).click();
    browser.waitForAngular();
  }
}
