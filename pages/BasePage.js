const { I } = inject()

/** Wait constants */
const SHORT_WAITING_TIME = 10
// eslint-disable-next-line no-unused-vars
const LONG_WAITING_TIME = 30

class BasePage {
  /**
       *
       * @param {String} fieldLocator
       * @param {String} text
       * @param {Number} waitingTimeOut
       */
  inputIntoField(fieldLocator, text, waitingTimeOut = SHORT_WAITING_TIME) {
    I.waitForVisible(fieldLocator, waitingTimeOut)
    I.scrollTo(fieldLocator)
    I.fillField(text)
  }

  /**
       *
       * @param {String} element
       * @param {Number} waitingTimeOut
       */
  clickOn(element, waitingTimeOut = SHORT_WAITING_TIME) {
    I.waitForClickable(element, waitingTimeOut)
    I.scrollTo(element)
    I.click(element)
  }

  /**
       *
       * @param {String} element
       * @param {Number} waitingTimeOut
       */
  clickByJavaScriptCSSLocator(element, waitingTimeOut = SHORT_WAITING_TIME) {
    I.waitForClickable(element)
    I.executeScript(() => document.querySelector(element).scrollInToView())
    I.executeScript(() => document.querySelector(element).click())
  }

  clickByJavaScriptXpathLocator(element, waitingTimeOut = SHORT_WAITING_TIME) {
    I.waitForClickable(element)
    I.executeScript(() => document.evaluate(
      element,
      document.body,
      null,
      // eslint-disable-next-line no-undef
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null).singleNodeValue.scrollInToView())
    I.executeScript(() => document.querySelector(element).click())
  }
}

module.exports = new BasePage()
module.exports.BasePage = BasePage
