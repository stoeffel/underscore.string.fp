$(document).ready(function() {

  module('String extensions');

  test('Strings: naturalSort', function() {
    var arr =  ['foo2', 'foo1', 'foo10', 'foo30', 'foo100', 'foo10bar'],
      sorted = ['foo1', 'foo2', 'foo10', 'foo10bar', 'foo30', 'foo100'];
    deepEqual(arr.sort(S.naturalCmp), sorted);
  });

  test("Strings: naturalCmp", function() {
    // Should be associative
    _.each([
      ['abc', '123'],
      ['def', 'abc'],
      ['ab', 'a'],
      ['r69', 'r9'],
      ['123', '122'],
      ['ac2', 'ab3'],
      ['a-12', 'a-11'],
      ['11', '-12'],
      ['15.05', '15'],
      ['15ac', '15ab32'],
      ['16', '15ab'],
      ['15a123', '15a122'],
      ['15ab16', '15ab'],
      ['abc', 'Abc'],
      ['abc', 'aBc'],
      ['aBc', 'Abc']
    ], function(vals) {
      var a = vals[0], b = vals[1];
      equal(S.naturalCmp(a)(b), 1, '\'' + a + '\' >= \'' + b + '\'');
      equal(S.naturalCmp(b)(a), -1, '\'' + b + '\' <= \'' + a + '\'');
    });
    _.each([
      ['123', '123'],
      ['abc', 'abc'],
      ['r12', 'r12'],
      ['12a', '12a']
    ], function(vals) {
      var a = vals[0], b = vals[1];
      equal(S.naturalCmp(a)(b), 0, '\'' + a + '\' == \'' + b + '\'');
      equal(S.naturalCmp(b)(a), 0, '\'' + b + '\' == \'' + a + '\'');
    });
  });

  test('Strings: trim', function() {
    equal(S.trim(' ')(123), '123', 'Non string');
    equal(S.trim(' ')(' foo'), 'foo');
    equal(S.trim(' ')('foo '), 'foo');
    equal(S.trim(' ')(' foo '), 'foo');
    equal(S.trim(' ')('    foo     '), 'foo');
    equal(S.trim(/\s/)('\t    foo \t  '), 'foo', 'Manually set RegExp /\\s+/');

    equal(S.trim('f')('ffoo'), 'oo');
    equal(S.trim('f')('ooff'), 'oo');
    equal(S.trim('f')('ffooff'), 'oo');


    equal(S.trim('_-')('_-foobar-_'), 'foobar');

    equal(S.trim('/')('http://foo/'), 'http://foo');
    equal(S.trim('\\')('c:\\'), 'c:');

    equal(S.trim(3)(123), '12');
    equal(S.trim(' ')(''), '', 'Trim empty string should return empty string');
    equal(S.trim(' ')(null), '', 'Trim null should return empty string');
  });

  test('String: levenshtein', function() {
    equal(S.levenshtein('Godfather')('Godfather'), 0);
    equal(S.levenshtein('Godfather')('Godfathe'), 1);
    equal(S.levenshtein('Godfather')('odfather'), 1);
    equal(S.levenshtein('Godfather')('Gdfthr'), 3);
    equal(S.levenshtein('seven')('eight'), 5);
    equal(S.levenshtein('123')(123), 0);
    equal(S.levenshtein(321)('321'), 0);
    equal(S.levenshtein('lol')(null), 3);
    equal(S.levenshtein(null)('lol'), 3);
  });

  test('Strings: ltrim', function() {
    equal(S.ltrim(' ')(' foo'), 'foo');
    equal(S.ltrim(' ')('    foo'), 'foo');
    equal(S.ltrim(' ')('foo '), 'foo ');
    equal(S.ltrim(' ')(' foo '), 'foo ');
    equal(S.ltrim(' ')(''), '', 'ltrim empty string should return empty string');
    equal(S.ltrim(' ')(null), '', 'ltrim null should return empty string');

    equal(S.ltrim('f')('ffoo'), 'oo');
    equal(S.ltrim('f')('ooff'), 'ooff');
    equal(S.ltrim('f')('ffooff'), 'ooff');

    equal(S.ltrim('_-')('_-foobar-_'), 'foobar-_');

    equal(S.ltrim(1)(123), '23');
  });

  test('Strings: rtrim', function() {
    equal(S.rtrim('/')('http://foo/'), 'http://foo', 'clean trailing slash');
    equal(S.rtrim(' ')(' foo'), ' foo');
    equal(S.rtrim(' ')('foo '), 'foo');
    equal(S.rtrim(' ')('foo     '), 'foo');
    equal(S.rtrim(' ')('foo  bar     '), 'foo  bar');
    equal(S.rtrim(' ')(' foo '), ' foo');

    equal(S.rtrim('f')('ffoo'), 'ffoo');
    equal(S.rtrim('f')('ooff'), 'oo');
    equal(S.rtrim('f')('ffooff'), 'ffoo');

    equal(S.rtrim('_-')('_-foobar-_'), '_-foobar');

    equal(S.rtrim(3)(123), '12');
    equal(S.rtrim(' ')(''), '', 'rtrim empty string should return empty string');
    equal(S.rtrim(' ')(null), '', 'rtrim null should return empty string');
  });

  test('Strings: capitalize', function() {
    equal(S.capitalize('fabio'), 'Fabio', 'First letter is upper case');
    equal(S.capitalize()('fabio'), 'Fabio', 'First letter is upper case');
    equal(S.capitalize()('FOO'), 'FOO', 'Other letters unchanged');
    equal(S.capitalize()(123), '123', 'Non string');
    equal(S.capitalize()(''), '', 'Capitalizing empty string returns empty string');
    equal(S.capitalize()(null), '', 'Capitalizing null returns empty string');
  });

  test('Strings: decapitalize', function() {
    equal(S.decapitalize()('Fabio'), 'fabio', 'First letter is lower case');
    equal(S.decapitalize()('Fabio'), 'fabio', 'First letter is lower case');
    equal(S.decapitalize()('FOO'), 'fOO', 'Other letters unchanged');
    equal(S.decapitalize()(123), '123', 'Non string');
    equal(S.decapitalize()(''), '', 'Decapitalizing empty string returns empty string');
    equal(S.decapitalize()(null), '', 'Decapitalizing null returns empty string');
  });

  test('Strings: join', function() {
    equal(S.join('')(['foo', 'bar']), 'foobar', 'basic join');
    equal(S.join('')([1, 'foo', 2]), '1foo2', 'join numbers and strings');
    equal(S.join(' ')(['foo', 'bar']), 'foo bar', 'join with spaces');
    equal(S.join('1')(['2', '2']), '212', 'join number strings');
    equal(S.join(1)([2, 2]), '212', 'join numbers');
    equal(S.join('')(['foo', null]), 'foo', 'join null with string returns string');
    equal(S.join(null)(['foo', 'bar']), 'foobar', 'join strings with null returns string');
    equal(S.join(1)([2, 3, 4]), '21314');
    equal(S.join('|')(['foo', 'bar', 'baz']), 'foo|bar|baz');
    equal(S.join('')([2,3,null]), '23');
    equal(S.join(null)([2,3]), '23');
  });

  test('Strings: reverse', function() {
    equal(S.reverse()('foo'), 'oof' );
    equal(S.reverse()('foobar'), 'raboof' );
    equal(S.reverse()('foo bar'), 'rab oof' );
    equal(S.reverse()('saippuakauppias'), 'saippuakauppias' );
    equal(S.reverse()(123), '321', 'Non string');
    equal(S.reverse()(123.45), '54.321', 'Non string');
    equal(S.reverse()(''), '', 'reversing empty string returns empty string' );
    equal(S.reverse()(null), '', 'reversing null returns empty string' );
  });

  test('Strings: sprintf', function() {
    // Should be very tested function already.  Thanks to
    // http://www.diveintojavascript.com/projects/sprintf-for-javascript
    equal(S.sprintf('me')('Hello %s'), 'Hello me', 'basic');
    equal(S.sprintf('me')('Hello %s'), 'Hello me', 'object');
    equal(S.sprintf(1.22222)('%.1f'), '1.2', 'round');
    equal(S.sprintf(1.17)('%.1f'), '1.2', 'round 2');
    equal(S.sprintf({id: 824, name: 'Hello World'})('%(id)d - %(name)s'), '824 - Hello World', 'Named replacements work');
    equal(S.sprintf({args: [{id: 824}, {name: 'Hello World'}]})('%(args[0].id)d - %(args[1].name)s'), '824 - Hello World', 'Named replacements with arrays work');
  });


  test('Strings: vsprintf', function() {
    equal(S.vsprintf(['me'])('Hello %s'), 'Hello me', 'basic');
    equal(S.vsprintf(['me'])('Hello %s'), 'Hello me', 'object');
    equal(S.vsprintf([1.22222])('%.1f'), '1.2', 'round');
    equal(S.vsprintf([1.17])('%.1f'), '1.2', 'round 2');
    equal(S.vsprintf([{id: 824, name: 'Hello World'}])('%(id)d - %(name)s'), '824 - Hello World', 'Named replacement works');
    equal(S.vsprintf([{args: [{id: 824}, {name: 'Hello World'}]}])('%(args[0].id)d - %(args[1].name)s'), '824 - Hello World', 'Named replacement with arrays works');
  });

  test('Strings: startsWith', function() {
    ok(S.startsWith('foo')('foobar'), 'foobar starts with foo');
    ok(!S.startsWith('foo')('oobar'), 'oobar does not start with foo');
    ok(S.startsWith('o')('oobar'), 'oobar starts with o');
    ok(S.startsWith(123)(12345), '12345 starts with 123');
    ok(!S.startsWith(123)(2345), '2345 does not start with 123');
    ok(S.startsWith('')(''), 'empty string starts with empty string');
    ok(S.startsWith('')(null), 'null starts with empty string');
    ok(!S.startsWith('foo')(null), 'null starts with foo');
    ok(S.startsWithAt(1)('foo')('-foobar'), 'foobar starts with foo at position 1');
    ok(S.startsWithAt(0)('foo')('foobar'), 'foobar starts with foo at position 0');
    ok(!S.startsWithAt(1)('foo')('foobar'), 'foobar starts not with foo at position 1');
    ok(S.startsWith('Ä')('Äpfel'), 'string starts with a unicode');

    strictEqual(S.startsWith('hell')('hello'), true);
    strictEqual(S.startsWith('HELL')('HELLO'), true);
    strictEqual(S.startsWith('hell')('HELLO'), false);
    strictEqual(S.startsWith('hell')('HELLO'), false);
    strictEqual(S.startsWithAt(0)('hell')('hello'), true);
    strictEqual(S.startsWithAt(0)('HELL')('HELLO'), true);
    strictEqual(S.startsWithAt(0)('hell')('HELLO'), false);
    strictEqual(S.startsWithAt(0)('hell')('HELLO'), false);
    strictEqual(S.startsWith(null)('null'), true);
    strictEqual(S.startsWithAt(-20)('hell')('hello'), true);
    strictEqual(S.startsWithAt(1)('hell')('hello'), false);
    strictEqual(S.startsWithAt(2)('hell')('hello'), false);
    strictEqual(S.startsWithAt(3)('hell')('hello'), false);
    strictEqual(S.startsWithAt(4)('hell')('hello'), false);
    strictEqual(S.startsWithAt(5)('hell')('hello'), false);
    strictEqual(S.startsWithAt(20)('hell')('hello'), false);
  });

  test('Strings: endsWith', function() {
    ok(S.endsWith('bar')('foobar'), 'foobar ends with bar');
    ok(S.endsWith('bar')('foobarfoobar'), 'foobar ends with bar');
    ok(S.endsWith('o')('foo'), 'foobar ends with o');
    ok(S.endsWith('bar')('foobar'), 'foobar ends with bar');
    ok(S.endsWith('mp4')('00018-0000062.Plone.sdh264.1a7264e6912a91aa4a81b64dc5517df7b8875994.mp4'), 'endsWith .mp4');
    ok(!S.endsWith('bar')('fooba'), 'fooba does not end with bar');
    ok(S.endsWith(45)(12345), '12345 ends with 45');
    ok(!S.endsWith(6)(12345), '12345 does not end with 6');
    ok(S.endsWith('')(''), 'empty string ends with empty string');
    ok(S.endsWith('')(null), 'null ends with empty string');
    ok(!S.endsWith('foo')(null), 'null ends with foo');
    ok(S.endsWithAt(6)('bar')('foobar?'), 'foobar ends with bar at position 6');
    ok(S.endsWithAt(4)(34)(12345), 'number ends with 34 at position 4');
    ok(!S.endsWithAt(4)(45)(12345), 'number ends not with 45 at position 4');
    ok(S.endsWith('ä')('foobä'), 'string ends with a unicode');

    strictEqual(S.endsWith('der')('vader'), true);
    strictEqual(S.endsWith('DER')('VADER'), true);
    strictEqual(S.endsWith('der')('VADER'), false);
    strictEqual(S.endsWith('DeR')('VADER'), false);
    strictEqual(S.endsWith(null)('null'), true);
    strictEqual(S.endsWithAt(5)('der')('vader'), true);
    strictEqual(S.endsWithAt(5)('DER')('VADER'), true);
    strictEqual(S.endsWithAt(5)('der')('VADER'), false);
    strictEqual(S.endsWithAt(5)('DER')('VADER'), true);
    strictEqual(S.endsWithAt(5)('der')('VADER'), false);
    strictEqual(S.endsWithAt(-20)('der')('vader'), false);
    strictEqual(S.endsWithAt(0)('der')('vader'), false);
    strictEqual(S.endsWithAt(1)('der')('vader'), false);
    strictEqual(S.endsWithAt(2)('der')('vader'), false);
    strictEqual(S.endsWithAt(3)('der')('vader'), false);
    strictEqual(S.endsWithAt(4)('der')('vader'), false);
  });

  test('Strings: include', function() {
    ok(S.include('bar')('foobar'), 'foobar includes bar');
    ok(!S.include('buzz')('foobar'), 'foobar does not includes buzz');
    ok(S.include(34)(12345), '12345 includes 34');
    ok(!S.contains(6)(12345), '12345 does not includes 6');
    ok(!S.include(34)(''), 'empty string includes 34');
    ok(!S.include(34)(null), 'null includes 34');
    ok(S.include('')(null), 'null includes empty string');
  });

  test('String: chop', function(){
    ok(S.chop(2)('whitespace').length === 5, 'output [wh, it, es, pa, ce]');
    ok(S.chop(3)('whitespace').length === 4, 'output [whi, tes, pac, e]');
    ok(S.chop(0)('whitespace')[0].length === 10, 'output [whitespace]');
    ok(S.chop(1)(12345).length === 5, 'output [1, 2, 3,  4, 5]');
  });

  test('String: clean', function(){
    equal(S.clean()(' foo     bar   '), 'foo bar');
    equal(S.clean()(''), '');
    equal(S.clean()(null), '');
    equal(S.clean()(1), '1');
  });

  test('String: count', function(){
    equal(S.count('l')('Hello world'), 3);
    equal(S.count('Hello')('Hello world'), 1);
    equal(S.count('foo')('Hello world'), 0);
    equal(S.count('x')('x.xx....x.x'), 5);
    equal(S.count('x')(''), 0);
    equal(S.count('x')(null), 0);
    equal(S.count(1)(12345), 1);
    equal(S.count(1)(11345), 2);
    equal(S.count('')('Hello World'), 0);
    equal(S.count(null)('Hello World'), 0);
    equal(S.count('')(''), 0);
    equal(S.count(null)(null), 0);
  });

  test('String: insert', function(){
    equal(S.insert('Jessy', 6)('Hello '), 'Hello Jessy');
    equal(S.insert('Jessy', 100)('Hello '), 'Hello Jessy');
    equal(S.insert('Jessy', 100)(''), 'Jessy');
    equal(S.insert('Jessy', 100)(null), 'Jessy');
    equal(S.insert('Jessy', 6)(12345), '12345Jessy');
  });

  test('String: replaceAll', function(){
    equal(S.replaceAll('b', 'a')('a'), 'b');
    equal(S.replaceAll('b', 'a')('aa'), 'bb');
    equal(S.replaceAll('b', 'a')('aca'), 'bcb');
    equal(S.replaceAll('b', 'a')('ccc'), 'ccc');
    equal(S.replaceAll('b', 'a')('AAa'), 'AAb');
    equal(S.replaceAllIgnoreCase('b', 'a')('Aa'), 'bb');
    equal(S.replaceAll('moo', 'foo')('foo bar foo'), 'moo bar moo');
    equal(S.replaceAll('moo', 'foo')('foo bar\n foo'), 'moo bar\n moo');
    equal(S.replaceAllIgnoreCase('moo', 'foo')('foo bar FoO'), 'moo bar moo');
    equal(S.replaceAll('b', 'a')(''), '');
    equal(S.replaceAll('b', 'a')(null), '');
    equal(S.replaceAll('b', 'a')(12345), 12345);
  });

  test('String: splice', function(){
    equal(S.splice('epeli')(7)(30)('https://edtsech@bitbucket.org/edtsech/underscore.strings'),
           'https://edtsech@bitbucket.org/epeli/underscore.strings');
    equal(S.splice(321)(2)(1)(12345), '132145', 'Non strings');
  });

  test('String: pred', function(){
    equal(S.pred()('b'), 'a');
    equal(S.pred()('B'), 'A');
    equal(S.pred()(','), '+');
    equal(S.pred()(2), '1');
    deepEqual(S.pred()('').length, 0);
    deepEqual(S.pred()(null).length, 0);
    deepEqual(S.pred()(''), '');
    deepEqual(S.pred()(null), '');
  });

  test('String: succ', function(){
    equal(S.succ()('a'), 'b');
    equal(S.succ()('A'), 'B');
    equal(S.succ()('+'), ',');
    equal(S.succ()(1), '2');
    deepEqual(S.succ()('').length, 0);
    deepEqual(S.succ()(null).length, 0);
    deepEqual(S.succ()(''), '');
    deepEqual(S.succ()(null), '');
  });

  test('String: titleize', function(){
    equal(S.titleize()('the titleize string method'), 'The Titleize String Method');
    equal(S.titleize()('the titleize string  method'), 'The Titleize String  Method');
    equal(S.titleize()(''), '', 'Titleize empty string returns empty string');
    equal(S.titleize()(null), '', 'Titleize null returns empty string');
    equal(S.titleize()('let\'s have some fun'), 'Let\'s Have Some Fun');
    equal(S.titleize()('a-dash-separated-string'), 'A-Dash-Separated-String');
    equal(S.titleize()('A-DASH-SEPARATED-STRING'), 'A-Dash-Separated-String');
    equal(S.titleize()(123), '123');
  });

  test('String: pascalize', function(){
    equal(S.pascalize()('the_pascalize_string_method'), 'thePascalizeStringMethod');
    equal(S.pascalize()('webkit-transform'), 'webkitTransform');
    equal(S.pascalize()('-the-pascalize-string-method'), 'ThePascalizeStringMethod');
    equal(S.pascalize()('_the_pascalize_string_method'), 'ThePascalizeStringMethod');
    equal(S.pascalize()('The-pascalize-string-method'), 'ThePascalizeStringMethod');
    equal(S.pascalize()('the pascalize string method'), 'thePascalizeStringMethod');
    equal(S.pascalize()(' the pascalize  string method'), 'thePascalizeStringMethod');
    equal(S.pascalize()('the pascalize   string method'), 'thePascalizeStringMethod');
    equal(S.pascalize()(' with   spaces'), 'withSpaces');
    equal(S.pascalize()("_som eWeird---name-"), 'SomEWeirdName');
    equal(S.pascalize()(''), '', 'pascalize empty string returns empty string');
    equal(S.pascalize()(null), '', 'pascalize null returns empty string');
    equal(S.pascalize()(123), '123');
  });

  test('String: camelize', function(){
    equal(S.camelize()('the_camelize_string_method'), 'theCamelizeStringMethod');
    equal(S.camelize()('webkit-transform'), 'webkitTransform');
    equal(S.camelize()('-the-camelize-string-method'), 'theCamelizeStringMethod');
    equal(S.camelize()('_the_camelize_string_method'), 'theCamelizeStringMethod');
    equal(S.camelize()('The-camelize-string-method'), 'theCamelizeStringMethod');
    equal(S.camelize()('the camelize string method'), 'theCamelizeStringMethod');
    equal(S.camelize()(' the camelize  string method'), 'theCamelizeStringMethod');
    equal(S.camelize()('the camelize   string method'), 'theCamelizeStringMethod');
    equal(S.camelize()(' with   spaces'), 'withSpaces');
    equal(S.camelize()("_som eWeird---name-"), 'somEWeirdName');
    equal(S.camelize()(''), '', 'camelize empty string returns empty string');
    equal(S.camelize()(null), '', 'camelize null returns empty string');
    equal(S.camelize()(123), '123');
  });

  test('String: underscored', function(){
    equal(S.underscored()('the-underscored-string-method'), 'the_underscored_string_method');
    equal(S.underscored()('theUnderscoredStringMethod'), 'the_underscored_string_method');
    equal(S.underscored()('TheUnderscoredStringMethod'), 'the_underscored_string_method');
    equal(S.underscored()(' the underscored  string method'), 'the_underscored_string_method');
    equal(S.underscored()(''), '');
    equal(S.underscored()(null), '');
    equal(S.underscored()(123), '123');
  });

  test('String: dasherize', function(){
    equal(S.dasherize()('the_dasherize_string_method'), 'the-dasherize-string-method');
    equal(S.dasherize()('TheDasherizeStringMethod'), '-the-dasherize-string-method');
    equal(S.dasherize()('thisIsATest'), 'this-is-a-test');
    equal(S.dasherize()('this Is A Test'), 'this-is-a-test');
    equal(S.dasherize()('thisIsATest123'), 'this-is-a-test123');
    equal(S.dasherize()('123thisIsATest'), '123this-is-a-test');
    equal(S.dasherize()('the dasherize string method'), 'the-dasherize-string-method');
    equal(S.dasherize()('the  dasherize string method  '), 'the-dasherize-string-method');
    equal(S.dasherize()('téléphone'), 'téléphone');
    equal(S.dasherize()('foo$bar'), 'foo$bar');
    equal(S.dasherize()(''), '');
    equal(S.dasherize()(null), '');
    equal(S.dasherize()(123), '123');
  });

  test('String: classify', function(){
    equal(S.classify(1), '1');
    equal(S.classify()('some_class_name'), 'SomeClassName');
    equal(S.classify()('my wonderfull class_name'), 'MyWonderfullClassName');
    equal(S.classify()('my wonderfull.class.name'), 'MyWonderfullClassName');
    equal(S.classify()('myLittleCamel'), 'MyLittleCamel');
    equal(S.classify()('myLittleCamel.class.name'), 'MyLittleCamelClassName');
    equal(S.classify()(123), '123');
    equal(S.classify()(''), '');
    equal(S.classify()(null), '');
  });

  test('String: humanize', function(){
    equal(S.humanize()('the_humanize_string_method'), 'The humanize string method');
    equal(S.humanize()('ThehumanizeStringMethod'), 'Thehumanize string method');
    equal(S.humanize()('-ThehumanizeStringMethod'), 'Thehumanize string method');
    equal(S.humanize()('the humanize string method'), 'The humanize string method');
    equal(S.humanize()('the humanize_id string method_id'), 'The humanize id string method');
    equal(S.humanize()('the  humanize string method  '), 'The humanize string method');
    equal(S.humanize()('   capitalize dash-CamelCase_underscore trim  '), 'Capitalize dash camel case underscore trim');
    equal(S.humanize()(123), '123');
    equal(S.humanize()(''), '');
    equal(S.humanize()(null), '');
  });

  test('String: truncate', function(){
    equal(S.truncate('read more')(6)('Hello world'), 'Hello read more');
    equal(S.truncate('...')(5)('Hello world'), 'Hello...');
    equal(S.truncate('...')(10)('Hello'), 'Hello');
    equal(S.truncate('...')(10)(''), '');
    equal(S.truncate('...')(10)(null), '');
    equal(S.truncate('...')(5)(1234567890), '12345...');
  });

  test('String: prune', function(){
    equal(S.prune(' read more')(6)('Hello, cruel world'), 'Hello read more');
    equal(S.prune('read a lot more')(5)('Hello, world'), 'Hello, world');
    equal(S.prune('...')(5)('Hello, world'), 'Hello...');
    equal(S.prune('...')(8)('Hello, world'), 'Hello...');
    equal(S.prune('...')(15)('Hello, cruel world'), 'Hello, cruel...');
    equal(S.prune('...')(22)('Hello world'), 'Hello world');
    equal(S.prune(' read more')(6)('Привет, жестокий мир'), 'Привет read more');
    equal(S.prune('read a lot more')(6)('Привет, мир'), 'Привет, мир');
    equal(S.prune('...')(6)('Привет, мир'), 'Привет...');
    equal(S.prune('...')(8)('Привет, мир'), 'Привет...');
    equal(S.prune('...')(16)('Привет, жестокий мир'), 'Привет, жестокий...');
    equal(S.prune('...')(22)('Привет, мир'), 'Привет, мир');
    equal(S.prune('')(100)('alksjd!!!!!!....'), 'alksjd!!!!!!....');
    equal(S.prune('...')(10)(123), '123');
    equal(S.prune(321)(1)(123), '321');
    equal(S.prune('...')(5)(''), '');
    equal(S.prune('...')(5)(null), '');
  });

  test('String: isBlank', function(){
    ok(S.isBlank()(''));
    ok(S.isBlank()(' '));
    ok(S.isBlank()('\n'));
    ok(!S.isBlank()('a'));
    ok(!S.isBlank()('0'));
    ok(!S.isBlank()(0));
    ok(S.isBlank()(''));
    ok(S.isBlank()(null));
  });

  test('String: escapeRegExp', function(){
    equal(S.escapeRegExp(/hello(?=\sworld)/.source), 'hello\\(\\?\\=\\\\sworld\\)', 'with lookahead');
    equal(S.escapeRegExp(/hello(?!\shell)/.source), 'hello\\(\\?\\!\\\\shell\\)', 'with negative lookahead');
  });

  test('String: escapeHTML', function(){
    equal(S.escapeHTML()('<div>Blah & "blah" & \'blah\'</div>'),
             '&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &#39;blah&#39;&lt;/div&gt;');
    equal(S.escapeHTML()('&lt;'), '&amp;lt;');
    equal(S.escapeHTML()(5), '5');
    equal(S.escapeHTML()(''), '');
    equal(S.escapeHTML()(null), '');
  });

  test('String: unescapeHTML', function(){
    equal(S.unescapeHTML()('&lt;div&gt;Blah &amp; &quot;blah&quot; &amp; &apos;blah&#39;&lt;/div&gt;'),
             '<div>Blah & "blah" & \'blah\'</div>');
    equal(S.unescapeHTML()('&amp;lt;'), '&lt;');
    equal(S.unescapeHTML()('&apos;'), '\'');
    equal(S.unescapeHTML()('&#39;'), '\'');
    equal(S.unescapeHTML()('&#0039;'), '\'');
    equal(S.unescapeHTML()('&#x4a;'), 'J');
    equal(S.unescapeHTML()('&#x04A;'), 'J');
    equal(S.unescapeHTML()('&#X4A;'), '&#X4A;');
    equal(S.unescapeHTML()('&_#39;'), '&_#39;');
    equal(S.unescapeHTML()('&#39_;'), '&#39_;');
    equal(S.unescapeHTML()('&amp;#38;'), '&#38;');
    equal(S.unescapeHTML()('&#38;amp;'), '&amp;');
    equal(S.unescapeHTML()(''), '');
    equal(S.unescapeHTML()(null), '');
    equal(S.unescapeHTML()(5), '5');
  });

  test('String: words', function() {
    deepEqual(S.words()('I love you!'), ['I', 'love', 'you!']);
    deepEqual(S.words()(' I    love   you!  '), ['I', 'love', 'you!']);
    deepEqual(S.words()(123), ['123'], '123 number has one word "123".');
    deepEqual(S.words()(0), ['0'], 'Zero number has one word "0".');
    deepEqual(S.words()(''), [], 'Empty strings has no words.');
    deepEqual(S.words()('   '), [], 'Blank strings has no words.');
    deepEqual(S.words()(null), [], 'null has no words.');
    deepEqual(S.wordsDelim('_')('I_love_you!'), ['I', 'love', 'you!']);
    deepEqual(S.wordsDelim(/-/)('I-love-you!'), ['I', 'love', 'you!']);
  });

  test('String: chars', function() {
    equal(S.chars()('Hello').length, 5);
    equal(S.chars()(123).length, 3);
    equal(S.chars()('').length, 0);
    equal(S.chars()(null).length, 0);
  });

  test('String: swapCase', function(){
	  equal(S.swapCase()('AaBbCcDdEe'), 'aAbBcCdDeE');
    equal(S.swapCase()('Hello World'), 'hELLO wORLD');
    equal(S.swapCase()(''), '');
    equal(S.swapCase()(null), '');
  });

  test('String: lines', function() {
    equal(S.lines()('Hello\nWorld').length, 2);
    equal(S.lines()('Hello World').length, 1);
    equal(S.lines()(123).length, 1);
    deepEqual(S.lines()(''), ['']);
    deepEqual(S.lines()(null), []);
    deepEqual(S.lines()('Hello\rWorld'), ['Hello\rWorld']);
    deepEqual(S.lines()('Hello\r\nWorld'), ['Hello', 'World']);
  });

  test('String: dedent', function() {
    equal(S.dedent()('Hello\nWorld'), 'Hello\nWorld');
    equal(S.dedent()('Hello\t\nWorld'), 'Hello\t\nWorld');
    equal(S.dedent()('Hello \nWorld'), 'Hello \nWorld');
    equal(S.dedent()('Hello\n  World'), 'Hello\n  World');
    equal(S.dedent()('    Hello\n  World'), '  Hello\nWorld');
    equal(S.dedent()('  Hello\nWorld'), '  Hello\nWorld');
    equal(S.dedent()('  Hello World'), 'Hello World');
    equal(S.dedent()('  Hello\n  World'), 'Hello\nWorld');
    equal(S.dedent()('  Hello\n    World'), 'Hello\n  World');
    equal(S.dedent()('\t\tHello\tWorld'), 'Hello\tWorld');
    equal(S.dedent()('\t\tHello\n\t\tWorld'), 'Hello\nWorld');
    equal(S.dedent()('Hello\n\t\tWorld'), 'Hello\n\t\tWorld');
    equal(S.dedent()('\t\tHello\n\t\t\t\tWorld'), 'Hello\n\t\tWorld');
    equal(S.dedent()('\t\tHello\r\n\t\t\t\tWorld'), 'Hello\r\n\t\tWorld');
    equal(S.dedent()('\t\tHello\r\n\r\n\t\t\t\tWorld'), 'Hello\r\n\r\n\t\tWorld');
    equal(S.dedent()('\t\tHello\n\n\n\n\t\t\t\tWorld'), 'Hello\n\n\n\n\t\tWorld');
    equal(S.dedentPattern('\\t')('\t\t\tHello\n\t\tWorld'), '\t\tHello\n\tWorld');
    equal(S.dedentPattern('  ')('    Hello\n    World'), '  Hello\n  World');
    equal(S.dedentPattern('')('    Hello\n    World'), '    Hello\n    World');
    equal(S.dedentPattern('\\t')('\t\tHello\n\n\n\n\t\t\t\tWorld'), '\tHello\n\n\n\n\t\t\tWorld');
    equal(S.dedentPattern('\t')('Hello\n\t\tWorld'), 'Hello\n\t\tWorld');
    equal(S.dedentPattern(' ')('Hello\n  World'), 'Hello\n  World');
    equal(S.dedentPattern(' ')('  Hello\nWorld'), '  Hello\nWorld');
    deepEqual(S.dedent()(123), '123');
    deepEqual(S.dedent()(''), '');
    deepEqual(S.dedent()(null), '');
  });

  test('String: pad', function() {
    equal(S.pad(' ')(8)('1'), '       1');
    equal(S.pad(' ')(8)(1), '       1');
    equal(S.pad('0')(8)('1'), '00000001');
    equal(S.pad(' ')(2)(''), '  ');
    equal(S.pad(' ')(2)(null), '  ');
  });

  test('String: lpad', function() {
    equal(S.lpad(' ')(8)('1'), '       1');
    equal(S.lpad(' ')(8)(1), '       1');
    equal(S.lpad('0')(8)('1'), '00000001');
    equal(S.lpad('0')(8)('1'), '00000001');
    equal(S.lpad(' ')(2)(''), '  ');
    equal(S.lpad(' ')(2)(null), '  ');
  });

  test('String: rpad', function() {
    equal(S.rpad(' ')(8)('1'), '1       ');
    equal(S.lpad(' ')(8)(1), '       1');
    equal(S.rpad('0')(8)('1'), '10000000');
    equal(S.rpad('0')(8)('foo'), 'foo00000');
    equal(S.rpad('0')(7)('foo'), 'foo0000');
    equal(S.rpad(' ')(2)(''), '  ');
    equal(S.rpad(' ')(2)(null), '  ');
  });

  test('String: lrpad', function() {
    equal(S.lrpad(' ')(8)('1'), '    1   ');
    equal(S.lrpad(' ')(8)(1), '    1   ');
    equal(S.lrpad('0')(8)('1'), '00001000');
    equal(S.lrpad('0')(8)('foo'), '000foo00');
    equal(S.lrpad('0')(7)('foo'), '00foo00');
    equal(S.lrpad('!@$%dofjrofj')(7)('foo'), '!!foo!!');
    equal(S.lrpad(' ')(2)(''), '  ');
    equal(S.lrpad(' ')(2)(null), '  ');
  });

  test('String: toNumber', function() {
    _.each(['not a number', NaN, {}, [/a/], 'alpha6'], function(val) {
      deepEqual(S.toNumber(0)('not a number'), NaN);
      equal(S.toNumber(val)(Math.PI), 3);
    });
    equal(S.toNumber(0)(0), 0);
    equal(S.toNumber(0)('0'), 0);
    equal(S.toNumber(0)('0.0'), 0);
    equal(S.toNumber(0)('        0.0    '), 0);
    equal(S.toNumber(0)('0.1'), 0);
    equal(S.toNumber(1)('0.1'), 0.1);
    equal(S.toNumber(1)('  0.1 '), 0.1);
    equal(S.toNumber(0)('0000'), 0);
    equal(S.toNumber(0)('2.345'), 2);
    equal(S.toNumber(NaN)('2.345'), 2);
    equal(S.toNumber(2)('2.345'), 2.35);
    equal(S.toNumber(2)('2.344'), 2.34);
    equal(S.toNumber(2)('2'), 2.00);
    equal(S.toNumber(2)(2), 2.00);
    equal(S.toNumber(0)(-2), -2);
    equal(S.toNumber(0)('-2'), -2);
    equal(S.toNumber(3)(-2.5123), -2.512);

    // Negative precisions
    equal(S.toNumber(-1)(-234), -230);
    equal(S.toNumber(-2)(234), 200);
    equal(S.toNumber(-2)('234'), 200);

    _.each(['', null], function(val) {
      equal(S.toNumber(0)(val), 0);
    });

    _.each([Infinity, -Infinity], function(val) {
      equal(S.toNumber(0)(val), val);
      equal(S.toNumber(val)(val), val);
      equal(S.toNumber(val)(1), 1);
    });
  });

  test('String: numberFormat', function() {
    equal(S.numberFormat()(9000), '9,000');
    equal(S.numberFormat()(1000.754), '1,001');
    equal(S.numberFormatDecimal(0)(9000), '9,000');
    equal(S.numberFormatDecimal(2)(90000), '90,000.00');
    equal(S.numberFormatDecimal(2)(1000.754), '1,000.75');
    equal(S.numberFormatDecimal(2)(1000.755), '1,000.75');
    equal(S.numberFormatDecimal(2)(1000.756), '1,000.76');
    equal(S.numberFormatSeparator('')('')(0)(9000), '9000');
    equal(S.numberFormatSeparator(',')('.')(0)(1000.754), '1.001');
    equal(S.numberFormatSeparator(',')('.')(2)(1000.754), '1.000,75');
    equal(S.numberFormatSeparator(',')('.')(2)(1000000.754), '1.000.000,75');
    equal(S.numberFormat(1000000000), '1,000,000,000');
    equal(S.numberFormat(100000000), '100,000,000');
    equal(S.numberFormat('not number'), '');
    equal(S.numberFormat(new Number(5000)), '5,000');
  });

  test('String: strRight', function() {
    equal(S.strRight('_')('This_is_a_test_string'), 'is_a_test_string');
    equal(S.strRight('string')('This_is_a_test_string'), '');
    equal(S.strRight('')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strRight('-')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strRight('')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strRight('foo')(''), '');
    equal(S.strRight('foo')(null), '');
    equal(S.strRight(2)(12345), '345');
  });

  test('String: strRightBack', function() {
    equal(S.strRightBack('_')('This_is_a_test_string'), 'string');
    equal(S.strRightBack('string')('This_is_a_test_string'), '');
    equal(S.strRightBack('')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strRightBack('-')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strRightBack('foo')(''), '');
    equal(S.strRightBack('foo')(null), '');
    equal(S.strRightBack(2)(12345), '345');
  });

  test('String: strLeft', function() {
    equal(S.strLeft('_')('This_is_a_test_string'), 'This');
    equal(S.strLeft('This')('This_is_a_test_string'), '');
    equal(S.strLeft('')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strLeft('-')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strLeft('foo')(''), '');
    equal(S.strLeft('foo')(null), '');
    equal(S.strLeft(3)(123454321), '12');
  });

  test('String: strLeftBack', function() {
    equal(S.strLeftBack('_')('This_is_a_test_string'), 'This_is_a_test');
    equal(S.strLeftBack('This')('This_is_a_test_string'), '');
    equal(S.strLeftBack('')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strLeftBack('-')('This_is_a_test_string'), 'This_is_a_test_string');
    equal(S.strLeftBack('foo')(''), '');
    equal(S.strLeftBack('foo')(null), '');
    equal(S.strLeftBack(3)(123454321), '123454');
  });

  test('Strings: stripTags', function() {
    equal(S.stripTags()('a <a href="#">link</a>'), 'a link');
    equal(S.stripTags()('a <a href="#">link</a><script>alert("hello world!")</scr'+'ipt>'), 'a linkalert("hello world!")');
    equal(S.stripTags()('<html><body>hello world</body></html>'), 'hello world');
    equal(S.stripTags()(123), '123');
    equal(S.stripTags()(''), '');
    equal(S.stripTags()(null), '');
  });

  test('Strings: toSentence', function() {
    equal(S.toSentence(' and ')(', ')(['jQuery']), 'jQuery', 'array with a single element');
    equal(S.toSentence(' and ')(', ')(['jQuery', 'MooTools']), 'jQuery and MooTools', 'array with two elements');
    equal(S.toSentence(' and ')(', ')(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools and Prototype', 'array with three elements');
    equal(S.toSentence(' and ')(', ')(['jQuery', 'MooTools', 'Prototype', 'YUI']), 'jQuery, MooTools, Prototype and YUI', 'array with multiple elements');
    equal(S.toSentence(' or ')(',')(['jQuery', 'MooTools', 'Prototype']), 'jQuery,MooTools or Prototype', 'handles custom separators');
  });

  test('Strings: toSentenceSerial', function (){
    equal(S.toSentenceSerial(' and ')(', ')(['jQuery']), 'jQuery');
    equal(S.toSentenceSerial(' and ')(', ')(['jQuery', 'MooTools']), 'jQuery and MooTools');
    equal(S.toSentenceSerial(' and ')(', ')(['jQuery', 'MooTools', 'Prototype']), 'jQuery, MooTools, and Prototype');
  });

  test('Strings: slugify', function() {
    equal(S.slugify()('Jack & Jill like numbers 1,2,3 and 4 and silly characters ?%.$!/'), 'jack-jill-like-numbers-1-2-3-and-4-and-silly-characters');
    equal(S.slugify()('Un éléphant à l\'orée du bois'), 'un-elephant-a-l-oree-du-bois');
    equal(S.slugify()('I know latin characters: á í ó ú ç ã õ ñ ü ă ș ț'), 'i-know-latin-characters-a-i-o-u-c-a-o-n-u-a-s-t');
    equal(S.slugify()('I am a word too, even though I am but a single letter: i!'), 'i-am-a-word-too-even-though-i-am-but-a-single-letter-i');
    equal(S.slugify()('Some asian 天地人 characters'), 'some-asian-characters');
    equal(S.slugify()(''), '');
    equal(S.slugify()(null), '');
  });

  test('Strings: quote', function(){
    equal(S.quote('"')('foo'), '"foo"');
    equal(S.quote('"')('"foo"'), '""foo""');
    equal(S.quote('"')(1), '"1"');
    equal(S.quote("'")("foo"), "'foo'");
  });

  test('Strings: unquote', function(){
    equal(S.unquote('"')('"foo"'), 'foo');
    equal(S.unquote('"')('""foo""'), '"foo"');
    equal(S.unquote('"')('"1"'), '1');
    equal(S.unquote("'")("'foo'"), 'foo');
  });

  test('Strings: surround', function(){
    equal(S.surround('ab')('foo'), 'abfooab');
    equal(S.surround('ab')(1), 'ab1ab');
    equal(S.surround(2)(1), '212');
    equal(S.surround(1)('foo'), '1foo1');
    equal(S.surround(1)(''), '11');
    equal(S.surround(1)(null), '11');
    equal(S.surround('')('foo'), 'foo');
    equal(S.surround(null)('foo'), 'foo');
  });


  test('Strings: repeat', function() {
    equal(S.repeat('')(0)('foo'), '');
    equal(S.repeat('')(3)('foo'), 'foofoofoo');
    equal(S.repeat('')('3')('foo'), 'foofoofoo');
    equal(S.repeat('')(2)(123), '123123');
    equal(S.repeat('*')(2)(1234), '1234*1234');
    equal(S.repeat(5)(2)(1234), '123451234');
    equal(S.repeat('')('')(2), '');
    equal(S.repeat('')(null)(2), '');
  });

  test('String: toBoolean', function() {
    strictEqual(S.toBoolean()("false"), false);
    strictEqual(S.toBoolean()("false"), false);
    strictEqual(S.toBoolean()("False"), false);
    strictEqual(S.toBoolean()("true"), true);
    strictEqual(S.toBoolean()("true"), true);
    strictEqual(S.toBoolean()("trUe"), true);
    strictEqual(S.toBoolean()("something else"), undefined);
    strictEqual(S.toBoolean()(function(){}), true);
    strictEqual(S.toBoolean()(/regexp/), true);
    strictEqual(S.toBoolean()(""), undefined);
    strictEqual(S.toBoolean()(0), false);
    strictEqual(S.toBoolean()(1), true);
    strictEqual(S.toBoolean()("1"), true);
    strictEqual(S.toBoolean()("0"), false);
    strictEqual(S.toBoolean()(2), undefined);
    strictEqual(S.toBoolean()("foo true bar"), undefined);
    strictEqual(S.toBoolean()(" true  "), true);
  });

});
