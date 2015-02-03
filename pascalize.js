var _camelize = require('underscore.string/camelize');
var _curry = require('chickencurry');

module.exports = _curry(function pascalize(str) {
  return _camelize(str);
});
