var _sprintf = require('underscore.string/sprintf');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_sprintf), 2);
