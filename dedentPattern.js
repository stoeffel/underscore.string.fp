var _dedent = require('underscore.string/dedent');
var _curry = require('chickencurry');

module.exports = _curry(function(pattern, str) {
  return _dedent(str, pattern);
});
