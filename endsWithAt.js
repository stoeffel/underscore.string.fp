var _endsWith = require('underscore.string/endsWith');
var _curry = require('chickencurry');

module.exports = _curry(function endsWithAt(pos, ends, str) {
  return _endsWith(str, ends, pos);
});
