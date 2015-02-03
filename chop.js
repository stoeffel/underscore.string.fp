var _chop = require('underscore.string/chop');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_chop), 2);
