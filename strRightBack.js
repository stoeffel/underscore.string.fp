var _strRightBack = require('underscore.string/strRightBack');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_strRightBack), 2);
