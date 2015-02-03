var _include = require('underscore.string/include');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_include), 2);
