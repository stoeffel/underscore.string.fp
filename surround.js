var _surround = require('underscore.string/surround');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_surround), 2);
