var _lrpad = require('underscore.string/lrpad');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_lrpad), 3);

