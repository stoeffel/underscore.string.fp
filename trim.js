var _trim = require('underscore.string/trim');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_trim), 2);
