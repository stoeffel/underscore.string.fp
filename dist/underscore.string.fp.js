!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.S=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var _camelize = _dereq_('underscore.string/camelize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function camelize(str) {
  return _camelize(str, true);
});

},{"chickencurry":29,"underscore.string/camelize":43}],2:[function(_dereq_,module,exports){
var _capitalize = _dereq_('underscore.string/capitalize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_capitalize);

},{"chickencurry":29,"underscore.string/capitalize":44}],3:[function(_dereq_,module,exports){
var _chars = _dereq_('underscore.string/chars');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_chars);

},{"chickencurry":29,"underscore.string/chars":45}],4:[function(_dereq_,module,exports){
var _chop = _dereq_('underscore.string/chop');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_chop), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/chop":46}],5:[function(_dereq_,module,exports){
var _classify = _dereq_('underscore.string/classify');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_classify);

},{"chickencurry":29,"underscore.string/classify":47}],6:[function(_dereq_,module,exports){
var _clean = _dereq_('underscore.string/clean');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_clean);

},{"chickencurry":29,"underscore.string/clean":48}],7:[function(_dereq_,module,exports){
var _count = _dereq_('underscore.string/count');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_count), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/count":49}],8:[function(_dereq_,module,exports){
var _dasherize = _dereq_('underscore.string/dasherize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_dasherize);

},{"chickencurry":29,"underscore.string/dasherize":50}],9:[function(_dereq_,module,exports){
var _decapitalize = _dereq_('underscore.string/decapitalize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_decapitalize);

},{"chickencurry":29,"underscore.string/decapitalize":51}],10:[function(_dereq_,module,exports){
var _dedent = _dereq_('underscore.string/dedent');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(str) {
  return _dedent(str);
});

},{"chickencurry":29,"underscore.string/dedent":52}],11:[function(_dereq_,module,exports){
var _dedent = _dereq_('underscore.string/dedent');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(pattern, str) {
  return _dedent(str, pattern);
});

},{"chickencurry":29,"underscore.string/dedent":52}],12:[function(_dereq_,module,exports){
var _endsWith = _dereq_('underscore.string/endsWith');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function endsWith(ends, str) {
  return _endsWith(str, ends);
});

},{"chickencurry":29,"underscore.string/endsWith":53}],13:[function(_dereq_,module,exports){
var _endsWith = _dereq_('underscore.string/endsWith');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function endsWithAt(pos, ends, str) {
  return _endsWith(str, ends, pos);
});

},{"chickencurry":29,"underscore.string/endsWith":53}],14:[function(_dereq_,module,exports){
var _escapeHTML = _dereq_('underscore.string/escapeHTML');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_escapeHTML);

},{"chickencurry":29,"underscore.string/escapeHTML":54}],15:[function(_dereq_,module,exports){
var _escapeRegExp = _dereq_('underscore.string/helper/escapeRegExp');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_escapeRegExp);

},{"chickencurry":29,"underscore.string/helper/escapeRegExp":58}],16:[function(_dereq_,module,exports){
module.exports = function() {
  var result = {};

  for (var prop in this) {
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join)$/)) continue;
    result[prop] = this[prop];
  }

  return result;
};

},{}],17:[function(_dereq_,module,exports){
//  Underscore.string
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>
//  Underscore.string is freely distributable under the terms of the MIT license.
//  Documentation: https://github.com/epeli/underscore.string
//  Some code is borrowed from MooTools and Alexandru Marasteanu.
//  Version '1.0.4'

'use strict';

var S = _dereq_('compose-function');

S.VERSION = '1.0.4';

S.isBlank          = _dereq_('./isBlank');
S.stripTags        = _dereq_('./stripTags');
S.capitalize       = _dereq_('./capitalize');
S.decapitalize     = _dereq_('./decapitalize');
S.chop             = _dereq_('./chop');
S.trim             = _dereq_('./trim');
S.clean            = _dereq_('./clean');
S.count            = _dereq_('./count');
S.chars            = _dereq_('./chars');
S.swapCase         = _dereq_('./swapCase');
S.escapeHTML       = _dereq_('./escapeHTML');
S.unescapeHTML     = _dereq_('./unescapeHTML');
S.splice           = _dereq_('./splice');
S.insert           = _dereq_('./insert');
S.replaceAll       = _dereq_('./replaceAll');
S.replaceAllIgnoreCase       = _dereq_('./replaceAllIgnoreCase');
S.include          = _dereq_('./include');
S.join             = _dereq_('./join');
S.lines            = _dereq_('./lines');
S.dedent           = _dereq_('./dedent');
S.dedentPattern    = _dereq_('./dedentPattern');
S.reverse          = _dereq_('./reverse');
S.startsWith       = _dereq_('./startsWith');
S.startsWithAt     = _dereq_('./startsWithAt');
S.endsWith         = _dereq_('./endsWith');
S.endsWithAt       = _dereq_('./endsWithAt');
S.pred             = _dereq_('./pred');
S.succ             = _dereq_('./succ');
S.titleize         = _dereq_('./titleize');
S.camelize         = _dereq_('./camelize');
S.pascalize        = _dereq_('./pascalize');
S.underscored      = _dereq_('./underscored');
S.dasherize        = _dereq_('./dasherize');
S.classify         = _dereq_('./classify');
S.humanize         = _dereq_('./humanize');
S.ltrim            = _dereq_('./ltrim');
S.rtrim            = _dereq_('./rtrim');
S.truncate         = _dereq_('./truncate');
S.prune            = _dereq_('./prune');
S.words            = _dereq_('./words');
S.wordsDelim       = _dereq_('./wordsDelim');
S.pad              = _dereq_('./pad');
S.lpad             = _dereq_('./lpad');
S.rpad             = _dereq_('./rpad');
S.lrpad            = _dereq_('./lrpad');
S.sprintf          = _dereq_('./sprintf');
S.vsprintf         = _dereq_('./vsprintf');
S.toNumber         = _dereq_('./toNumber');
S.numberFormat     = _dereq_('./numberFormat');
S.numberFormatDecimal     = _dereq_('./numberFormatDecimal');
S.numberFormatSeparator     = _dereq_('./numberFormatSeparator');
S.strRight         = _dereq_('./strRight');
S.strRightBack     = _dereq_('./strRightBack');
S.strLeft          = _dereq_('./strLeft');
S.strLeftBack      = _dereq_('./strLeftBack');
S.toSentence       = _dereq_('./toSentence');
S.toSentenceSerial = _dereq_('./toSentenceSerial');
S.slugify          = _dereq_('./slugify');
S.surround         = _dereq_('./surround');
S.quote            = _dereq_('./quote');
S.unquote          = _dereq_('./unquote');
S.repeat           = _dereq_('./repeat');
S.naturalCmp       = _dereq_('./naturalCmp');
S.levenshtein      = _dereq_('./levenshtein');
S.toBoolean        = _dereq_('./toBoolean');
S.exports          = _dereq_('./exports');
S.escapeRegExp     = _dereq_('./escapeRegExp');

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

},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./count":7,"./dasherize":8,"./decapitalize":9,"./dedent":10,"./dedentPattern":11,"./endsWith":12,"./endsWithAt":13,"./escapeHTML":14,"./escapeRegExp":15,"./exports":16,"./humanize":18,"./include":19,"./insert":20,"./isBlank":21,"./join":22,"./levenshtein":23,"./lines":24,"./lpad":25,"./lrpad":26,"./ltrim":27,"./naturalCmp":28,"./numberFormat":107,"./numberFormatDecimal":108,"./numberFormatSeparator":109,"./pad":110,"./pascalize":111,"./pred":112,"./prune":113,"./quote":114,"./repeat":115,"./replaceAll":116,"./replaceAllIgnoreCase":117,"./reverse":118,"./rpad":119,"./rtrim":120,"./slugify":121,"./splice":122,"./sprintf":123,"./startsWith":124,"./startsWithAt":125,"./strLeft":126,"./strLeftBack":127,"./strRight":128,"./strRightBack":129,"./stripTags":130,"./succ":131,"./surround":132,"./swapCase":133,"./titleize":134,"./toBoolean":135,"./toNumber":136,"./toSentence":137,"./toSentenceSerial":138,"./trim":139,"./truncate":140,"./underscored":141,"./unescapeHTML":142,"./unquote":143,"./vsprintf":144,"./words":145,"./wordsDelim":146,"compose-function":34}],18:[function(_dereq_,module,exports){
var _humanize = _dereq_('underscore.string/humanize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_humanize);


},{"chickencurry":29,"underscore.string/humanize":62}],19:[function(_dereq_,module,exports){
var _include = _dereq_('underscore.string/include');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_include), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/include":63}],20:[function(_dereq_,module,exports){
var _insert = _dereq_('underscore.string/insert');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_insert), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/insert":64}],21:[function(_dereq_,module,exports){
var _isBlank = _dereq_('underscore.string/isBlank');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_isBlank);

},{"chickencurry":29,"underscore.string/isBlank":65}],22:[function(_dereq_,module,exports){
var _join = _dereq_('underscore.string/join');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(separator, strings) {
  return _join.apply(null, [separator].concat(strings));
});

},{"chickencurry":29,"underscore.string/join":66}],23:[function(_dereq_,module,exports){
var _levenshtein = _dereq_('underscore.string/levenshtein');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_levenshtein);

},{"chickencurry":29,"underscore.string/levenshtein":67}],24:[function(_dereq_,module,exports){
var _lines = _dereq_('underscore.string/lines');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_lines);

},{"chickencurry":29,"underscore.string/lines":68}],25:[function(_dereq_,module,exports){
var _lpad = _dereq_('underscore.string/lpad');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_lpad), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/lpad":69}],26:[function(_dereq_,module,exports){
var _lrpad = _dereq_('underscore.string/lrpad');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_lrpad), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/lrpad":70}],27:[function(_dereq_,module,exports){
var _ltrim = _dereq_('underscore.string/ltrim');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_ltrim), 2);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/ltrim":71}],28:[function(_dereq_,module,exports){
var _naturalCmp = _dereq_('underscore.string/naturalCmp');
var _curry = _dereq_('chickencurry').n;

