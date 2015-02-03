var _words = require('underscore.string/words');
var _curry = require('chickencurry');

module.exports = _curry(function(delim, str) {
  return _words(str, delim);
});

