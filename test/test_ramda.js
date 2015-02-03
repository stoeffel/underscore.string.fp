$(document).ready(function() {

  module("Ramda");

  test("using it with ramda", function() {
    deepEqual(R.map(S.camelize(), [
      'Moo boo',
      'Foo bar'
    ]), ['mooBoo', 'fooBar']);

    deepEqual(R.filter(S.startsWith('.'), [
      '.vimrc',
      'foo.md',
      '.zshrc'
    ]), ['.vimrc', '.zshrc']);
  });

});