module.exports = _curry(_naturalCmp, 2);

},{"chickencurry":29,"underscore.string/naturalCmp":72}],29:[function(_dereq_,module,exports){
var merge = _dereq_('./lib/merge'),
    countDefinedItems = _dereq_('./lib/countDefinedItems'),
    slice = Array.prototype.slice,
    __;


function curry(fn, length, curryArgs) {
  return function() {
    var args = slice.call(arguments),
      concatArgs = curryArgs.concat(args),
      mergedArgs = [];

    if (length <= countDefinedItems(concatArgs)) {
      mergedArgs = merge(args, curryArgs);
      return fn.apply(null, mergedArgs);
    } else {
      if (length >= concatArgs.length) {
        return curry(fn, length, concatArgs);
      } else {
        return curry(fn, length, merge(args, curryArgs));
      }
    }
  };
}

module.exports = function(fn) {
  var args = slice.call(arguments, 1);

  return curry(fn, fn.length, args);
};

module.exports.n = function(fn, length) {
  var args = slice.call(arguments, 2);

  return curry(fn, length, args);
};

module.exports.__ = __;

},{"./lib/countDefinedItems":30,"./lib/merge":33}],30:[function(_dereq_,module,exports){
var forEach = _dereq_('./forEach');

module.exports = function(args) {
  var count = 0;

  forEach(args, function(key, item) {
    if (typeof item !== 'undefined') {
      count = count + 1;
    }
  });

  return count;
};

},{"./forEach":31}],31:[function(_dereq_,module,exports){
module.exports = function forEach(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    fn(i, arr[i]);
  }
};

},{}],32:[function(_dereq_,module,exports){
var forEach = _dereq_('./forEach');

module.exports = function map(arr, fn) {
  var newArr = [];

  forEach(arr, function(key, item) {
    newArr.push(fn(key, item));
  });

  return newArr;
};

},{"./forEach":31}],33:[function(_dereq_,module,exports){
var map = _dereq_('./map');

module.exports = function merge(args, curryArgs) {
  var mergedArgs = [];

  mergedArgs = map(curryArgs, function(key, item) {
    if (typeof item === 'undefined') {
      return args.shift();
    } else {
      return item;
    }
  });

  return mergedArgs.concat(args);
};

},{"./map":32}],34:[function(_dereq_,module,exports){
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

module.exports = compose;
var arityN = _interopRequire(_dereq_("arity-n"));




var compose2 = function (f, g) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return f(g.apply(null, args));
  };
};

