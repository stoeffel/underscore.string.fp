var _truncate = require('underscore.string/truncate');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_truncate), 3);

