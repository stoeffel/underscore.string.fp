var _strLeft = require('underscore.string/strLeft');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_strLeft), 2);
