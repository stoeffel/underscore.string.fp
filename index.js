//  Underscore.string
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
//  Underscore.string is freely distributable under the terms of the MIT license.
//  Documentation: https://github.com/epeli/underscore.string
//  Some code is borrowed from MooTools and Alexandru Marasteanu.
//  Version '1.0.4'

'use strict';

var S = require('compose-function');

S.VERSION = '1.0.4';

S.isBlank          = require('./isBlank');
S.stripTags        = require('./stripTags');
S.capitalize       = require('./capitalize');
S.decapitalize     = require('./decapitalize');
S.chop             = require('./chop');
S.trim             = require('./trim');
S.clean            = require('./clean');
S.count            = require('./count');
S.chars            = require('./chars');
S.swapCase         = require('./swapCase');
S.escapeHTML       = require('./escapeHTML');
S.unescapeHTML     = require('./unescapeHTML');
S.splice           = require('./splice');
S.insert           = require('./insert');
S.replaceAll       = require('./replaceAll');
S.replaceAllIgnoreCase       = require('./replaceAllIgnoreCase');
S.include          = require('./include');
S.join             = require('./join');
S.lines            = require('./lines');
S.dedent           = require('./dedent');
S.dedentPattern    = require('./dedentPattern');
S.reverse          = require('./reverse');
S.startsWith       = require('./startsWith');
S.startsWithAt     = require('./startsWithAt');
S.endsWith         = require('./endsWith');
S.endsWithAt       = require('./endsWithAt');
S.pred             = require('./pred');
S.succ             = require('./succ');
S.titleize         = require('./titleize');
S.camelize         = require('./camelize');
S.pascalize        = require('./pascalize');
S.underscored      = require('./underscored');
S.dasherize        = require('./dasherize');
S.classify         = require('./classify');
S.humanize         = require('./humanize');
S.ltrim            = require('./ltrim');
S.rtrim            = require('./rtrim');
S.truncate         = require('./truncate');
S.prune            = require('./prune');
S.words            = require('./words');
S.wordsDelim       = require('./wordsDelim');
S.pad              = require('./pad');
S.lpad             = require('./lpad');
S.rpad             = require('./rpad');
S.lrpad            = require('./lrpad');
S.sprintf          = require('./sprintf');
S.vsprintf         = require('./vsprintf');
S.toNumber         = require('./toNumber');
S.numberFormat     = require('./numberFormat');
S.numberFormatDecimal     = require('./numberFormatDecimal');
S.numberFormatSeparator     = require('./numberFormatSeparator');
S.strRight         = require('./strRight');
S.strRightBack     = require('./strRightBack');
S.strLeft          = require('./strLeft');
S.strLeftBack      = require('./strLeftBack');
S.toSentence       = require('./toSentence');
S.toSentenceSerial = require('./toSentenceSerial');
S.slugify          = require('./slugify');
S.surround         = require('./surround');
S.quote            = require('./quote');
S.unquote          = require('./unquote');
S.repeat           = require('./repeat');
S.naturalCmp       = require('./naturalCmp');
S.levenshtein      = require('./levenshtein');
S.toBoolean        = require('./toBoolean');
S.exports          = require('./exports');
S.escapeRegExp     = require('./escapeRegExp');

// Aliases
S.strip     = S.trim;
S.lstrip    = S.ltrim;
S.rstrip    = S.rtrim;
S.center    = S.lrpad;
S.rjust     = S.lpad;
S.ljust     = S.rpad;
S.contains  = S.include;
S.q         = S.quote;
S.toBool    = S.toBoolean;
S.camelcase = S.camelize;

module.exports = S;
