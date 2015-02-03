var _dedent = require('underscore.string/dedent');
var _curry = require('chickencurry');

module.exports = _curry(function(str) {
  return _dedent(str);
});