function compose() {
  for (var _len = arguments.length, functions = Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  functions = functions.filter(function (fn) {
    return typeof fn === "function";
  });

  var lastIdx = functions.length - 1;
  var arity = 0;

  if (functions.length <= 0) {
    throw new Error("No functions passed");
  }


  if (lastIdx >= 0 && functions[lastIdx]) {
    arity = functions[lastIdx].length;
  }

  return arityN(functions.reduce(compose2), arity);
}
},{"arity-n":41}],35:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function() {
    return fn.apply(null, arguments);
  };
};

},{}],36:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function(a) {
    return fn.apply(null, arguments);
  };
};

},{}],37:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function(a, b) {
    return fn.apply(null, arguments);
  };
};

},{}],38:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function(a, b, c) {
    return fn.apply(null, arguments);
  };
};

},{}],39:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function(a, b, c, d) {
    return fn.apply(null, arguments);
  };
};

},{}],40:[function(_dereq_,module,exports){
module.exports = function(fn) {
  return function(a, b, c, d, e) {
    return fn.apply(null, arguments);
  };
};

},{}],41:[function(_dereq_,module,exports){
var arityFn = [
  _dereq_('./0'),
  _dereq_('./1'),
  _dereq_('./2'),
  _dereq_('./3'),
  _dereq_('./4'),
  _dereq_('./5')
];

module.exports = function(fn, n) {
  if (n && n <= 5) {
    return arityFn[n](fn);
  } else {
    return fn;
  }
};

},{"./0":35,"./1":36,"./2":37,"./3":38,"./4":39,"./5":40}],42:[function(_dereq_,module,exports){
module.exports = function reverseArgs(fn, scope) {
  return function(/*args*/) {
    var args = Array.prototype.slice.call(arguments);
    return fn.apply(scope || this, args.reverse());
  };
};

},{}],43:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');
var decap = _dereq_('./decapitalize');

module.exports = function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {
    return c ? c.toUpperCase() : "";
  });

  if (decapitalize === true) {
    return decap(str);
  } else {
    return str;
  }
};

},{"./decapitalize":51,"./trim":100}],44:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function capitalize(str) {
  str = makeString(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

},{"./helper/makeString":59}],45:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function chars(str) {
  return makeString(str).split('');
};

},{"./helper/makeString":59}],46:[function(_dereq_,module,exports){
module.exports = function chop(str, step) {
  if (str == null) return [];
  str = String(str);
  step = ~~step;
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];
};

},{}],47:[function(_dereq_,module,exports){
var capitalize = _dereq_('./capitalize');
var camelize = _dereq_('./camelize');
var makeString = _dereq_('./helper/makeString');

module.exports = function classify(str) {
  str = makeString(str);
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));
};

},{"./camelize":43,"./capitalize":44,"./helper/makeString":59}],48:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function clean(str) {
  return trim(str).replace(/\s+/g, ' ');
};

},{"./trim":100}],49:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function(str, substr) {
  str = makeString(str);
  substr = makeString(substr);

  if (str.length === 0 || substr.length === 0) return 0;

  var count = 0,
    pos = 0,
    length = substr.length;

  while (true) {
    pos = str.indexOf(substr, pos);
    if (pos === -1) break;
    count++;
    pos += length;
  }

  return count;
};

},{"./helper/makeString":59}],50:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function dasherize(str) {
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();
};

},{"./trim":100}],51:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function decapitalize(str) {
  str = makeString(str);
  return str.charAt(0).toLowerCase() + str.slice(1);
};

},{"./helper/makeString":59}],52:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

