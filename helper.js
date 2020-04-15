const { Helper } = require('codeceptjs');

class HookHelper extends Helper {
  constructor(){
    this.playwright = this.helpers['PlayWright']
  }
  _beforeStep(step) {
    if(step.name == 'click'){
      this.playwright.waitForClickable()
    }
  }

}

module.exports = HookHelper;
