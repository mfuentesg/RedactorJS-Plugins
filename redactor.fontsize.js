'use strict';

if (!RedactorPlugins) var RedactorPlugins = {};

RedactorPlugins.fontsize = {
  init: () => {
    const _this = this;
    
    _this.buttonAdd('fontSize-up', 'Increase font-size', _this.increaseFontSize);
    _this.buttonAdd('fontSize-down', 'Decrease font-size', _this.decreaseFontSize);
  },
  increaseFontSize: () => {
    this.applyFontSize(2);
  },
  decreaseFontSize: () => {
    this.applyFontSize(-2);
  },
  getCurrentSize: () => {
    return parseInt($(this.getElement()).css('fontSize'), 10);
  },
  applyFontSize: (value) => {
    const _this = this;
    const currentSize = _this.getCurrentSize();

    value = value ? (currentSize + value) : currentSize;

    if (value > 10 && value <= 48) {
      _this.inlineSetStyle('font-size', value + 'px');
    }
  }
};