function getIndent(str) {
  var matches = str.match(/^[\s\\t]*/gm);
  var indent = matches[0].length;
  
  for (var i = 1; i < matches.length; i++) {
    indent = Math.min(matches[i].length, indent);
  }

  return indent;
}

module.exports = function dedent(str, pattern) {
  str = makeString(str);
  var indent = getIndent(str);
  var reg;

  if (indent === 0) return str;

  if (typeof pattern === 'string') {
    reg = new RegExp('^' + pattern, 'gm');
  } else {
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');
  }

  return str.replace(reg, '');
};

},{"./helper/makeString":59}],53:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var toPositive = _dereq_('./helper/toPositive');

module.exports = function endsWith(str, ends, position) {
  str = makeString(str);
  ends = '' + ends;
  if (typeof position == 'undefined') {
    position = str.length - ends.length;
  } else {
    position = Math.min(toPositive(position), str.length) - ends.length;
  }
  return position >= 0 && str.indexOf(ends, position) === position;
};

},{"./helper/makeString":59,"./helper/toPositive":61}],54:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var escapeChars = _dereq_('./helper/escapeChars');
var reversedEscapeChars = {};

for(var key in escapeChars) reversedEscapeChars[escapeChars[key]] = key;
reversedEscapeChars["'"] = '#39';

module.exports = function escapeHTML(str) {
  return makeString(str).replace(/[&<>"']/g, function(m) {
    return '&' + reversedEscapeChars[m] + ';';
  });
};

},{"./helper/escapeChars":57,"./helper/makeString":59}],55:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');

module.exports = function adjacent(str, direction) {
  str = makeString(str);
  if (str.length === 0) {
    return '';
  }
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);
};

},{"./makeString":59}],56:[function(_dereq_,module,exports){
var escapeRegExp = _dereq_('./escapeRegExp');

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};

},{"./escapeRegExp":58}],57:[function(_dereq_,module,exports){
var escapeChars = {
  lt: '<',
  gt: '>',
  quot: '"',
  amp: '&',
  apos: "'"
};

module.exports = escapeChars;

},{}],58:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

},{"./makeString":59}],59:[function(_dereq_,module,exports){
/**
 * Ensure some object is a coerced to a string
 **/
module.exports = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};

},{}],60:[function(_dereq_,module,exports){
module.exports = function strRepeat(str, qty){
  if (qty < 1) return '';
  var result = '';
  while (qty > 0) {
    if (qty & 1) result += str;
    qty >>= 1, str += str;
  }
  return result;
};

},{}],61:[function(_dereq_,module,exports){
module.exports = function toPositive(number) {
  return number < 0 ? 0 : (+number || 0);
};

},{}],62:[function(_dereq_,module,exports){
var capitalize = _dereq_('./capitalize');
var underscored = _dereq_('./underscored');
var trim = _dereq_('./trim');

module.exports = function humanize(str) {
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));
};

},{"./capitalize":44,"./trim":100,"./underscored":102}],63:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function include(str, needle) {
  if (needle === '') return true;
  return makeString(str).indexOf(needle) !== -1;
};

},{"./helper/makeString":59}],64:[function(_dereq_,module,exports){
var splice = _dereq_('./splice');

module.exports = function insert(str, i, substr) {
  return splice(str, i, 0, substr);
};

},{"./splice":84}],65:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function isBlank(str) {
  return (/^\s*$/).test(makeString(str));
};

},{"./helper/makeString":59}],66:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var slice = [].slice;

module.exports = function join() {
  var args = slice.call(arguments),
    separator = args.shift();

  return args.join(makeString(separator));
};

},{"./helper/makeString":59}],67:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function levenshtein(str1, str2) {
  str1 = makeString(str1);
  str2 = makeString(str2);

  var current = [],
    prev, value;

  for (var i = 0; i <= str2.length; i++)
    for (var j = 0; j <= str1.length; j++) {
      if (i && j)
        if (str1.charAt(j - 1) === str2.charAt(i - 1))
          value = prev;
        else
          value = Math.min(current[j], current[j - 1], prev) + 1;
        else
          value = i + j;

      prev = current[j];
      current[j] = value;
    }

  return current.pop();
};

},{"./helper/makeString":59}],68:[function(_dereq_,module,exports){
module.exports = function lines(str) {
  if (str == null) return [];
  return String(str).split(/\r?\n/);
};

},{}],69:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function lpad(str, length, padStr) {
  return pad(str, length, padStr);
};

},{"./pad":74}],70:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function lrpad(str, length, padStr) {
  return pad(str, length, padStr, 'both');
};

},{"./pad":74}],71:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrimLeft = String.prototype.trimLeft;

