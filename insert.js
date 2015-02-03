var _insert = require('underscore.string/insert');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_insert), 3);

