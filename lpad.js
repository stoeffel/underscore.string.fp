var _lpad = require('underscore.string/lpad');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_lpad), 3);