module.exports = function ltrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+'), '');
};

},{"./helper/defaultToWhiteSpace":56,"./helper/makeString":59}],72:[function(_dereq_,module,exports){
module.exports = function naturalCmp(str1, str2) {
  if (str1 == str2) return 0;
  if (!str1) return -1;
  if (!str2) return 1;

  var cmpRegex = /(\.\d+)|(\d+)|(\D+)/g,
    tokens1 = String(str1).match(cmpRegex),
    tokens2 = String(str2).match(cmpRegex),
    count = Math.min(tokens1.length, tokens2.length);

  for (var i = 0; i < count; i++) {
    var a = tokens1[i],
      b = tokens2[i];

    if (a !== b) {
      var num1 = +a;
      var num2 = +b;
      if (num1 === num1 && num2 === num2) {
        return num1 > num2 ? 1 : -1;
      }
      return a < b ? -1 : 1;
    }
  }

  if (tokens1.length != tokens2.length)
    return tokens1.length - tokens2.length;

  return str1 < str2 ? -1 : 1;
};

},{}],73:[function(_dereq_,module,exports){
module.exports = function numberFormat(number, dec, dsep, tsep) {
  if (isNaN(number) || number == null) return '';

  number = number.toFixed(~~dec);
  tsep = typeof tsep == 'string' ? tsep : ',';

  var parts = number.split('.'),
    fnums = parts[0],
    decimals = parts[1] ? (dsep || '.') + parts[1] : '';

  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;
};

},{}],74:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var strRepeat = _dereq_('./helper/strRepeat');

module.exports = function pad(str, length, padStr, type) {
  str = makeString(str);
  length = ~~length;

  var padlen = 0;

  if (!padStr)
    padStr = ' ';
  else if (padStr.length > 1)
    padStr = padStr.charAt(0);

  switch (type) {
    case 'right':
      padlen = length - str.length;
      return str + strRepeat(padStr, padlen);
    case 'both':
      padlen = length - str.length;
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));
    default: // 'left'
      padlen = length - str.length;
      return strRepeat(padStr, padlen) + str;
  }
};

},{"./helper/makeString":59,"./helper/strRepeat":60}],75:[function(_dereq_,module,exports){
var adjacent = _dereq_('./helper/adjacent');

module.exports = function succ(str) {
  return adjacent(str, -1);
};

},{"./helper/adjacent":55}],76:[function(_dereq_,module,exports){
/**
 * _s.prune: a more elegant version of truncate
 * prune extra chars, never leaving a half-chopped word.
 * @author github.com/rwz
 */
var makeString = _dereq_('./helper/makeString');
var rtrim = _dereq_('./rtrim');

module.exports = function prune(str, length, pruneStr) {
  str = makeString(str);
  length = ~~length;
  pruneStr = pruneStr != null ? String(pruneStr) : '...';

  if (str.length <= length) return str;

  var tmpl = function(c) {
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';
  },
    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA'

  if (template.slice(template.length - 2).match(/\w\w/))
    template = template.replace(/\s*\S+$/, '');
  else
    template = rtrim(template.slice(0, template.length - 1));

  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;
};

},{"./helper/makeString":59,"./rtrim":82}],77:[function(_dereq_,module,exports){
var surround = _dereq_('./surround');

module.exports = function quote(str, quoteChar) {
  return surround(str, quoteChar || '"');
};

},{"./surround":93}],78:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var strRepeat = _dereq_('./helper/strRepeat');

module.exports = function repeat(str, qty, separator) {
  str = makeString(str);

  qty = ~~qty;

  // using faster implementation if separator is not needed;
  if (separator == null) return strRepeat(str, qty);

  // this one is about 300x slower in Google Chrome
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}
  return repeat.join(separator);
};

},{"./helper/makeString":59,"./helper/strRepeat":60}],79:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString(str).replace(reg, replace);
};

},{"./helper/makeString":59}],80:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');

module.exports = function reverse(str) {
  return chars(str).reverse().join('');
};

},{"./chars":45}],81:[function(_dereq_,module,exports){
var pad = _dereq_('./pad');

module.exports = function rpad(str, length, padStr) {
  return pad(str, length, padStr, 'right');
};

},{"./pad":74}],82:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrimRight = String.prototype.trimRight;

module.exports = function rtrim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp(characters + '+$'), '');
};

},{"./helper/defaultToWhiteSpace":56,"./helper/makeString":59}],83:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var trim = _dereq_('./trim');
var dasherize = _dereq_('./dasherize');

module.exports = function slugify(str) {
  var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",
      to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz",
      regex = new RegExp(defaultToWhiteSpace(from), 'g');

  str = makeString(str).toLowerCase().replace(regex, function(c){
    var index = from.indexOf(c);
    return to.charAt(index) || '-';
  });

  return trim(dasherize(str.replace(/[^\w\s-]/g, '-')), '-');
};

},{"./dasherize":50,"./helper/defaultToWhiteSpace":56,"./helper/makeString":59,"./trim":100}],84:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');

