var _toSentence = require('underscore.string/toSentence');
var _curry = require('chickencurry').n;
var _reverse = require('reverse-arguments');

module.exports = _curry(_reverse(_toSentence), 3);
