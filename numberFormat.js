var _numberFormat = require('underscore.string/numberFormat');
var _curry = require('chickencurry');

module.exports = _curry(function numberFormat(number) {
  return _numberFormat(number);
});
