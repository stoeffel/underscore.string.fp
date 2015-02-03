var _strLeftBack = require('underscore.string/strLeftBack');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_strLeftBack), 2);
