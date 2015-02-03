$(document).ready(function() {

  module("Standalone usage");

  test("provides standalone functions via the S global", function() {
    equal(typeof S.trim, "function");
  });

  test("S should be a function to compose a new function", function() {
    var rockit = S(
      S.titleize(),
      S.insert('rocks', 9),
      S.trim('_')
    );

    equal(typeof rockit, 'function');
    equal(rockit("__stoeffel !__"), 'Stoeffel Rocks!');
  });

});
