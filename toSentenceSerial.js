var _toSentenceSerial = require('underscore.string/toSentenceSerial');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_toSentenceSerial), 3);
