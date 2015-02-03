var _startsWith = require('underscore.string/startsWith');
var _curry = require('chickencurry');

module.exports = _curry(function startsWith(pos, starts, str) {
  return _startsWith(str, starts, pos);
});
