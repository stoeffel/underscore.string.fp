# Underscore.string.fp [![Build Status](https://secure.travis-ci.org/stoeffel/underscore.string.fp.png?branch=master)](http://travis-ci.org/stoeffel/underscore.string.fp) #

> This is a wrapper for [underscore.string](http://epeli.github.io/underscore.string/) to use it as a FP-library or with a library like [lodash-fp](https://github.com/lodash/lodash-fp) or [Ramda](http://ramdajs.com)

## Usage 

### In Node.js and Browserify

Install from npm

    npm install underscore.string.fp

Require individual functions

```javascript
var include = require("underscore.string.fp/include");

var includeHello = include('Hello');

includeHello("Hello world!");
// => true

includeHello("Nope");
// => false
```

or load the full library to compose functions

```javascript
var rockit = S(
  S.titleize(),
  S.insert('rocks', 9),
  S.trim('_')
);

// S.titleize(S.insert('rocks', 9, S.trim('_', "__stoeffel !__")));
rockit("__stoeffel !__");
// => "Stoeffel Rocks!"
```

but especially when using with [Browserify][] the individual function approach
is recommended because using it you only add those functions to your bundle you
use.

[Browserify]: http://browserify.org/

### Others

The `dist/underscore.string.fp.js` file is an [UMD][] build. You can load it using
an AMD loader such as [RequireJS][] or just stick it to a web page and access
the library from the ***S*** global.

[UMD]: https://github.com/umdjs/umd
[RequireJS]: http://requirejs.org/

### Ramda integration

You can use it with [ramda](ramdajs.com).

```js
R.map(S.camelize(), [
  'Moo boo',
  'Foo bar'
]);
// => ['mooBoo', 'fooBoo']
```

```js
R.filter(S.startsWith('.'), [
  '.vimrc',
  'foo.md',
  '.zshrc'
]);
// => ['.vimrc', '.zshrc']
```

### lodash-fp integration

You can use it with [lodash-fp](https://github.com/lodash/lodash-fp).

```js
_.map(S.camelize(), [
  'Moo boo',
  'Foo bar'
]);
// => ['mooBoo', 'fooBoo']
```

```js
_.filter(S.startsWith('.'), [
  '.vimrc',
  'foo.md',
  '.zshrc'
]);
// => ['.vimrc', '.zshrc']
```

## Download

  * [Development version](https://raw.github.com/stoeffel/underscore.string.fp/master/dist/underscore.string.fp.js) *Uncompressed with Comments*
  * [Production version](https://github.com/stoeffel/underscore.string.fp/raw/master/dist/underscore.string.fp.min.js) *Minified*

## API

### Individual functions

#### numberFormat(number) => string

Formats the numbers.

```javascript
numberFormat(1000);
// => "1,000"
```

#### numberFormatDecimal(decimals, number) => string

Formats the numbers.

```javascript
numberFormatDecimal(2)(1000);
// => "1,000.00"
```

#### numberFormatSeparator(decimalSeparator, orderSeparator, decimal, number) => string

Formats the numbers.

```javascript
numberFormatSeparator(".", "'", 5, 123456789.123);
// => "123'456'789.12300"
```


#### levenshtein(string1, string2) => number

Calculates [Levenshtein distance][ld] between two strings.
[ld]: http://en.wikipedia.org/wiki/Levenshtein_distance

```javascript
levenshtein("kitten")("kittah");
// => 2
```

#### capitalize(string) => string

Converts first letter of the string to uppercase.

```javascript
capitalize()("foo Bar");
// => "Foo Bar"

capitalize("foo Bar");
// => "Foo Bar"
```

#### decapitalize(string) => string

Converts first letter of the string to lowercase.

```javascript
decapitalize()("Foo Bar");
// => "foo Bar"

decapitalize("Foo Bar");
// => "foo Bar"
```

#### chop(step, string) => array

```javascript
chop(3)("whitespace");
// => ["whi", "tes", "pac", "e"]
```

#### clean(string) => string

Trim and replace multiple spaces with a single space.

```javascript
clean()(" foo    bar   ");
// => "foo bar"

clean(" foo    bar   ");
// => "foo bar"
```

#### chars(string) => array

```javascript
chars()("Hello");
// => ["H", "e", "l", "l", "o"]

chars("Hello");
// => ["H", "e", "l", "l", "o"]
```

#### swapCase(string) => string

Returns a copy of the string in which all the case-based characters have had their case swapped.

```javascript
swapCase()("hELLO");
// => "Hello"

swapCase("hELLO");
// => "Hello"
```

#### include(substring, string) => boolean

Tests if string contains a substring.

```javascript
include("ob")("foobar");
// => true
```

#### count(substring, string) => number

```javascript
count("l")("Hello world");
// => 3
```

#### escapeHTML(string) => string

Converts HTML special characters to their entity equivalents.

```javascript
escapeHTML()("<div>Blah blah blah</div>");
// => "&lt;div&gt;Blah blah blah&lt;/div&gt;"

escapeHTML("<div>Blah blah blah</div>");
// => "&lt;div&gt;Blah blah blah&lt;/div&gt;"
```

#### unescapeHTML(string) => string

Converts entity characters to HTML equivalents.

```javascript
unescapeHTML()("&lt;div&gt;Blah blah blah&lt;/div&gt;");
// => "<div>Blah blah blah</div>"

unescapeHTML("&lt;div&gt;Blah blah blah&lt;/div&gt;");
// => "<div>Blah blah blah</div>"
```

#### insert(substring, index, string) => string

```javascript
insert("world", 6)("Hello ");
// => "Hello world"
```

#### replaceAll(replace, find, string) => string

```javascript
replaceAll("a")("o")("foo");
// => "faa"
```

#### replaceAllIgnoreCase(replace, find, string) => string

```javascript
replaceAll("a")("o")("fOo");
// => "faa"
```

#### isBlank(string) => boolean

```javascript
isBlank(""); // => true
isBlank("\n"); // => true
isBlank(" "); // => true
isBlank("a"); // => false
```

#### join(separator, strings) => string

Joins strings together with given separator

```javascript
join(" ")(["foo", "bar"]);
// => "foo bar"
```

#### lines(str) => array

Split lines to an array

```javascript
lines()("Hello\nWorld");
// => ["Hello", "World"]

lines("Hello\nWorld");
// => ["Hello", "World"]
```

#### dedent(str) => string

Dedent unnecessary indentation

Credits go to @sindresorhus.
This implementation is similar to https://github.com/sindresorhus/strip-indent

```javascript
dedent()("  Hello\n    World");
// => "Hello\n  World"

dedent("\t\tHello\n\t\t\t\tWorld");
// => "Hello\n\t\tWorld"
```


#### dedentPattern(pattern, str) => string

Dedent by a pattern.

```javascript
dedentPattern("  ")("    Hello\n    World"); // Dedent by 2 spaces
// => "  Hello\n  World"
```

#### reverse(string) => string

Return reversed string:

```javascript
reverse()("foobar");
// => "raboof"

reverse("foobar");
// => "raboof"
```

#### splice(substring, howmany, index, string) => string

Like an array splice.

```javascript
splice("epeli")(7)(30)("https://edtsech@bitbucket.org/edtsech/underscore.strings");
// => "https://edtsech@bitbucket.org/epeli/underscore.strings"
```

#### startsWith(starts, string) => boolean

This method checks whether the string begins with `starts`.

```javascript
startsWith("image")("image.gif");
// => true
```

#### startsWithAt(starts, position, string) => boolean

This method checks whether the string begins with `starts` at `position`.

```javascript
startsWithAt(1)("vim")(".vimrc");
// => true
```


#### endsWith(ends, string) => boolean

This method checks whether the string ends with `ends`.

```javascript
endsWith("gif")("image.gif");
// => true
```

#### endsWithAt(position, ends, string) => boolean

This method checks whether the string ends with `ends` at `position`.

```javascript
endsWithAt(9)("old")("image.old.gif");
// => true
```

#### pred(string) => string

Returns the predecessor to str.

```javascript
pred()("b");
// => "a"

pred("B");
// => "A"
```

#### succ(string) => string

Returns the successor to str.

```javascript
succ()("a");
// => "b"

succ("A");
// => "B"
```


#### titleize(string) => string

```javascript
titleize()("my name is epeli");
// => "My Name Is Epeli"

titleize("my name is epeli");
// => "My Name Is Epeli"
```

#### camelize(string) => string

Converts underscored or dasherized string to a camelized one. 

```javascript
camelize("moz-transform");
// => "mozTransform"

camelize("-moz-transform");
// => "mozTransform"

camelize("_moz_transform");
// => "mozTransform"

camelize("Moz-transform");
// => "mozTransform"
```

#### pascalize(string) => string

Converts underscored or dasherized string to a pascalized one. Begins with
a lower case letter unless it starts with an underscore, dash or an upper case letter.

```javascript
pascalize("moz-transform");
// => "mozTransform"

pascalize("-moz-transform");
// => "MozTransform"

pascalize("_moz_transform");
// => "MozTransform"

pascalize("Moz-transform");
// => "MozTransform"
```

#### classify(string) => string

Converts string to camelized class name. First letter is always upper case

```javascript
classify()("some_class_name");
// => "SomeClassName"

classify("some_class_name");
// => "SomeClassName"
```

#### underscored(string) => string

Converts a camelized or dasherized string into an underscored one

```javascript
underscored()("MozTransform");
// => "moz_transform"

underscored("MozTransform");
// => "moz_transform"
```

#### dasherize(string) => string

Converts a underscored or camelized string into an dasherized one

```javascript
dasherize()("MozTransform");
// => "-moz-transform"

dasherize("MozTransform");
// => "-moz-transform"
```

#### humanize(string) => string

Converts an underscored, camelized, or dasherized string into a humanized one.
Also removes beginning and ending whitespace, and removes the postfix '_id'.

```javascript
humanize()("  capitalize dash-CamelCase_underscore trim  ");
// => "Capitalize dash camel case underscore trim"

humanize("  capitalize dash-CamelCase_underscore trim  ");
// => "Capitalize dash camel case underscore trim"
```

#### trim(characters, string) => string

Trims defined characters from begining and ending of the string.

```javascript
trim(' ')("  foobar   ");
// => "foobar"

trim("_-foobar-_", "_-");
// => "foobar"
```

#### ltrim(characters, string) => string

Left trim. Similar to trim, but only for left side.

#### rtrim(characters, string) => string

Right trim. Similar to trim, but only for right side.

#### truncate(truncateString, length, string) => string

```javascript
truncate('...')(5)("Hello world");
// => "Hello..."

truncate('...')(10)("Hello");
// => "Hello"
```

#### prune(pruneString, length, string) => string

Elegant version of truncate.  Makes sure the pruned string does not exceed the
original length.  Avoid half-chopped words when truncating.

```javascript
prune('...')(5)("Hello, world");
// => "Hello..."

prune('...')(8)("Hello, world");
// => "Hello..."

prune(" (read a lot more)")(5)("Hello, world");
// => "Hello, world" (as adding "(read a lot more)" would be longer than the original string)

prune( '...')(1)("Hello, cruel world");
// => "Hello, cruel..."

prune( '...')(1)("Hello");
// => "Hello"
```

#### words(str) => array

Split string by /\s+/.

```javascript
words()("   I   love   you   ");
// => ["I", "love", "you"]

words("   ")
// => []
```

#### wordsDelim(delimiter=/\s+/, str) => array

Split string by delimiter (String or RegExp).

```javascript
words("_")("I_love_you");
// => ["I", "love", "you"]

words(/-/)("I-love-you");
// => ["I", "love", "you"]
```

#### sprintf(arguments, string format) => string

C like string formatting.
Credits goes to [Alexandru Marasteanu][o].
For more detailed documentation, see the [original page][o].

[o]: http://www.diveintojavascript.com/projects/javascript-sprintf

```javascript
sprintf(1.17)("%.1f");
// => "1.2"
```

#### pad(padStr, length, str) => string

pads the `str` with characters until the total string length is equal to the passed `length` parameter. By default, pads on the **left** with the space char (`" "`). `padStr` is truncated to a single character if necessary.

```javascript
pad(" ")(8)("1");
// => "       1"

pad("0")(8)("1");
// => "00000001"
```

#### lpad(padStr, length, str) => string

left-pad a string. Alias for `pad(str, length, padStr, "left")`

```javascript
lpad("0")(8)("1");
// => "00000001"
```

#### rpad(padStr, length, str) => string

right-pad a string. Alias for `pad(str, length, padStr, "right")`

```javascript
rpad("0")(8)("1");
// => "10000000"
```

#### lrpad(padStr, length, str) => string

left/right-pad a string. Alias for `pad(str, length, padStr, "both")`

```javascript
lrpad('0')(8)("1");
// => "00001000"
```


#### toNumber(decimals, string) => number

Parse string to number. Returns NaN if string can't be parsed to number.

```javascript
toNumber(0)("2.556");
// => 3

toNumber(1)("2.556");
// => 2.6

toNumber(-1)("999.999");
// => 990
```

#### strRight(pattern, string) => string

Searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found.

```javascript
strRight("_")("This_is_a_test_string");
// => "is_a_test_string"
```

#### strRightBack(pattern, string) => string

Searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the right of the pattern or all string if no match found.

```javascript
strRightBack("_")("This_is_a_test_string");
// => "string"
```

#### strLeft(pattern, string) => string

Searches a string from left to right for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found.

```javascript
strLeft("_")("This_is_a_test_string");
// => "This";
```

#### strLeftBack(pattern, string) => string

Searches a string from right to left for a pattern and returns a substring consisting of the characters in the string that are to the left of the pattern or all string if no match found.

```javascript
strLeftBack("_")("This_is_a_test_string");
// => "This_is_a_test";
```

#### stripTags(string) => string

Removes all html tags from string.

```javascript
stripTags()("a <a href="#">link</a>");
// => "a link"

stripTags("a <a href="#">link</a><script>alert("hello world!")</script>");
// => "a linkalert("hello world!")"
```

#### toSentence(lastDelimiter, delimiter, array) => string

Join an array into a human readable sentence.

```javascript
toSentence(" and ")(", ")((["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools and Prototype";

toSentence(" unt ")(", ")((["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools unt Prototype";
```

#### toSentenceSerial(lastDelimiter, delimiter, array) => string

The same as `toSentence`, but adjusts delimeters to use [Serial comma](http://en.wikipedia.org/wiki/Serial_comma).

```javascript
toSentenceSerial(' and ')(', ')(["jQuery", "Mootools"]);
// => "jQuery and Mootools"

toSentenceSerial(' and ')(', ')(["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools, and Prototype"

toSentenceSerial(' unt ')(', ')(["jQuery", "Mootools", "Prototype"]);
// => "jQuery, Mootools, unt Prototype"
```

#### repeat(separator, count, string) => string

Repeats a string count times.

```javascript
repeat('')(3)("foo");
// => "foofoofoo"

repeat("bar")(3)("foo");
// => "foobarfoobarfoo"
```

#### surround(wrap, string) => string

Surround a string with another string.

```javascript
surround("ab")("foo");
// => "abfooab"
```

#### quote(quoteChar, string) or q(quoteChar, string) => string

Quotes a string. `quoteChar`.

```javascript
quote('"')("foo");
// => '"foo"';
```

#### unquote(quoteChar, string) => string

Unquotes a string. `quoteChar`.

```javascript
unquote('"')('"foo"');
// => "foo"

unquote("'")("'foo'");
// => "foo"
```


#### slugify(string) => string

Transform text into an ascii slug which can be used in safely in URLs. Replaces whitespaces, accentuated, and special characters with a dash. Limited set of non-ascii characters are transformed to similar versions in the ascii character set such as `ä` to `a`.

```javascript
slugify()("Un éléphant à l\'orée du bois");
// => "un-elephant-a-l-oree-du-bois"

slugify("Un éléphant à l\'orée du bois");
// => "un-elephant-a-l-oree-du-bois"
```

***Caution: this function is charset dependent***

#### naturalCmp(string1, string2) => number

Naturally sort strings like humans would do. None numbers are compared by their [ASCII values](http://www.asciitable.com/). Note: this means "a" > "A". Use `.toLowerCase` if this isn't to be desired.

Just past it to `Array#sort`.

```javascript
["foo20", "foo5"].sort(naturalCmp);
// => ["foo5", "foo20"]
```

#### toBoolean(string) => boolean

Turn strings that can be commonly considered as booleas to real booleans. Such as "true", "false", "1" and "0". This function is case insensitive.

```javascript
toBoolean("true");
// => true

toBoolean("FALSE");
// => false

toBoolean("random");
// => undefined
```

### Library functions

If you require the full library you can use composing and aliases

#### s(functions) => function

Compose new functions.

```javascript
var rockit = S(
  S.titleize(),
  S.insert('rocks', 9),
  S.trim('_')
);

// S.titleize(S.insert('rocks', 9, S.trim('_', "__stoeffel !__")));
rockit("__stoeffel !__");
// => "Stoeffel Rocks!"
```


#### Aliases

```javascript
strip     = trim
lstrip    = ltrim
rstrip    = rtrim
center    = lrpad
rjust     = lpad
ljust     = rpad
contains  = include
q         = quote
toBool    = toBoolean
camelcase = camelize
```

## Maintainers ##

This library is maintained by

  - Christoph Hermann – ***[@stoeffel](https://github.com/stoeffel)***

## Licence ##

The MIT License

Copyright (c) 2015 Christoph Hermann schtoeffel@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[d]: http://www.diveintojavascript.com/core-javascript-reference/the-string-object
