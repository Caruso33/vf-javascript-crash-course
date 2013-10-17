/**
 * Variable scoping in JavaScript is unusual, and quite unlike most of the
 * C-like languages. Important points to note are:
 *
 * 1. variables initialized with "var" are local variables
 * 2. variables initialized without "var" are global variables
 * 3. "hoisting" occurs (see MDN link below)
 */

// Because foo was not declared with "var" it is a global variable. Many
// consider this to be a mis-feature of JavaScript.
foo     = 'foo';

// bar is a local variable declared within the global scope
var bar = 'bar';

// verify the obvious
console.log('1. foo: ' + foo);
console.log('2. bar: ' + bar);

// In JavaScript, the /only/ way to create a new scope block is by entering
// into a function body
function baz () {
  // bat is scoped within baz only
  var bat = 'bat';

  // foo is a global, and is inherited from the global scope
  console.log('3. foo: ' + foo);

  // though it is a local variable, bar is inherited from the global scope as
  // well, because scopes inherit from their parent scopes
  console.log('4. bar: ' + bar);
  console.log('5. bat: ' + bat);

  // bar can be reassigned a local value, HOWEVER - doing so will undefine bar
  // (4) due to "hoisting":
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Scope_Cheatsheet

  //var bar = 'new';
  //console.log('6. bar: ' + bar);

  // declare a global variable within the function body of baz
  wut = 'wut';
}

// invoke baz
baz();

// reassigning bar within baz does not change the value of bar within the
// global scope:
console.log('7. bar: ' + bar);

// despite the fact that it was created within baz(), wut is accessible within
// the global scope because it was initialized without "var" and is thus a
// global variable.
console.log('8. wut: ' + wut);

// This will cause a fatal error because bat is not within the global scope
//console.log(bat); 
