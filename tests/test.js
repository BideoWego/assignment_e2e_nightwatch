// Your code here ...
require('dotenv').config();


const Test = {
  "Home": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/1.jpg')
      .end();
  },
  "Sign in": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .saveScreenshot('screenshots/2.jpg')
      .end();
  },
  "Login": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .click('#loki-navbar a[href="/sign_in"]')
      .setValue('#user_email', process.env.EMAIL)
      .setValue('#user_password', process.env.PASS)
      .click('#new_user input[type="submit"]')
      .waitForElementVisible('#angular-loki', 3000)
      .saveScreenshot('screenshots/3.jpg')
      .end();
  },
  "Dashboard": browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body', 1000)
      .click('#loki-navbar a[href="/sign_in"]')
      .setValue('#user_email', process.env.EMAIL)
      .setValue('#user_password', process.env.PASS)
      .click('#new_user input[type="submit"]')
      .waitForElementVisible('#angular-loki', 3000)
      .url(browser.launchUrl + '/dashboard/#/testing-javascript/assignment-viking-code-school-exploration')
      .saveScreenshot('screenshots/4.jpg')
      .waitForElementVisible('.lesson-completion', 60000)
      .click('.lesson-completion .lesson-completion-checkbox img')
      .end();
  }
};


module.exports = Test;
