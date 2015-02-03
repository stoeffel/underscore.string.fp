var _unquote = require('underscore.string/unquote');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_unquote), 2);
