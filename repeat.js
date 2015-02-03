var _repeat = require('underscore.string/repeat');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_repeat), 3);

