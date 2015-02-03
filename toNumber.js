var _toNumber = require('underscore.string/toNumber');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_toNumber), 2);

