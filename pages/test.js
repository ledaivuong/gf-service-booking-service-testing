import { BasePage } from './BasePage'

const { I } = inject()

class GooglePage extends BasePage {
  get searchTextBox() { return '//input[@name="q"]' }
  get searchButton() { return '//input[@name="q"]' }

  inputSearchTextBox(value) {
    I.fillField(this.searchButton, value)
  }

  clickSearchButton() {
    I.click(this.searchButton)
  }
}

export default new GooglePage()