module.exports = function splice(str, i, howmany, substr) {
  var arr = chars(str);
  arr.splice(~~i, ~~howmany, substr);
  return arr.join('');
};

},{"./chars":45}],85:[function(_dereq_,module,exports){
// sprintf() for JavaScript 0.7-beta1
// http://www.diveintojavascript.com/projects/javascript-sprintf
//
// Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>
// All rights reserved.
var strRepeat = _dereq_('./helper/strRepeat');
var toString = Object.prototype.toString;
var sprintf = (function() {
  function get_type(variable) {
    return toString.call(variable).slice(8, -1).toLowerCase();
  }

  var str_repeat = strRepeat;

  var str_format = function() {
    if (!str_format.cache.hasOwnProperty(arguments[0])) {
      str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
    }
    return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
  };

  str_format.format = function(parse_tree, argv) {
    var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
    for (i = 0; i < tree_length; i++) {
      node_type = get_type(parse_tree[i]);
      if (node_type === 'string') {
        output.push(parse_tree[i]);
      }
      else if (node_type === 'array') {
        match = parse_tree[i]; // convenience purposes only
        if (match[2]) { // keyword argument
          arg = argv[cursor];
          for (k = 0; k < match[2].length; k++) {
            if (!arg.hasOwnProperty(match[2][k])) {
              throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));
            }
            arg = arg[match[2][k]];
          }
        } else if (match[1]) { // positional argument (explicit)
          arg = argv[match[1]];
        }
        else { // positional argument (implicit)
          arg = argv[cursor++];
        }

        if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {
          throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));
        }
        switch (match[8]) {
          case 'b': arg = arg.toString(2); break;
          case 'c': arg = String.fromCharCode(arg); break;
          case 'd': arg = parseInt(arg, 10); break;
          case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;
          case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;
          case 'o': arg = arg.toString(8); break;
          case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;
          case 'u': arg = Math.abs(arg); break;
          case 'x': arg = arg.toString(16); break;
          case 'X': arg = arg.toString(16).toUpperCase(); break;
        }
        arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);
        pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
        pad_length = match[6] - String(arg).length;
        pad = match[6] ? str_repeat(pad_character, pad_length) : '';
        output.push(match[5] ? arg + pad : pad + arg);
      }
    }
    return output.join('');
  };

  str_format.cache = {};

  str_format.parse = function(fmt) {
    var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;
    while (_fmt) {
      if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
        parse_tree.push(match[0]);
      }
      else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
        parse_tree.push('%');
      }
      else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
        if (match[2]) {
          arg_names |= 1;
          var field_list = [], replacement_field = match[2], field_match = [];
          if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
            field_list.push(field_match[1]);
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
              if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              }
              else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);
              }
              else {
                throw new Error('[_.sprintf] huh?');
              }
            }
          }
          else {
            throw new Error('[_.sprintf] huh?');
          }
          match[2] = field_list;
        }
        else {
          arg_names |= 2;
        }
        if (arg_names === 3) {
          throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');
        }
        parse_tree.push(match);
      }
      else {
        throw new Error('[_.sprintf] huh?');
      }
      _fmt = _fmt.substring(match[0].length);
    }
    return parse_tree;
  };

  return str_format;
})();

module.exports = sprintf;

},{"./helper/strRepeat":60}],86:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var toPositive = _dereq_('./helper/toPositive');

module.exports = function startsWith(str, starts, position) {
  str = makeString(str);
  starts = '' + starts;
  position = position == null ? 0 : Math.min(toPositive(position), str.length);
  return str.lastIndexOf(starts, position) === position;
};

},{"./helper/makeString":59,"./helper/toPositive":61}],87:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strLeft(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

},{"./helper/makeString":59}],88:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strLeftBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = str.lastIndexOf(sep);
  return~ pos ? str.slice(0, pos) : str;
};

},{"./helper/makeString":59}],89:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strRight(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.indexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

},{"./helper/makeString":59}],90:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function strRightBack(str, sep) {
  str = makeString(str);
  sep = makeString(sep);
  var pos = !sep ? -1 : str.lastIndexOf(sep);
  return~ pos ? str.slice(pos + sep.length, str.length) : str;
};

},{"./helper/makeString":59}],91:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function stripTags(str) {
  return makeString(str).replace(/<\/?[^>]+>/g, '');
};

},{"./helper/makeString":59}],92:[function(_dereq_,module,exports){
var adjacent = _dereq_('./helper/adjacent');

module.exports = function succ(str) {
  return adjacent(str, 1);
};

},{"./helper/adjacent":55}],93:[function(_dereq_,module,exports){
module.exports = function surround(str, wrapper) {
  return [wrapper, str, wrapper].join('');
};

},{}],94:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function swapCase(str) {
  return makeString(str).replace(/\S/g, function(c) {
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

},{"./helper/makeString":59}],95:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function titleize(str) {
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {
    return c.toUpperCase();
  });
};

},{"./helper/makeString":59}],96:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

function boolMatch(s, matchers) {
  var i, matcher, down = s.toLowerCase();
  matchers = [].concat(matchers);
  for (i = 0; i < matchers.length; i += 1) {
    matcher = matchers[i];
    if (!matcher) continue;
    if (matcher.test && matcher.test(s)) return true;
    if (matcher.toLowerCase() === down) return true;
  }
}

module.exports = function toBoolean(str, trueValues, falseValues) {
  if (typeof str === "number") str = "" + str;
  if (typeof str !== "string") return !!str;
  str = trim(str);
  if (boolMatch(str, trueValues || ["true", "1"])) return true;
  if (boolMatch(str, falseValues || ["false", "0"])) return false;
};

},{"./trim":100}],97:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');
var parseNumber = function(source) {
  return source * 1 || 0;
};

