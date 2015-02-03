var _prune = require('underscore.string/prune');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_prune), 3);

