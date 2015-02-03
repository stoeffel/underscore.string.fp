var _ltrim = require('underscore.string/ltrim');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_ltrim), 2);

