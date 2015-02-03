var _strRight = require('underscore.string/strRight');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_strRight), 2);

