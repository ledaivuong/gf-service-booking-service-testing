const { I, testPage } = inject()

// Add in your custom step files

When('/I input "([^"]*)"/', (value) => {
  testPage.inputSearchTextBox(value)
})

When('I am on page', () => {
  I.amOnPage('/')
})
