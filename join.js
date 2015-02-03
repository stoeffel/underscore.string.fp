var _join = require('underscore.string/join');
var _curry = require('chickencurry');

module.exports = _curry(function(separator, strings) {
  return _join.apply(null, [separator].concat(strings));
});
