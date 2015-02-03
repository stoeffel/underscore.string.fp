var _camelize = require('underscore.string/camelize');
var _curry = require('chickencurry');

module.exports = _curry(function camelize(str) {
  return _camelize(str, true);
});
