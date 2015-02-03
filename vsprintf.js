var _vsprintf = require('underscore.string/vsprintf');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_vsprintf), 2);
