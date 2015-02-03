var _pad = require('underscore.string/pad');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_pad), 3);

