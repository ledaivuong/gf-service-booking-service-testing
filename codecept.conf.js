require('import-export')

exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.google.com',
      show: true,
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded',
      waitForAction: 1000,
      getPageTimeout: 10000,
      waitForTimeout: 10000,
      windowSize: '1366x784',
      manualStart: false,
      chromium: {
        args: ['--disable-gpu',
          '--disable-extensions',
          '--disable-popup-blocking',
          '--disable-infobars'
        ]
      }
    }
  },
  include: {
    I: './steps_file.js',
    BasePage: './pages/BasePage',
    testPage: './pages/test.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  name: 'gf-service-booking-service-testing'
}