module.exports = function toNumber(num, precision) {
  if (num == null) return 0;
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);
  return Math.round(num * factor) / factor;
};

},{"./trim":100}],98:[function(_dereq_,module,exports){
var rtrim = _dereq_('./rtrim');

module.exports = function toSentence(array, separator, lastSeparator, serial) {
  separator = separator || ', ';
  lastSeparator = lastSeparator || ' and ';
  var a = array.slice(),
    lastMember = a.pop();

  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;

  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;
};

},{"./rtrim":82}],99:[function(_dereq_,module,exports){
var toSentence = _dereq_('./toSentence');

module.exports = function toSentenceSerial(array, sep, lastSep) {
  return toSentence(array, sep, lastSep, true);
};

},{"./toSentence":98}],100:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

},{"./helper/defaultToWhiteSpace":56,"./helper/makeString":59}],101:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');

module.exports = function truncate(str, length, truncateStr) {
  str = makeString(str);
  truncateStr = truncateStr || '...';
  length = ~~length;
  return str.length > length ? str.slice(0, length) + truncateStr : str;
};

},{"./helper/makeString":59}],102:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');

module.exports = function underscored(str) {
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();
};

},{"./trim":100}],103:[function(_dereq_,module,exports){
var makeString = _dereq_('./helper/makeString');
var escapeChars = _dereq_('./helper/escapeChars');

module.exports = function unescapeHTML(str) {
  return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {
    var match;

    if (entityCode in escapeChars) {
      return escapeChars[entityCode];
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {
      return String.fromCharCode(parseInt(match[1], 16));
    } else if (match = entityCode.match(/^#(\d+)$/)) {
      return String.fromCharCode(~~match[1]);
    } else {
      return entity;
    }
  });
};

},{"./helper/escapeChars":57,"./helper/makeString":59}],104:[function(_dereq_,module,exports){
module.exports = function unquote(str, quoteChar) {
  quoteChar = quoteChar || '"';
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)
    return str.slice(1, str.length - 1);
  else return str;
};

},{}],105:[function(_dereq_,module,exports){
var sprintf = _dereq_('./sprintf');

module.exports = function vsprintf(fmt, argv) {
  argv.unshift(fmt);
  return sprintf.apply(null, argv);
};

},{"./sprintf":85}],106:[function(_dereq_,module,exports){
var isBlank = _dereq_('./isBlank');
var trim = _dereq_('./trim');

module.exports = function words(str, delimiter) {
  if (isBlank(str)) return [];
  return trim(str, delimiter).split(delimiter || /\s+/);
};

},{"./isBlank":65,"./trim":100}],107:[function(_dereq_,module,exports){
var _numberFormat = _dereq_('underscore.string/numberFormat');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function numberFormat(number) {
  return _numberFormat(number);
});

},{"chickencurry":29,"underscore.string/numberFormat":73}],108:[function(_dereq_,module,exports){
var _numberFormat = _dereq_('underscore.string/numberFormat');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function numberFormat(decimal, number) {
  return _numberFormat(number, decimal);
});

},{"chickencurry":29,"underscore.string/numberFormat":73}],109:[function(_dereq_,module,exports){
var _numberFormat = _dereq_('underscore.string/numberFormat');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function numberFormat(decimalSeparator, orderSeparator, decimal, number) {
  return _numberFormat(number, decimal, decimalSeparator, orderSeparator);
});

},{"chickencurry":29,"underscore.string/numberFormat":73}],110:[function(_dereq_,module,exports){
var _pad = _dereq_('underscore.string/pad');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_pad), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/pad":74}],111:[function(_dereq_,module,exports){
var _camelize = _dereq_('underscore.string/camelize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function pascalize(str) {
  return _camelize(str);
});

},{"chickencurry":29,"underscore.string/camelize":43}],112:[function(_dereq_,module,exports){
var _pred = _dereq_('underscore.string/pred');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_pred);

},{"chickencurry":29,"underscore.string/pred":75}],113:[function(_dereq_,module,exports){
var _prune = _dereq_('underscore.string/prune');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_prune), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/prune":76}],114:[function(_dereq_,module,exports){
var _quote = _dereq_('underscore.string/quote');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_quote), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/quote":77}],115:[function(_dereq_,module,exports){
var _repeat = _dereq_('underscore.string/repeat');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_repeat), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/repeat":78}],116:[function(_dereq_,module,exports){
var _replaceAll = _dereq_('underscore.string/replaceAll');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(replace, find, string) {
  return _replaceAll(string, find, replace);
});

},{"chickencurry":29,"underscore.string/replaceAll":79}],117:[function(_dereq_,module,exports){
var _replaceAll = _dereq_('underscore.string/replaceAll');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(replace, find, string) {
  return _replaceAll(string, find, replace, true);
});

},{"chickencurry":29,"underscore.string/replaceAll":79}],118:[function(_dereq_,module,exports){
var _reverse = _dereq_('underscore.string/reverse');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_reverse);

},{"chickencurry":29,"underscore.string/reverse":80}],119:[function(_dereq_,module,exports){
var _rpad = _dereq_('underscore.string/rpad');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_rpad), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/rpad":81}],120:[function(_dereq_,module,exports){
var _rtrim = _dereq_('underscore.string/rtrim');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_rtrim), 2);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/rtrim":82}],121:[function(_dereq_,module,exports){
var _slugify = _dereq_('underscore.string/slugify');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_slugify);

},{"chickencurry":29,"underscore.string/slugify":83}],122:[function(_dereq_,module,exports){
var _splice = _dereq_('underscore.string/splice');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_splice), 4);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/splice":84}],123:[function(_dereq_,module,exports){
var _sprintf = _dereq_('underscore.string/sprintf');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_sprintf), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/sprintf":85}],124:[function(_dereq_,module,exports){
var _startsWith = _dereq_('underscore.string/startsWith');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function startsWith(starts, str) {
  return _startsWith(str, starts);
});

},{"chickencurry":29,"underscore.string/startsWith":86}],125:[function(_dereq_,module,exports){
var _startsWith = _dereq_('underscore.string/startsWith');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function startsWith(pos, starts, str) {
  return _startsWith(str, starts, pos);
});

},{"chickencurry":29,"underscore.string/startsWith":86}],126:[function(_dereq_,module,exports){
var _strLeft = _dereq_('underscore.string/strLeft');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_strLeft), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/strLeft":87}],127:[function(_dereq_,module,exports){
var _strLeftBack = _dereq_('underscore.string/strLeftBack');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_strLeftBack), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/strLeftBack":88}],128:[function(_dereq_,module,exports){
var _strRight = _dereq_('underscore.string/strRight');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_strRight), 2);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/strRight":89}],129:[function(_dereq_,module,exports){
var _strRightBack = _dereq_('underscore.string/strRightBack');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_strRightBack), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/strRightBack":90}],130:[function(_dereq_,module,exports){
var _stripTags = _dereq_('underscore.string/stripTags');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_stripTags);

},{"chickencurry":29,"underscore.string/stripTags":91}],131:[function(_dereq_,module,exports){
var _succ = _dereq_('underscore.string/succ');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_succ);

},{"chickencurry":29,"underscore.string/succ":92}],132:[function(_dereq_,module,exports){
var _surround = _dereq_('underscore.string/surround');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_surround), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/surround":93}],133:[function(_dereq_,module,exports){
var _swapCase = _dereq_('underscore.string/swapCase');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_swapCase);

},{"chickencurry":29,"underscore.string/swapCase":94}],134:[function(_dereq_,module,exports){
var _titleize = _dereq_('underscore.string/titleize');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_titleize);

},{"chickencurry":29,"underscore.string/titleize":95}],135:[function(_dereq_,module,exports){
var _toBoolean = _dereq_('underscore.string/toBoolean');
var _curry = _dereq_('chickencurry').n;

module.exports = _curry(_toBoolean, 1);

},{"chickencurry":29,"underscore.string/toBoolean":96}],136:[function(_dereq_,module,exports){
var _toNumber = _dereq_('underscore.string/toNumber');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_toNumber), 2);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/toNumber":97}],137:[function(_dereq_,module,exports){
var _toSentence = _dereq_('underscore.string/toSentence');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_toSentence), 3);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/toSentence":98}],138:[function(_dereq_,module,exports){
var _toSentenceSerial = _dereq_('underscore.string/toSentenceSerial');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_toSentenceSerial), 3);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/toSentenceSerial":99}],139:[function(_dereq_,module,exports){
var _trim = _dereq_('underscore.string/trim');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_trim), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/trim":100}],140:[function(_dereq_,module,exports){
var _truncate = _dereq_('underscore.string/truncate');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_truncate), 3);


},{"chickencurry":29,"reverse-arguments":42,"underscore.string/truncate":101}],141:[function(_dereq_,module,exports){
var _underscored = _dereq_('underscore.string/underscored');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_underscored);

},{"chickencurry":29,"underscore.string/underscored":102}],142:[function(_dereq_,module,exports){
var _unescapeHTML = _dereq_('underscore.string/unescapeHTML');
var _curry = _dereq_('chickencurry');

module.exports = _curry(_unescapeHTML);

},{"chickencurry":29,"underscore.string/unescapeHTML":103}],143:[function(_dereq_,module,exports){
var _unquote = _dereq_('underscore.string/unquote');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_unquote), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/unquote":104}],144:[function(_dereq_,module,exports){
var _vsprintf = _dereq_('underscore.string/vsprintf');
var _curry = _dereq_('chickencurry').n;
var _reverse = _dereq_('reverse-arguments');

module.exports = _curry(_reverse(_vsprintf), 2);

},{"chickencurry":29,"reverse-arguments":42,"underscore.string/vsprintf":105}],145:[function(_dereq_,module,exports){
var _words = _dereq_('underscore.string/words');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(str) {
  return _words(str);
});


},{"chickencurry":29,"underscore.string/words":106}],146:[function(_dereq_,module,exports){
var _words = _dereq_('underscore.string/words');
var _curry = _dereq_('chickencurry');

module.exports = _curry(function(delim, str) {
  return _words(str, delim);
});


},{"chickencurry":29,"underscore.string/words":106}]},{},[17])
(17)
});