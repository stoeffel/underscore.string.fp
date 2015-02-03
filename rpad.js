var _rpad = require('underscore.string/rpad');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_rpad), 3);

