var _count = require('underscore.string/count');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_count), 2);
