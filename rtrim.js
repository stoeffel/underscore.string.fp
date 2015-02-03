var _rtrim = require('underscore.string/rtrim');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_rtrim), 2);

