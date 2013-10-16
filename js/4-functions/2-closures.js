/**
 * In JavaScript, the only way to create a new scope is by entering into a
 * function body. Thus, anonymous functions can be created explicitly for this
 * purpose. The following pattern (toward that end) is called a "closure":
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures
 */

// create variables in the global scope
var foo = 'foo';
var bar = 'bar';

console.log('foo, before closure: ' + foo);
console.log('bar, before closure: ' + bar);

(function() {
  // will this overwrite the global foo?
  var foo = 'baz';
  console.log('foo, inside closure: ' + foo);

  // bar is inherited from parent scope
  console.log('bar, inside closure: ' + bar);
})();

// foo remains unpolluted 
console.log('foo, after closure : ' + foo);
console.log('bar, after closure : ' + bar);
