var _replaceAll = require('underscore.string/replaceAll');
var _curry = require('chickencurry');

module.exports = _curry(function(replace, find, string) {
  return _replaceAll(string, find, replace, true);
});
